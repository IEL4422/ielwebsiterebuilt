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

const ILLINOIS_STATUTES: Record<string, string> = {
  "Estate Planning":
    "755 ILCS 5 (Probate Act), 760 ILCS 3 (Trust Code), 755 ILCS 6 (Powers of Attorney Act). Illinois Compiled Statutes are the primary source. Reference specific sections when discussing particular rules.",
  Trusts:
    "760 ILCS 3 (Illinois Trust Code, effective Jan 1 2020), 760 ILCS 5 (older Trusts and Trustees Act for trusts created before 2020). Key sections: 760 ILCS 3/1005 (trustee duties), 760 ILCS 3/816 (trustee powers).",
  Probate:
    "755 ILCS 5 (Illinois Probate Act of 1975). Key sections: Art. VI (letters of office), Art. XII (claims against estate), Art. XXIV (small estate affidavit under 755 ILCS 5/25-1). Cook County probate forms at cookcountyclerkofcourt.org.",
  "Powers of Attorney":
    "755 ILCS 45 (Illinois Power of Attorney Act). Key sections: 755 ILCS 45/2-1 (statutory short form), 755 ILCS 45/4-1 through 4-12 (healthcare power of attorney). Note: Illinois uses a specific statutory short form.",
  "Prenuptial Agreements":
    "750 ILCS 10 (Illinois Uniform Premarital Agreement Act). Key requirements: must be in writing, signed by both parties, voluntary, with fair disclosure of assets. 750 ILCS 5/503 (marital property division) is also relevant.",
  "Asset Protection":
    "805 ILCS 180 (Illinois Limited Liability Company Act), 735 ILCS 5/12-901 (homestead exemption of $15,000), 735 ILCS 5/12-1001 (personal property exemptions). Illinois is NOT a community property state.",
  "Estate Tax":
    "35 ILCS 405 (Illinois Estate and Generation-Skipping Transfer Tax Act). Illinois exemption is $4 million (as of 2024). Federal exemption is $13.61 million (2024). Illinois has no gift tax. Portability does NOT apply to the Illinois estate tax.",
  Guardianship:
    "755 ILCS 5/11a (Illinois Probate Act, Article XIa - guardianship of adults), 755 ILCS 5/11 (guardianship of minors). Key: Illinois prefers least restrictive alternative. 755 ILCS 5/11a-3 (petition requirements).",
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

function buildSchemaMarkup(
  title: string,
  slug: string,
  metaDescription: string,
  topic: string,
  publishedDate: string,
  faqItems: Array<{ question: string; answer: string }>
): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: metaDescription,
      author: {
        "@type": "Person",
        name: "Mary Liberty",
        url: "https://www.illinoisestatelaw.com/about/",
        jobTitle: "Estate Planning Attorney",
      },
      publisher: {
        "@type": "Organization",
        name: "Illinois Estate Law",
        url: "https://www.illinoisestatelaw.com",
      },
      datePublished: publishedDate,
      dateModified: publishedDate,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.illinoisestatelaw.com/blog/${slug}/`,
      },
      articleSection: topic,
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.illinoisestatelaw.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.illinoisestatelaw.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: `https://www.illinoisestatelaw.com/blog/${slug}/`,
        },
      ],
    },
  ];

  if (faqItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return schemas;
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
        // empty body is fine
      }
    }

    const { data: existingPosts } = await supabase
      .from("blog_posts")
      .select("slug, title, topic, meta_description")
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

    const topicContext =
      TOPIC_PROMPTS[topic] || TOPIC_PROMPTS["Estate Planning"];
    const statuteContext =
      ILLINOIS_STATUTES[topic] || ILLINOIS_STATUTES["Estate Planning"];

    const existingList = existingTitles
      .map((t: string) => `- ${t}`)
      .join("\n");

    const existingWithDescriptions = (existingPosts || [])
      .map(
        (p: { title: string; meta_description: string }) =>
          `- "${p.title}" -- ${p.meta_description || "no description"}`
      )
      .join("\n");

    // ---------- STEP 1: Generate unique title ----------
    const titleSystemPrompt = `You are a content strategist for Illinois Estate Law, a Chicago-based estate planning law firm led by attorney Mary Liberty. You create blog post titles that are:
- SEO-optimized for Illinois-specific estate planning searches
- Helpful and informative for Illinois residents
- Written in a professional but accessible tone
- Focused on practical, actionable topics people actually search for
- Long-tail keyword focused for better search ranking

The firm serves Cook County, DuPage County, Kane County, and the greater Chicago area.`;

    const titlePrompt = `Generate exactly ONE new blog post title for the topic "${topic}".

Topic area covers: ${topicContext}

EXISTING posts -- you MUST NOT duplicate or substantially overlap with ANY of these topics:
${existingWithDescriptions}

Requirements:
- Must cover a GENUINELY DIFFERENT angle or subtopic than ALL existing posts above
- Must be Illinois-specific (mention Illinois, Chicago, Cook County, or a related locality)
- Should target a specific long-tail keyword phrase people actually search for
- Between 8-16 words
- Should answer a specific question or address a specific concern that none of the existing posts cover

Think carefully: read every existing title and description above. Your title must address something NOT already covered.

Respond with ONLY the title, nothing else.`;

    const generatedTitle =
      requestedTitle ||
      (
        await callAnthropic(
          [{ role: "user", content: titlePrompt }],
          titleSystemPrompt,
          200
        )
      ).trim();

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

    // ---------- STEP 2: Generate content ----------
    const contentSystemPrompt = `You are a legal content writer for Illinois Estate Law, a Chicago-based estate planning law firm led by attorney Mary Liberty. You write comprehensive, legally accurate blog posts about Illinois estate planning law.

LEGAL ACCURACY REQUIREMENTS -- THIS IS CRITICAL:
- You MUST cite specific Illinois statutes when discussing legal rules (e.g., "Under 755 ILCS 5/4-1..." or "Per the Illinois Trust Code at 760 ILCS 3/...")
- You MUST accurately state the current law. Do NOT guess at dollar amounts, thresholds, deadlines, or procedures you are unsure about. If referencing a threshold or amount, include "as of [year]" to indicate currency.
- Relevant statutes for this topic: ${statuteContext}
- Always note that laws change and readers should consult an attorney for their specific situation
- Use precise legal terminology where appropriate, but explain terms for a lay audience

Your writing style:
- Professional but warm and accessible
- Provides practical, actionable advice for Illinois residents
- Addresses common fears and misconceptions with accurate information
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
      .map(
        (p: { title: string; slug: string }) =>
          `- "${p.title}" (/blog/${p.slug}/)`
      )
      .join("\n");

    const contentPrompt = `Write a comprehensive blog post titled: "${generatedTitle}"

