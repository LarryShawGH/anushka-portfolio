# Actor Portfolio Website - Customization Guide

This guide will help you customize and personalize the actor portfolio website for Anushka Shah.

## 🎯 Quick Start

1. **Install dependencies**:
   ```bash
   cd portfolio
   npm install
   ```

2. **Start development**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📋 Customization Checklist

### Home Page (`src/pages/HomePage.tsx`)

- [ ] Update introduction text with your bio
- [ ] Change location information
- [ ] Add your professional headshot to hero section
- [ ] Update "Learn more" links
- [ ] Customize highlight sections with your key achievements

**Key things to edit**:
```tsx
// Update this intro text
<h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
  Hi, I'm <span className="text-gradient">Anushka</span>
</h1>

<p className="text-xl text-slate-700 leading-relaxed max-w-md">
  [UPDATE YOUR BIO]
</p>
```

### About Page (`src/pages/AboutPage.tsx`)

- [ ] Update your bio in the "Who I Am" section
- [ ] Add your background and training information
- [ ] Update quick facts (location, training, focus, languages)
- [ ] Add any awards or recognitions

**Key sections**:
- "Who I Am" - Your professional summary
- "My Background" - Training and experience
- "Quick Facts" - Key information
- "What Drives My Work" - Your values and approach

### Portfolio Page (`src/pages/PortfolioPage.tsx`)

- [ ] Add your actual film, theater, and web projects
- [ ] Update project descriptions
- [ ] Add project images/thumbnails
- [ ] Include IMDb links or project URLs
- [ ] Update roles and years

**Adding a project**:
```tsx
const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Your Film Title',
    type: 'film', // or 'theater' or 'web'
    description: 'Brief description of your role',
    role: 'Your character/role name',
    year: 2024,
    tags: ['Genre1', 'Genre2']
  },
  // Add more projects...
]
```

### Reel Page (`src/pages/ReelPage.tsx`)

- [ ] Replace reel titles with your actual reel names
- [ ] Add Vimeo/YouTube links
- [ ] Update reel durations
- [ ] Add download links for HD versions
- [ ] Update reel descriptions

### Headshots Page (`src/pages/HeadshotsPage.tsx`)

- [ ] Upload your professional headshots to `public/headshots/`
- [ ] Add actual images to the grid
- [ ] Update headshot titles and descriptions
- [ ] Link to resume downloads in `public/files/`

**Directory structure needed**:
```
portfolio/
├── public/
│   ├── headshots/
│   │   ├── headshot-1.jpg
│   │   ├── headshot-2.jpg
│   │   └── ...
│   └── files/
│       ├── resume.pdf
│       ├── theater-resume.pdf
│       └── skills.pdf
```

### Contact Page (`src/pages/ContactPage.tsx`)

- [ ] Update contact email address
- [ ] Update phone number
- [ ] Update location information
- [ ] Set up form submission handler
- [ ] Add social media links

**Update contact info**:
```tsx
<a href="mailto:your@email.com">
  your@email.com
</a>
```

### Navigation & Footer

- [ ] Update logo/name in `src/components/Navigation.tsx`
- [ ] Update social media links in `src/components/Footer.tsx`
- [ ] Add correct copyright information
- [ ] Update footer bio

## 🎨 Styling Customization

### Colors

Colors are defined in `tailwind.config.js`. Main colors used:
- **Slate-900**: Dark backgrounds (currently used)
- **White**: Text and backgrounds
- **Slate-100/200**: Light backgrounds

To change the primary color scheme:

1. Edit `tailwind.config.js`
2. Update color references in component classes

### Fonts

Currently using:
- **Serif**: Playfair Display (for headings)
- **Sans**: Inter (for body text)

Change in `tailwind.config.js`:
```js
fontFamily: {
  serif: ['Your Serif Font', 'serif'],
  sans: ['Your Sans Font', 'sans-serif'],
}
```

