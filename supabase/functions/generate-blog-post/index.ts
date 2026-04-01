import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

const TOPICS = [
  "Estate Planning",
  "Trusts",
  "Probate",
  "Powers of Attorney",
  "Prenuptial Agreements",
  "Asset Protection",
  "Estate Tax",
  "Guardianship",
] as const;

const TOPIC_PROMPTS: Record<string, string> = {
  "Estate Planning":
    "Illinois estate planning fundamentals, wills, beneficiary designations, estate plan reviews, blended family planning, digital assets, or estate planning for specific life events (marriage, new child, retirement, divorce).",
  Trusts:
    "Illinois revocable living trusts, irrevocable trusts, special needs trusts, trust funding, trustee selection, trust administration, or trust amendments and revocations.",
  Probate:
    "Illinois probate process, probate costs, probate timelines, small estate affidavits, summary probate, probate court procedures in Cook County, DuPage County, Kane County, or executor/administrator duties.",
  "Powers of Attorney":
    "Illinois statutory short form power of attorney, healthcare powers of attorney, financial powers of attorney, agent duties, springing vs. immediate powers, or revoking a power of attorney.",
  "Prenuptial Agreements":
    "Illinois prenuptial agreements, postnuptial agreements, enforceability requirements, what can and cannot be included, disclosure requirements, or common misconceptions.",
  "Asset Protection":
    "Illinois asset protection strategies, LLCs for real estate, homestead exemptions, retirement account protections, life insurance planning, or Medicaid planning.",
  "Estate Tax":
    "Illinois estate tax thresholds and rates, federal estate tax, portability elections, QTIP trusts, charitable deductions, gifting strategies, or generation-skipping transfer tax.",
  Guardianship:
    "Illinois adult guardianship, guardianship of minors, standby guardianship, guardianship alternatives, guardian ad litem, or guardianship court procedures.",
};

interface AnthropicMessage {
  role: string;
  content: string;
}

interface AnthropicResponse {
  content: Array<{ type: string; text: string }>;
}

