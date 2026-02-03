/*
  # Add topic field to blog_posts table

  1. Changes
    - Add `topic` column to `blog_posts` table (text, not null, default 'Estate Planning')
    - Create index on `topic` for faster filtering
    - Update existing blog posts with appropriate topics
  
  2. Topics
    - Estate Planning: General estate planning content
    - Powers of Attorney: Legal authority and POA related content
    - Trusts: Trust setup and benefits
    - Probate: Probate process and administration
    - Guardianship: Adult and minor guardianship
*/

-- Add topic column to blog_posts table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'topic'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN topic text NOT NULL DEFAULT 'Estate Planning';
  END IF;
END $$;

-- Create index on topic for faster filtering
CREATE INDEX IF NOT EXISTS idx_blog_posts_topic ON blog_posts(topic);

-- Update existing blog posts with appropriate topics
UPDATE blog_posts 
SET topic = 'Powers of Attorney'
WHERE slug = 'do-you-really-need-a-power-of-attorney-in-illinois';

UPDATE blog_posts 
SET topic = 'Powers of Attorney'
WHERE slug = 'understanding-legal-authority-in-illinois';

UPDATE blog_posts 
SET topic = 'Trusts'
WHERE slug = 'what-are-the-key-benefits-of-setting-up-a-trust-in-illinois';