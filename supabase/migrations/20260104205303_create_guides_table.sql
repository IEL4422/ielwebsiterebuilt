/*
  # Create Guides Table for Learning Center

  1. New Tables
    - `guides`
      - `id` (uuid, primary key) - Unique identifier for each guide
      - `title` (text) - Guide title
      - `description` (text) - Brief description of the guide
      - `category` (text) - Category (e.g., "Estate Planning", "Probate", "Trusts", "Guardianship")
      - `slug` (text, unique) - URL-friendly identifier
      - `content` (text, nullable) - Full guide content
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on `guides` table
    - Add policy for public read access (guides are public information)
*/

CREATE TABLE IF NOT EXISTS guides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE guides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view guides"
  ON guides
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_guides_category ON guides(category);
CREATE INDEX IF NOT EXISTS idx_guides_slug ON guides(slug);