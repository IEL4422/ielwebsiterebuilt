/*
  # Add estate bank account blog post

  1. New Data
    - Insert new blog post: "How to Open an Estate Bank Account for Probate in Illinois"
    - Topic: Probate
    - Author: Mary Liberty
    - Published date: April 1, 2026

  2. Description
    - Comprehensive guide covering what an estate bank account is, why executors need one,
      step-by-step instructions for opening one, required documents, common mistakes,
      managing estate finances, and closing the account after probate
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
  'How to Open an Estate Bank Account for Probate in Illinois',
  'how-to-open-an-estate-bank-account-for-probate-in-illinois',
  'Learn how to open an estate bank account in Illinois, what documents you need, common mistakes to avoid, and how to manage estate finances during probate.',
  'Complete guide to opening and managing an estate bank account during Illinois probate. Covers required documents, step-by-step process, common mistakes, fiduciary responsibilities, and how to close the account once the estate is settled.',
  'Mary Liberty',
  '2026-04-01T00:00:00Z',
  'Probate',
  'Complete guide to opening an estate bank account for probate in Illinois. Learn required documents, step-by-step process, common executor mistakes, and fiduciary responsibilities.'
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
