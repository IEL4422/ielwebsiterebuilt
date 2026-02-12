/*
  # Add Prenuptial Agreements Blog Post

  1. New Content
    - Adds comprehensive blog post about prenuptial agreements
    - Includes metadata for listing page
    - Sets proper publication date and slug

  2. Details
    - Title: "Protecting Your Future: The Essential Guide to Prenuptial Agreements in Illinois"
    - Slug: protecting-your-future-the-essential-guide-to-prenuptial-agreements-in-illinois
    - Topic: Prenuptial Agreements
    - Excerpt: Comprehensive guide covering importance, protections, myths, and process
*/

INSERT INTO blog_posts (
  title,
  slug,
  excerpt,
  content,
  author,
  published_date,
  topic
) VALUES (
  'Protecting Your Future: The Essential Guide to Prenuptial Agreements in Illinois',
  'protecting-your-future-the-essential-guide-to-prenuptial-agreements-in-illinois',
  'A comprehensive guide to understanding prenuptial agreements in Illinois—what they protect, common myths, real-world scenarios, and the step-by-step process of creating an enforceable prenup that protects both partners.',
  'This blog post content is rendered by the page component with interactive elements including myths debunker, scenario explorer, interactive checklist, and comprehensive FAQ section.',
  'Motherway Law',
  '2026-02-12 00:00:00+00',
  'Prenuptial Agreements'
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  author = EXCLUDED.author,
  published_date = EXCLUDED.published_date,
  topic = EXCLUDED.topic;
