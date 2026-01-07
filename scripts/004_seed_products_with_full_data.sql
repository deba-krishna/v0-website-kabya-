-- Seed products with complete data including new PDP fields
-- This will update existing products or insert new ones with full details

INSERT INTO public.products (id, name, price, category, description, image_url, features, guarantee_text, support_email, validity_period, delivery_info, technical_details)
VALUES 
  (
    gen_random_uuid(),
    'Romantic Proposal',
    149,
    'Love',
    'Create an unforgettable proposal moment with a stunning personalized website',
    '/placeholder.svg?height=400&width=600',
    '["Beautiful photo gallery", "Romantic music background", "Countdown timer to special moment", "Custom love story timeline", "Mobile-optimized design"]'::jsonb,
    '100% satisfaction guarantee. If they say no, get your money back! (Just kidding - we guarantee the website quality)',
    'bringuouthere@gmail.com',
    '1 Year',
    'Customization form link sent within 5 minutes. Fully built website delivered to your email in 12-24 hours.',
    'Fully responsive across mobile, tablet, and desktop. Optimized for sharing on WhatsApp, Instagram, and all social platforms. Works on all modern browsers including Chrome, Safari, Firefox, and Edge.'
  ),
  (
    gen_random_uuid(),
    'Birthday Celebration',
    199,
    'Birthday',
    'Make their birthday extra special with a personalized celebration website',
    '/placeholder.svg?height=400&width=600',
    '["Interactive birthday countdown", "Photo slideshow with music", "Virtual birthday card section", "Wish collection from friends", "Confetti animations"]'::jsonb,
    'We guarantee 100% satisfaction or your money back within 7 days. No questions asked!',
    'bringuouthere@gmail.com',
    '1 Year',
    'Receive customization form instantly. Website delivered within 12-24 hours to your registered email.',
    'Mobile-first design that looks amazing on all devices. Fast loading speed under 2 seconds. Compatible with all modern browsers and screen sizes.'
  ),
  (
    gen_random_uuid(),
    'Heartfelt Apology',
    149,
    'Sorry',
    'Express your sincere apology in the most heartfelt and creative way',
    '/placeholder.svg?height=400&width=600',
    '["Emotional message sections", "Photo memories together", "Promise cards for future", "Sorry note with your signature", "Share via private link"]'::jsonb,
    'If they don''t forgive you after seeing this, we''ll refund you. That''s how confident we are in our designs!',
    'bringuouthere@gmail.com',
    '1 Year',
    'Customization form delivered instantly after purchase. Your apology website ready in 12-24 hours.',
    'Private and secure sharing. Works perfectly on mobile phones for easy viewing. Responsive design ensures your message looks perfect everywhere.'
  ),
  (
    gen_random_uuid(),
    'Anniversary Love',
    249,
    'Anniversary',
    'Celebrate your journey together with a beautiful anniversary website',
    '/placeholder.svg?height=400&width=600',
    '["Timeline of your relationship", "Photo gallery of memories", "Love letter section", "Future dreams together", "Music playlist integration", "Share with family"]'::jsonb,
    '100% satisfaction guaranteed. We''ll work with you until you love it or provide a full refund within 7 days.',
    'bringuouthere@gmail.com',
    '2 Years',
    'Premium package: Customization form sent immediately. Beautifully crafted website delivered in 12-24 hours with 2 years of hosting.',
    'Enterprise-grade hosting with 99.9% uptime. Fully responsive design optimized for all devices. Lightning-fast load times and secure HTTPS connection.'
  ),
  (
    gen_random_uuid(),
    'Love Letter Digital',
    179,
    'Love',
    'Transform your feelings into a beautiful digital love letter website',
    '/placeholder.svg?height=400&width=600',
    '["Animated love letter opening", "Your story in chapters", "Favorite photos together", "Romantic quotes section", "Background music"]'::jsonb,
    'We guarantee this will make them smile. 100% satisfaction or your money back within 7 days.',
    'bringuouthere@gmail.com',
    '1 Year',
    'Customization form link sent within 5 minutes. Romantic website delivered in 12-24 hours.',
    'Beautiful animations and transitions. Mobile-optimized for easy sharing. Works flawlessly on all smartphones, tablets, and computers.'
  ),
  (
    gen_random_uuid(),
    'Birthday Surprise Box',
    229,
    'Birthday',
    'Create an interactive surprise experience for their special day',
    '/placeholder.svg?height=400&width=600',
    '["Virtual gift box opening", "Multiple surprise sections", "Video messages integration", "Interactive games", "Photo collage maker"]'::jsonb,
    'Guaranteed to create unforgettable memories. Full refund if not 100% satisfied within 7 days.',
    'bringuouthere@gmail.com',
    '1 Year',
    'Form link in your inbox within 5 minutes. Complete surprise website delivered in 12-24 hours.',
    'Interactive elements work smoothly on all devices. Optimized for quick loading even on slow connections. Tested across all major browsers and platforms.'
  )
ON CONFLICT (id) DO UPDATE SET
  features = EXCLUDED.features,
  guarantee_text = EXCLUDED.guarantee_text,
  support_email = EXCLUDED.support_email,
  validity_period = EXCLUDED.validity_period,
  delivery_info = EXCLUDED.delivery_info,
  technical_details = EXCLUDED.technical_details,
  updated_at = NOW();