And update the font imports in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Serif+Font&family=Your+Sans+Font&display=swap" rel="stylesheet" />
```

### Animations

Add custom animations in `tailwind.config.js`:
```js
animation: {
  fadeIn: 'fadeIn 0.5s ease-in',
  slideUp: 'slideUp 0.6s ease-out',
  // Add more animations here
}
```

## 📸 Image Optimization

### Adding Images

1. Place images in `public/` folder
2. Reference with `/` prefix:
   ```tsx
   <img src="/images/photo.jpg" alt="Description" />
   ```

### Image Best Practices

- Use WebP format when possible for smaller file sizes
- Compress images using tools like TinyPNG or ImageOptim
- Use appropriate dimensions (not oversized)
- Always include alt text for accessibility

### Recommended Image Sizes

- Hero/headshots: 800x1000px (3:4 aspect ratio)
- Portfolio thumbnails: 600x600px (square)
- Reel thumbnails: 1280x720px (16:9 aspect ratio)

## 🔗 Adding External Links

### Video Embeds

For Vimeo:
```tsx
<iframe
  src="https://player.vimeo.com/video/VIDEO_ID"
  width="640"
  height="360"
  frameBorder="0"
  allowFullScreen
/>
```

For YouTube:
```tsx
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="640"
  height="360"
  frameBorder="0"
  allowFullScreen
/>
```

### Social Media Links

Update in `src/components/Footer.tsx`:
```tsx
<a href="https://instagram.com/yourusername">Instagram</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
```

## 📝 Content Updates

### Regular Maintenance

**Monthly**:
- Review and update portfolio
- Check all links are working
- Update any project information

**Quarterly**:
- Add new performances/projects
- Update headshots if needed
- Refresh reel with new content

**Annually**:
- Review overall design and layout
- Update all professional information
- Archive old projects if needed

## 🚀 Deployment

### Deploy to Vercel (Recommended for Actors)

1. Create a GitHub account and push your code
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Set root directory to `portfolio`
6. Click Deploy

**Benefits**:
- Free hosting
- Automatic deployments on git push
- Custom domain support
- Analytics and monitoring
- SSL certificate included

### Domain Setup

1. Buy domain from GoDaddy, Namecheap, or similar
2. Point domain DNS to Vercel (or your hosting provider)
3. Add domain in your hosting dashboard
4. Update meta tags if needed

### Environment Variables for Deployment

Create a `.env.local` file locally (never commit):
```
VITE_API_URL=https://api.example.com
VITE_FORMSPREE_ID=your_id
```

## 📧 Contact Form Setup

### Option 1: Formspree (Easiest)

1. Go to [formspree.io](https://formspree.io)
2. Create account and add your email
3. Create new form
4. Copy the form ID
5. Update submission handler:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
      setSubmitted(true)
    }
  } catch (error) {
    console.error('Form submission failed:', error)
  }
}
```

### Option 2: Netlify Forms

If deploying to Netlify, use built-in form handling (no setup needed).

### Option 3: Backend API

Create a simple backend endpoint to handle form submissions.

## 🔒 Security Considerations

1. Never commit `.env` files with secrets
2. Use environment variables for sensitive data
3. Validate form inputs
4. Consider adding CAPTCHA for contact form
5. Use HTTPS for all connections
6. Regularly update dependencies: `npm update`

## 📊 Analytics & SEO

### Add Google Analytics

1. Create Google Analytics account
2. Add your tracking code to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### SEO Optimization

Update in `index.html`:
```html
<title>Your Name - Actor & Performer</title>
<meta name="description" content="Professional portfolio of [Your Name], featuring performances, reel, and headshots." />
<meta name="keywords" content="actor, performer, theater, film, [your genres]" />
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 5174
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
- Check image path starts with `/`
- Verify file exists in `public/` folder
- Check spelling and capitalization

### Styling Issues
- Clear Tailwind cache: `npm run build`
- Check Tailwind config includes correct file paths
- Restart dev server

## 🤝 Best Practices

1. **Keep it Simple**: Don't overload with information
2. **Professional Look**: Use high-quality images
3. **Mobile First**: Test on mobile devices
4. **Fast Loading**: Optimize all images
5. **Up to Date**: Keep portfolio current
6. **Clear CTA**: Make it easy to contact you
7. **Accessible**: Include alt text and semantic HTML
8. **SEO Ready**: Optimize for search engines

## 📞 Support Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Last Updated**: May 2026
**Version**: 1.0.0
