"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Plus, X } from "lucide-react";
import { format } from "date-fns";

export default function BlogPostSubmit() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [internalLinks, setInternalLinks] = useState<{ text: string; url: string }[]>([]);
  const [newLinkText, setNewLinkText] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [topic, setTopic] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  // Initialize Supabase client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  );

  const addInternalLink = () => {
    if (newLinkText && newLinkUrl) {
      setInternalLinks([...internalLinks, { text: newLinkText, url: newLinkUrl }]);
      setNewLinkText("");
      setNewLinkUrl("");
    }
  };

  const removeInternalLink = (index: number) => {
    setInternalLinks(internalLinks.filter((_, i) => i !== index));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const slug = generateSlug(title);

      console.log("Submitting blog post with data:", {
        title,
        slug,
        content: htmlContent.substring(0, 100) + "...",
        meta_description: metaDescription || title.substring(0, 160),
        published_date: date.toISOString().split("T")[0],
        topic: topic || "Estate Planning",
        internal_links: internalLinks.length > 0 ? internalLinks : null,
      });

      const { data, error: insertError } = await supabase.from("blog_posts").insert({
        title,
        slug,
        content: htmlContent,
        meta_description: metaDescription || title.substring(0, 160),
        published_date: date.toISOString().split("T")[0],
        topic: topic || "Estate Planning",
        internal_links: internalLinks.length > 0 ? internalLinks : null,
      }).select();

      console.log("Insert response:", { data, error: insertError });

      if (insertError) {
        console.error("Insert error details:", insertError);
        throw insertError;
      }

      router.push(`/blog/${slug}`);
    } catch (err) {
      console.error("Submit error:", err);
      const errorMessage = err instanceof Error
        ? `${err.message}${(err as any).details ? ` - ${(err as any).details}` : ''}${(err as any).hint ? ` (Hint: ${(err as any).hint})` : ''}`
        : "Failed to publish blog post";
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Submit New Blog Post</CardTitle>
            <CardDescription>
              Create and publish a new blog post to your website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="title">Blog Post Title *</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter the blog post title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic">Topic</Label>
                <Input
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Estate Planning, Wills, Trusts, Probate"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Brief description for SEO (optional, will use title if not provided)"
                  rows={3}
                  maxLength={160}
                />
                <p className="text-sm text-slate-500">
                  {metaDescription.length}/160 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Publication Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={(d) => d && setDate(d)} />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="htmlContent">HTML Content *</Label>
                <Textarea
                  id="htmlContent"
                  value={htmlContent}
                  onChange={(e) => setHtmlContent(e.target.value)}
                  placeholder="Paste the HTML content of your blog post here"
                  rows={15}
                  className="font-mono text-sm"
                  required
                />
              </div>

              <div className="space-y-4">
                <Label>Internal Links (Optional)</Label>
                <div className="space-y-3">
                  {internalLinks.map((link, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm">{link.text}</p>
                        <p className="text-xs text-slate-600">{link.url}</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeInternalLink(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                      placeholder="Link text"
                      value={newLinkText}
                      onChange={(e) => setNewLinkText(e.target.value)}
                    />
                    <Input
                      placeholder="Link URL (e.g., /blog/example-post)"
                      value={newLinkUrl}
                      onChange={(e) => setNewLinkUrl(e.target.value)}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addInternalLink}
                    disabled={!newLinkText || !newLinkUrl}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Internal Link
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || !title || !htmlContent}
                  className="flex-1"
                >
                  {isSubmitting ? "Publishing..." : "Publish Blog Post"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/blog")}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