Topic category: ${topic}

Related posts on the site to link to where naturally relevant:
${relatedPosts || "None yet in this category."}

Other posts on the site you can link to:
${(existingPosts || [])
  .filter((p: { topic: string }) => p.topic !== topic)
  .slice(0, 10)
  .map(
    (p: { title: string; slug: string }) =>
      `- "${p.title}" (/blog/${p.slug}/)`
  )
  .join("\n")}

=== CONTENT REQUIREMENTS ===

1. LENGTH: The post MUST be at least 1,500 words. Aim for 2,000-2,500 words. Be thorough and substantive.

2. LEGAL ACCURACY: Cite specific Illinois statutes (ILCS sections). State rules accurately. Include "as of [year]" for any dollar thresholds or deadlines that may change. Add a disclaimer that laws change and this is not legal advice.

3. INTERNAL LINKING: Include 4-6 natural internal links throughout the article body:
   - 2-3 links to related blog posts using <a href="/blog/slug/">anchor text</a>
   - 1-2 links to service pages using <a href="/chicago-wills-lawyer/">anchor text</a>
   - 1 link to consultation booking using <a href="/book-consultation/">anchor text</a>

4. SEO: Use the primary keyword naturally in the first paragraph, in at least 2 h2 headings, and throughout the body. Use related long-tail keywords in h3 subheadings.

5. INTERACTIVE ELEMENTS -- You MUST include ALL of the following (using only HTML, CSS via <style> tags, and vanilla JavaScript via <script> tags since this renders in dangerouslySetInnerHTML):

   a) EXPANDABLE FAQ SECTION: At least 5 frequently asked questions with click-to-expand answers. Use this exact pattern:
      <div class="faq-section">
        <h2 id="faq">Frequently Asked Questions</h2>
        <div class="faq-item">
          <button class="faq-question" onclick="this.parentElement.classList.toggle('open')">
            <span>Question text here?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer"><p>Answer text here.</p></div>
        </div>
      </div>

   b) KEY TAKEAWAYS BOX: A styled summary box near the top with 4-6 bullet points.

   c) INTERACTIVE CHECKLIST or SELF-ASSESSMENT: A checklist readers can click through, OR a simple yes/no self-assessment quiz with 4-6 questions. Use checkboxes with labels or radio buttons. Include a simple script that counts checked items and displays a summary.

   d) STEP-BY-STEP PROCESS: If the topic involves a process, include numbered steps with expandable details (click to reveal more info on each step).

6. SCHEMA MARKUP FAQ DATA: After the closing </div> of the FAQ section, include a hidden div with id="faq-data" containing the FAQ Q&A pairs as a JSON array so the page can extract them for schema markup:
   <div id="faq-data" style="display:none">
   [{"question":"Q1?","answer":"A1"},{"question":"Q2?","answer":"A2"}]
   </div>

