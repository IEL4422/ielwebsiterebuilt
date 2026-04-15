/*
  # Add "Revocable vs. Irrevocable Trust" Blog Post

  1. New Content
    - Blog post comparing revocable and irrevocable trusts for Illinois residents
    - Topic: Trusts
    - Author: Mary Liberty
    - Published: April 15, 2026

  2. Details
    - Slug: revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois
    - Covers control, taxes, asset protection, cost, flexibility
    - Includes interactive quiz and comparison tool
    - Contains internal links to related practice pages and blog posts
*/

INSERT INTO blog_posts (
  title,
  slug,
  excerpt,
  content,
  author,
  published_date,
  topic,
  meta_description
) VALUES (
  'Revocable vs. Irrevocable Trust: Which Is Right for You in Illinois?',
  'revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois',
  'Understand the key differences between revocable and irrevocable trusts in Illinois and discover which type fits your estate planning goals with our interactive comparison tool.',
  'Comprehensive guide comparing revocable and irrevocable trusts in Illinois. Covers the key differences in control, taxes, asset protection, cost, and flexibility, with Illinois-specific tax thresholds, real-world scenarios, and an interactive quiz to help you decide which trust type is right for your estate plan.',
  'Mary Liberty',
  '2026-04-15T00:00:00Z',
  'Trusts',
  'Compare revocable vs. irrevocable trusts in Illinois. Learn the key differences in control, taxes, asset protection, and cost. Includes interactive quiz and Illinois-specific estate tax considerations.'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  author = EXCLUDED.author,
  published_date = EXCLUDED.published_date,
  topic = EXCLUDED.topic,
  meta_description = EXCLUDED.meta_description,
  updated_at = now();
