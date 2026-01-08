# Deba - Custom Website Templates

A modern e-commerce platform for custom website templates built with Next.js 16 and Firebase.

## Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Features

- Browse and purchase custom website templates
- Category filtering (Special, Anniversary, Sorry, Birthday, Proposal, etc.)
- Admin panel for product and testimonial management
- Firebase Authentication for secure admin access
- Cloud Firestore for real-time data
- Firebase Storage for image uploads
- Mobile-responsive design
- Smooth GSAP animations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase account
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd deba
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase (see [FIREBASE_SETUP.md](./FIREBASE_SETUP.md))

4. Create `.env.local` with your Firebase config:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── admin-deba/     # Admin dashboard
│   ├── auth/           # Authentication pages
│   ├── product/        # Product detail pages
│   ├── shop/           # Shop listing page
│   └── page.tsx        # Homepage
├── components/         # React components
├── lib/
│   ├── firebase/       # Firebase configuration and utilities
│   └── products.ts     # Product type definitions
├── public/             # Static assets
├── firestore.rules     # Firestore security rules
├── storage.rules       # Storage security rules
└── FIREBASE_SETUP.md   # Firebase setup guide
```

## Admin Panel

Access the admin panel at `/auth/login`:

- **Product Management**: Add, edit, delete, and rename products
- **Testimonial Management**: Upload and manage customer testimonials
- **Mobile-Optimized**: Full functionality on mobile devices
- **Secure**: Firebase Authentication with admin-only access

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy Firebase Rules

```bash
firebase deploy --only firestore:rules,storage:rules
```

## License

MIT

## Support

For setup help, see [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)
