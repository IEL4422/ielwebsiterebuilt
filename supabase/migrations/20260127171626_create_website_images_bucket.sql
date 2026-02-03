/*
  # Create Website Images Storage Bucket
  
  1. Storage Setup
    - Create public storage bucket for website images
    - Allow public read access to all images
    - Allow anyone to upload images (you can restrict this later)
  
  2. Security
    - Public bucket with read access for all users
    - Upload permissions for authenticated and anonymous users
*/

-- Create storage bucket for website images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'website-images',
  'website-images',
  true,
  52428800,
  ARRAY['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to all images
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Public read access for website images'
  ) THEN
    CREATE POLICY "Public read access for website images"
      ON storage.objects
      FOR SELECT
      USING (bucket_id = 'website-images');
  END IF;
END $$;

-- Allow anyone to upload images
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow public uploads to website images'
  ) THEN
    CREATE POLICY "Allow public uploads to website images"
      ON storage.objects
      FOR INSERT
      WITH CHECK (bucket_id = 'website-images');
  END IF;
END $$;

-- Allow anyone to update images
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow public updates to website images'
  ) THEN
    CREATE POLICY "Allow public updates to website images"
      ON storage.objects
      FOR UPDATE
      USING (bucket_id = 'website-images')
      WITH CHECK (bucket_id = 'website-images');
  END IF;
END $$;

-- Allow anyone to delete images
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow public deletes from website images'
  ) THEN
    CREATE POLICY "Allow public deletes from website images"
      ON storage.objects
      FOR DELETE
      USING (bucket_id = 'website-images');
  END IF;
END $$;
