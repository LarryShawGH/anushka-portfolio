# Anushka Shah - Actor Portfolio Website

A modern, professional portfolio website designed to showcase acting talent and serve as a complement to resume materials.

## ✨ Features

- **Modern Design**: Clean, professional aesthetic with elegant typography
- **Responsive Layout**: Fully responsive design that works on all devices
- **Multiple Sections**:
  - **Home**: Hero section with engaging introduction
  - **About**: Biography and professional background
  - **Portfolio**: Showcase of performances and projects (filterable by type)
  - **Reel**: Video showcase with embedded reels
  - **Headshots**: Professional headshots and resume downloads
  - **Contact**: Contact form and direct communication channels

- **Performance**: Fast loading, optimized images and assets
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO Optimized**: Meta tags, structured data, semantic markup

## 🛠 Tech Stack

- **React 18.3** - UI framework
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **Lucide React** - Icon library

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Header navigation
│   │   └── Footer.tsx          # Footer component
│   ├── pages/
│   │   ├── HomePage.tsx        # Home page
│   │   ├── AboutPage.tsx       # About page
│   │   ├── PortfolioPage.tsx   # Portfolio showcase
│   │   ├── ReelPage.tsx        # Reel/videos
│   │   ├── HeadshotsPage.tsx   # Headshots & resume
│   │   └── ContactPage.tsx     # Contact form
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The site will open at `http://localhost:5173`

## 📝 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Format code
npm run format
```

## 🎨 Customization

### Adding Your Information

1. **Navigation Menu**: Edit `src/components/Navigation.tsx`
2. **Home Page**: Update `src/pages/HomePage.tsx` with your bio
3. **About Page**: Modify `src/pages/AboutPage.tsx`
4. **Portfolio Items**: Update the `portfolioItems` array in `src/pages/PortfolioPage.tsx`
5. **Contact Info**: Update email, phone, and social links in `src/components/Footer.tsx` and `src/pages/ContactPage.tsx`

### Adding Images

1. Create a `public/images` folder
2. Add your images there
3. Reference them in components:
```tsx
<img src="/images/your-image.jpg" alt="Description" />
```

### Color Scheme

The site uses Tailwind CSS. Primary colors are defined in `tailwind.config.js`. Main colors:
- **Primary**: Slate-900 (dark background)
- **Accent**: White
- **Neutral**: Slate grays

To change colors, modify the Tailwind theme configuration.

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Set root directory to `portfolio`
5. Deploy

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Deploy to Your Own Server

1. Build for production:
```bash
npm run build
```

2. Upload the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes

## 🔄 Content Updates

To keep the portfolio fresh:

1. **Update Portfolio Items**: Add new projects to `portfolioItems` array
2. **Add New Reels**: Update the `reels` array in `ReelPage.tsx`
3. **Add Headshots**: Add headshot entries in `HeadshotsPage.tsx`
4. **Update Resume**: Replace resume download files in `public/` folder

## 🌐 Domain Configuration

If deploying to a custom domain (like anushkashahactor.com):

1. Point your domain's DNS to your hosting provider
2. Update meta tags in `index.html` if needed
3. Consider adding a custom favicon in `public/`

## 📧 Contact Form Setup

The contact form currently logs to console. To make it functional:

1. Set up a backend service (Node.js, Firebase, etc.)
2. Or use a service like Formspree, Netlify Forms, or SendGrid
3. Update the form submission handler in `src/pages/ContactPage.tsx`

Example with Formspree:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
  // Handle response
}
```

## 🎥 Video Integration

To add videos/reels:

1. Upload videos to a platform like Vimeo or YouTube
2. Get the embed code
3. Add to the pages with iframe or custom video component

Example:
```tsx
<iframe
  src="https://player.vimeo.com/video/VIDEO_ID"
  width="640"
  height="360"
  frameBorder="0"
  allowFullScreen
/>
```

## 📱 Mobile Optimization

The site is fully responsive. Test on various devices:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 480px)

Use `npm run dev` to test different screen sizes in your browser's dev tools.

## ♿ Accessibility

The site includes:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Alt text for images

Always test with accessibility tools and screen readers.

## 🔍 SEO

The site is SEO-friendly with:
- Meta descriptions
- Semantic HTML structure
- Responsive design
- Fast loading times
- Proper heading hierarchy

Consider adding:
- XML sitemap
- robots.txt
- Schema.org markup
- Google Search Console verification

## 📄 License

This portfolio site is custom-designed for Anushka Shah. 

## 💬 Support

For questions or modifications, reach out to the development team.

---

**Last Updated**: May 2026
**Version**: 1.0.0
