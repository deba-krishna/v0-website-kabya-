-- Insert sample categories
INSERT INTO categories (name, slug, description, image_url) VALUES
  ('Electronics', 'electronics', 'Latest gadgets and electronic devices', '/placeholder.svg?height=400&width=600'),
  ('Clothing', 'clothing', 'Fashion and apparel for everyone', '/placeholder.svg?height=400&width=600'),
  ('Home & Garden', 'home-garden', 'Everything for your home and garden', '/placeholder.svg?height=400&width=600'),
  ('Books', 'books', 'Books for all ages and interests', '/placeholder.svg?height=400&width=600'),
  ('Sports', 'sports', 'Sports equipment and gear', '/placeholder.svg?height=400&width=600'),
  ('Toys', 'toys', 'Fun toys for kids', '/placeholder.svg?height=400&width=600')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample products
INSERT INTO products (name, slug, description, price, compare_at_price, category_id, image_url, images, stock, is_featured, rating, review_count) 
SELECT 
  'Wireless Headphones',
  'wireless-headphones',
  'Premium wireless headphones with noise cancellation',
  199.99,
  249.99,
  id,
  '/placeholder.svg?height=400&width=400',
  ARRAY['/placeholder.svg?height=400&width=400'],
  50,
  true,
  4.5,
  128
FROM categories WHERE slug = 'electronics'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, description, price, compare_at_price, category_id, image_url, images, stock, is_featured, rating, review_count) 
SELECT 
  'Smart Watch',
  'smart-watch',
  'Feature-rich smartwatch with fitness tracking',
  299.99,
  399.99,
  id,
  '/placeholder.svg?height=400&width=400',
  ARRAY['/placeholder.svg?height=400&width=400'],
  35,
  true,
  4.7,
  256
FROM categories WHERE slug = 'electronics'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, description, price, category_id, image_url, images, stock, is_featured, rating, review_count) 
SELECT 
  'Cotton T-Shirt',
  'cotton-t-shirt',
  'Comfortable 100% cotton t-shirt',
  29.99,
  id,
  '/placeholder.svg?height=400&width=400',
  ARRAY['/placeholder.svg?height=400&width=400'],
  100,
  false,
  4.2,
  64
FROM categories WHERE slug = 'clothing'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, description, price, compare_at_price, category_id, image_url, images, stock, is_featured, rating, review_count) 
SELECT 
  'Denim Jeans',
  'denim-jeans',
  'Classic fit denim jeans',
  79.99,
  99.99,
  id,
  '/placeholder.svg?height=400&width=400',
  ARRAY['/placeholder.svg?height=400&width=400'],
  75,
  true,
  4.6,
  192
FROM categories WHERE slug = 'clothing'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, description, price, category_id, image_url, images, stock, is_featured, rating, review_count) 
SELECT 
  'Coffee Maker',
  'coffee-maker',
  'Programmable coffee maker with thermal carafe',
  89.99,
  id,
  '/placeholder.svg?height=400&width=400',
  ARRAY['/placeholder.svg?height=400&width=400'],
  45,
  true,
  4.4,
  88
FROM categories WHERE slug = 'home-garden'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, description, price, category_id, image_url, images, stock, is_featured, rating, review_count) 
SELECT 
  'Garden Tool Set',
  'garden-tool-set',
  'Complete 10-piece garden tool set',
  49.99,
  id,
  '/placeholder.svg?height=400&width=400',
  ARRAY['/placeholder.svg?height=400&width=400'],
  60,
  false,
  4.3,
  42
FROM categories WHERE slug = 'home-garden'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, description, price, category_id, image_url, images, stock, is_featured, rating, review_count) 
SELECT 
  'Running Shoes',
  'running-shoes',
  'Lightweight running shoes with great support',
  119.99,
  id,
  '/placeholder.svg?height=400&width=400',
  ARRAY['/placeholder.svg?height=400&width=400'],
  80,
  true,
  4.8,
  320
FROM categories WHERE slug = 'sports'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, description, price, category_id, image_url, images, stock, rating, review_count) 
SELECT 
  'Yoga Mat',
  'yoga-mat',
  'Non-slip yoga mat with carrying strap',
  34.99,
  id,
  '/placeholder.svg?height=400&width=400',
  ARRAY['/placeholder.svg?height=400&width=400'],
  120,
  4.5,
  156
FROM categories WHERE slug = 'sports'
ON CONFLICT (slug) DO NOTHING;