=== HTML FORMAT REQUIREMENTS ===

Output the complete HTML content that goes inside an article body. This renders inside an existing Next.js page layout via dangerouslySetInnerHTML.

Structure:
- Start with a <style> block containing all CSS for interactive elements
- Key takeaways box near the top
- Table of contents using an ordered list with anchor links to h2 sections
- 5-8 major sections with <h2 id="section-id"> headings
- Subsections with <h3> where needed
- Interactive checklist or self-assessment in a relevant section
- FAQ section with expandable items (minimum 5 questions)
- Hidden #faq-data div with JSON
- CTA section at the end encouraging consultation
- A <script> block at the very end with all JavaScript for interactivity

DO NOT include <html>, <head>, <body>, or <DOCTYPE> tags.
DO NOT include the post title as h1 (rendered separately by the page).
DO NOT include any images or external resources.

Output ONLY the raw HTML. No markdown. No code fences. No explanation.`;

    const htmlContent = await callAnthropic(
      [{ role: "user", content: contentPrompt }],
      contentSystemPrompt,
      16000
    );

    const cleanedContent = htmlContent
      .replace(/^```html?\s*/i, "")
      .replace(/\s*```\s*$/i, "")
      .trim();

    // ---------- STEP 3: Extract FAQ data for schema markup ----------
    let faqItems: Array<{ question: string; answer: string }> = [];
    const faqDataMatch = cleanedContent.match(
      /<div id="faq-data"[^>]*>([\s\S]*?)<\/div>/
    );
    if (faqDataMatch) {
      try {
        faqItems = JSON.parse(faqDataMatch[1].trim());
      } catch {
        faqItems = [];
      }
    }

    // ---------- STEP 4: Generate meta description and excerpt ----------
    const metaSystemPrompt =
      "You write concise, SEO-optimized meta descriptions and excerpts for legal blog posts. Follow the exact format requested.";

    const metaPrompt = `For a blog post titled: "${generatedTitle}"
Topic: ${topic}
For Illinois Estate Law, a Chicago estate planning firm.

Provide TWO things, separated by |||:
1. A meta description (150-160 characters, includes primary keyword, encourages clicks)
2. An excerpt (200-250 characters, summarizes the post value for readers browsing a blog listing)

Format: meta description text|||excerpt text

Respond with ONLY that format, nothing else.`;

    const metaResponse = (
      await callAnthropic(
        [{ role: "user", content: metaPrompt }],
        metaSystemPrompt,
        200
      )
    ).trim();

    const [metaDescription, excerpt] = metaResponse.split("|||").map((s) => s.trim());

    // ---------- STEP 5: Generate internal links for sidebar ----------
    const internalLinksPrompt = `For the blog post titled "${generatedTitle}" in topic "${topic}", select 3-4 related articles from this list:

${existingTitles.map((t: string, i: number) => `- "${t}" (/blog/${existingSlugs[i]}/)`).join("\n")}

Also include 1-2 service pages:
- Wills (/chicago-wills-lawyer/)
- Trusts (/chicago-revocable-trusts-lawyer/)
- Powers of Attorney (/chicago-powers-of-attorney-lawyer/)
- Healthcare Directives (/chicago-healthcare-directives-lawyer/)
- Probate (/chicago-probate-lawyer/)
- Prenuptial Agreements (/chicago-prenuptial-agreements-lawyer/)
- Deeds (/chicago-deeds-lawyer/)

Respond with ONLY a JSON array of objects with "text" and "url" keys.
Example: [{"text":"Article Title","url":"/blog/slug/"}]`;

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

    // ---------- STEP 6: Build schema markup ----------
    const publishedDate = new Date().toISOString();
    const schemas = buildSchemaMarkup(
      generatedTitle,
      slug,
      metaDescription || generatedTitle,
      topic,
      publishedDate,
      faqItems
    );

    const schemaScriptTags = schemas
      .map(
        (s) =>
          `<script type="application/ld+json">${JSON.stringify(s)}</script>`
      )
      .join("\n");

    const finalContent = schemaScriptTags + "\n" + cleanedContent;

    // ---------- STEP 7: Insert into database ----------
    const { data: insertedPost, error: insertError } = await supabase
      .from("blog_posts")
      .insert({
        title: generatedTitle,
        slug,
        content: finalContent,
        excerpt: excerpt || metaDescription || generatedTitle.substring(0, 200),
        meta_description: metaDescription || generatedTitle,
        topic,
        published_date: publishedDate,
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
        schemaTypes: schemas.map((s) => s["@type"]),
        faqCount: faqItems.length,
        hasInteractiveElements: true,
        message: `Blog post "${generatedTitle}" published successfully with schema markup, FAQ section, and interactive elements.`,
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
