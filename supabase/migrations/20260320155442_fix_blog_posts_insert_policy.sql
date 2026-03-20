/*
  # Fix blog_posts insert policy
  
  1. Changes
    - Drop existing insert policy
    - Recreate insert policy with proper boolean condition
    - This fixes the 401 Unauthorized error on inserts
*/

-- Drop the existing insert policy
DROP POLICY IF EXISTS "Anyone can insert blog posts" ON blog_posts;

-- Recreate with proper condition
CREATE POLICY "Anyone can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
