/*
  # Add blog post fields and insert policy

  1. Schema Changes
    - Add `meta_description` column to `blog_posts` (text, optional)
    - Add `internal_links` column to `blog_posts` (jsonb, optional) - stores array of {text, url} objects
  
  2. Security Updates
    - Add policy to allow anyone to insert blog posts (for now - can be restricted later)
    - This allows the blog submission form to work

  Note: In production, you may want to restrict the insert policy to authenticated admin users only.
*/

-- Add meta_description column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'meta_description'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN meta_description text;
  END IF;
END $$;

-- Add internal_links column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'internal_links'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN internal_links jsonb;
  END IF;
END $$;

-- Drop existing insert policy if it exists
DROP POLICY IF EXISTS "Anyone can insert blog posts" ON blog_posts;

-- Create policy to allow inserts (temporarily open for testing)
CREATE POLICY "Anyone can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Note: In production, replace the above policy with:
-- CREATE POLICY "Authenticated users can insert blog posts"
--   ON blog_posts
--   FOR INSERT
--   TO authenticated
--   WITH CHECK (auth.uid() IS NOT NULL);