async function callAnthropic(
  messages: AnthropicMessage[],
  systemPrompt: string,
  maxTokens: number = 8000
): Promise<string> {
  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY not configured");
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: maxTokens,
      system: systemPrompt,
      messages,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Anthropic API error: ${response.status} - ${errorText}`);
  }

  const data: AnthropicResponse = await response.json();
  return data.content[0].text;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 80);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    let requestedTopic: string | null = null;
    let requestedTitle: string | null = null;

    if (req.method === "POST") {
      try {
        const body = await req.json();
        requestedTopic = body.topic || null;
        requestedTitle = body.title || null;
      } catch {
        // no body is fine, we'll pick randomly
      }
    }

    const { data: existingPosts } = await supabase
      .from("blog_posts")
      .select("slug, title, topic")
      .order("published_date", { ascending: false });

    const existingSlugs = (existingPosts || []).map(
      (p: { slug: string }) => p.slug
    );
    const existingTitles = (existingPosts || []).map(
      (p: { title: string }) => p.title
    );

    const topicCounts: Record<string, number> = {};
    for (const t of TOPICS) topicCounts[t] = 0;
    for (const p of existingPosts || []) {
      if (topicCounts[p.topic] !== undefined) topicCounts[p.topic]++;
    }

    const topic =
      requestedTopic ||
      TOPICS.reduce((least, t) =>
        (topicCounts[t] || 0) < (topicCounts[least] || 0) ? t : least
      );

    const topicContext = TOPIC_PROMPTS[topic] || TOPIC_PROMPTS["Estate Planning"];

    const existingList = existingTitles
      .map((t: string) => `- ${t}`)
      .join("\n");

    const titleSystemPrompt = `You are a content strategist for Illinois Estate Law, a Chicago-based estate planning law firm. You create blog post titles that are:
- SEO-optimized for Illinois-specific estate planning searches
- Helpful and informative for Illinois residents
- Written in a professional but accessible tone
- Focused on practical, actionable topics people actually search for
- Long-tail keyword focused for better search ranking

The firm serves Cook County, DuPage County, Kane County, and the greater Chicago area. The attorney is Mary Liberty.`;

    const titlePrompt = `Generate exactly ONE new blog post title for the topic "${topic}".

Topic area covers: ${topicContext}

EXISTING posts (DO NOT duplicate these topics or titles):
${existingList}

Requirements:
- Must be unique and not overlap significantly with existing posts
- Must be Illinois-specific (mention Illinois, Chicago, Cook County, or related)
- Should target a specific long-tail keyword phrase people search for
- Between 8-16 words
- Should answer a specific question or address a specific concern

Respond with ONLY the title, nothing else.`;

    const generatedTitle =
      requestedTitle ||
      (await callAnthropic(
        [{ role: "user", content: titlePrompt }],
        titleSystemPrompt,
        200
      )).trim();

    const slug = generateSlug(generatedTitle);

    if (existingSlugs.includes(slug)) {
      return new Response(
        JSON.stringify({
          error: "Generated slug already exists",
          slug,
          title: generatedTitle,
        }),
        {
          status: 409,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const contentSystemPrompt = `You are a legal content writer for Illinois Estate Law, a Chicago-based estate planning law firm led by attorney Mary Liberty. You write comprehensive, well-researched blog posts about Illinois estate planning law.

Your writing style:
- Professional but warm and accessible, avoiding unnecessary legal jargon
- Uses real Illinois statutes and legal references when relevant (e.g., 755 ILCS for trusts, 760 ILCS for powers of attorney)
- Provides practical, actionable advice for Illinois residents
- Addresses common fears and misconceptions
- Uses concrete examples and scenarios relevant to Chicago-area families
- Naturally incorporates internal links to related content on the site

The firm's website is illinoisestatelaw.com. Services include:
- Wills and estate planning (/chicago-wills-lawyer/)
- Revocable trusts (/chicago-revocable-trusts-lawyer/)
- Powers of attorney (/chicago-powers-of-attorney-lawyer/)
- Healthcare directives (/chicago-healthcare-directives-lawyer/)
- Probate administration (/chicago-probate-lawyer/)
- Prenuptial agreements (/chicago-prenuptial-agreements-lawyer/)
- Deeds and property transfer (/chicago-deeds-lawyer/)
- Consultation booking (/book-consultation/)`;

    const relatedPosts = (existingPosts || [])
      .filter((p: { topic: string }) => p.topic === topic)
      .slice(0, 5)
      .map((p: { title: string; slug: string }) => `- "${p.title}" (/blog/${p.slug}/)`)
      .join("\n");

    const contentPrompt = `Write a comprehensive blog post titled: "${generatedTitle}"

Topic category: ${topic}

Related posts on the site to link to where naturally relevant:
${relatedPosts || "None yet in this category."}

CRITICAL FORMAT REQUIREMENTS:
Output ONLY the HTML content that goes inside an article body. This will be rendered inside an existing page layout using dangerouslySetInnerHTML.

Structure your HTML like this:
1. Start with a brief intro paragraph
2. Use <h2> for major sections (5-8 sections)
3. Use <h3> for subsections where needed
4. Use <p> tags for paragraphs
5. Use <ul>/<ol> with <li> for lists
6. Use <blockquote> for important callouts or key takeaways
7. Use <strong> for emphasis on key terms
8. Include a table of contents near the top using an ordered list with anchor links
9. Include a final CTA section encouraging readers to schedule a consultation
10. Include 2-4 internal links to related blog posts or service pages naturally within the text

DO NOT include:
- <html>, <head>, <body>, or <DOCTYPE> tags
- Any <style> tags or inline CSS
- Any <script> tags
- The post title (h1) -- this is rendered separately
- Any images or media

The post should be 1,500-2,500 words, thorough and authoritative. Use anchor IDs on h2 elements (e.g., <h2 id="section-name">) for the table of contents links.

Output ONLY the raw HTML content, no markdown, no code fences, no explanation.`;

    const htmlContent = await callAnthropic(
      [{ role: "user", content: contentPrompt }],
      contentSystemPrompt,
      8000
    );

    const cleanedContent = htmlContent
      .replace(/^```html?\s*/i, "")
      .replace(/\s*```\s*$/i, "")
      .trim();

    const metaSystemPrompt =
      "You write concise, SEO-optimized meta descriptions for legal blog posts. Each should be 150-160 characters, include the primary keyword, and encourage clicks.";

    const metaPrompt = `Write a meta description for a blog post titled: "${generatedTitle}"

Topic: ${topic}
The blog is for Illinois Estate Law, a Chicago estate planning firm.

Respond with ONLY the meta description text, nothing else. Keep it between 150-160 characters.`;

    const metaDescription = (
      await callAnthropic(
        [{ role: "user", content: metaPrompt }],
        metaSystemPrompt,
        100
      )
    ).trim();

    const internalLinksPrompt = `Based on the blog post titled "${generatedTitle}" in the topic "${topic}", suggest 3-4 related articles from this list that readers would find helpful:

${existingTitles.map((t: string, i: number) => `- "${t}" (/blog/${existingSlugs[i]}/)`).join("\n")}

Also include 1-2 service pages:
- Wills (/chicago-wills-lawyer/)
- Trusts (/chicago-revocable-trusts-lawyer/)
- Powers of Attorney (/chicago-powers-of-attorney-lawyer/)
- Healthcare Directives (/chicago-healthcare-directives-lawyer/)
- Probate (/chicago-probate-lawyer/)
- Prenuptial Agreements (/chicago-prenuptial-agreements-lawyer/)
- Deeds (/chicago-deeds-lawyer/)

Respond with ONLY a JSON array of objects with "text" and "url" keys. Example:
[{"text": "Article Title", "url": "/blog/slug/"}]`;

    const linksResponse = await callAnthropic(
      [{ role: "user", content: internalLinksPrompt }],
      "You select related articles for blog post sidebars. Respond with only valid JSON.",
      500
    );

    let internalLinks = null;
    try {
      const jsonMatch = linksResponse.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        internalLinks = JSON.parse(jsonMatch[0]);
      }
    } catch {
      internalLinks = null;
    }

    const { data: insertedPost, error: insertError } = await supabase
      .from("blog_posts")
      .insert({
        title: generatedTitle,
        slug,
        content: cleanedContent,
        meta_description: metaDescription,
        topic,
        published_date: new Date().toISOString(),
        author: "Illinois Estate Law",
        internal_links: internalLinks,
      })
      .select("id, title, slug, topic, published_date")
      .maybeSingle();

    if (insertError) {
      throw new Error(`Database insert failed: ${insertError.message}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        post: insertedPost,
        message: `Blog post "${generatedTitle}" published successfully.`,
      }),
      {
        status: 201,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
