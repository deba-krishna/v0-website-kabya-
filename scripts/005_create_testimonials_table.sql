-- Create testimonials table for customer proof screenshots
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access to testimonials"
  ON testimonials
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to insert testimonials
CREATE POLICY "Allow authenticated users to insert testimonials"
  ON testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to delete testimonials
CREATE POLICY "Allow authenticated users to delete testimonials"
  ON testimonials
  FOR DELETE
  TO authenticated
  USING (true);

-- Create storage bucket for testimonial images
INSERT INTO storage.buckets (id, name, public)
VALUES ('testimonials', 'testimonials', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public to read from testimonials bucket
CREATE POLICY "Public can view testimonial images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'testimonials');

-- Allow authenticated users to upload to testimonials bucket
CREATE POLICY "Authenticated users can upload testimonial images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'testimonials');

-- Allow authenticated users to delete from testimonials bucket
CREATE POLICY "Authenticated users can delete testimonial images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'testimonials');
