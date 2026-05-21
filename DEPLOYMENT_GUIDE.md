# Deployment Guide - Actor Portfolio Website

Complete guide to deploying your portfolio website to production.

## 🚀 Quick Deploy (Recommended)

### Deploy to Vercel (5 minutes)

**Best for**: Actors who want a quick, professional deployment with custom domain.

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your GitHub repo
   - Root directory: `portfolio`
   - Click "Deploy"

3. **Done!** Your site is live at a Vercel URL

### Add Custom Domain (Vercel)

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your domain (e.g., anushkashahactor.com)
4. Follow DNS instructions from your domain registrar
5. Wait for DNS to propagate (typically 24-48 hours)

---

## 📦 Other Deployment Options

### Deploy to Netlify

**Best for**: GitHub integration with automatic deployments.

1. **Connect GitHub**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository

2. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Root directory: `portfolio`
   - Click "Deploy"

3. **Add Domain**:
   - Domain settings → Add custom domain
   - Update DNS at your registrar

### Deploy to GitHub Pages

**Best for**: Free hosting directly from GitHub.

1. **Update vite.config.ts**:
   ```ts
   export default defineConfig({
     base: '/portfolio/', // your repo name
     // ... rest of config
   })
   ```

2. **Create GitHub Actions workflow** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm ci && npm run build
         - uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: portfolio/dist
             branch: gh-pages
   ```

3. **Enable Pages**:
   - Repository Settings → Pages
   - Select `gh-pages` branch
   - Your site will be available at `username.github.io/portfolio`

### Deploy to AWS S3 + CloudFront

**Best for**: Enterprise-level hosting with CDN.

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Create S3 bucket**:
   - AWS Console → S3 → Create bucket
   - Enable static website hosting
   - Upload files from `dist/` folder

3. **Set up CloudFront**:
   - Create distribution pointing to S3
   - Set default root object to `index.html`
   - Configure error pages to serve `index.html`

4. **Point domain**:
   - Route 53 → Create alias record
   - Point to CloudFront distribution

### Deploy to DigitalOcean

**Best for**: Full control with affordable pricing.

1. **Create App Platform project**:
   - DigitalOcean → Apps → Create App
   - Connect GitHub repo
   - Build: `npm run build`
   - Output: `portfolio/dist`
   - Deploy

2. **Add domain**:
   - Update DNS records with DigitalOcean nameservers
   - Configure in App Platform settings

---

## 🔧 Pre-Deployment Checklist

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Contact form is functional
- [ ] Mobile responsive on all devices
- [ ] No console errors
- [ ] All social links updated
- [ ] Contact information correct
- [ ] Portfolio items complete
- [ ] Headshots uploaded
- [ ] Resume files ready
- [ ] Meta tags in index.html updated
- [ ] Domain registered (if using custom domain)

## 🧪 Testing Before Deploy

### Local Testing

```bash
# Build production version
npm run build

# Preview production build
npm run preview
```

### Test on Multiple Devices

- Chrome, Firefox, Safari browsers
- Mobile phones (iPhone, Android)
- Tablets
- Use BrowserStack for device testing

### Lighthouse Audit

1. Build: `npm run build`
2. Preview: `npm run preview`
3. Open in Chrome
4. DevTools → Lighthouse → Generate report
5. Fix any issues (performance, accessibility, SEO)

---

## 🌐 Domain Registration & Setup

### Buy a Domain

Popular registrars:
- [Namecheap](https://namecheap.com) - Affordable, easy DNS management
- [GoDaddy](https://godaddy.com) - Well-known, good support
- [Google Domains](https://domains.google) - Simple, integrated with Google services

### Update DNS Records

Most hosting platforms provide DNS instructions. Generally:

1. Go to your registrar's DNS settings
2. Update nameservers OR add A/CNAME records
3. Point to your hosting provider
4. Wait for propagation (typically 24-48 hours)

### Example DNS Records (Vercel)

```
Type: A
Name: @
Value: 76.76.19.21
```

Or let your registrar auto-configure with Vercel nameservers.

---

## 🔒 Security

### Enable HTTPS

All modern hosting platforms (Vercel, Netlify, etc.) provide free SSL certificates.

### Protect Environment Variables

Never commit `.env` files:

1. Create `.env.local` locally
2. Add to `.gitignore`
3. Set variables in hosting platform's dashboard
4. Access with `import.meta.env.VITE_VAR_NAME`

### Update Dependencies Regularly

```bash
# Check for updates
npm outdated

# Update packages
npm update

# Audit for vulnerabilities
npm audit
npm audit fix
```

---

## 📊 Post-Deployment Setup

### Add Analytics

1. **Google Analytics**:
   - Create account
   - Add GA code to `index.html`
   - Track portfolio views and user engagement

2. **Search Console**:
   - Verify domain ownership
   - Submit sitemap
   - Monitor search performance

### Set Up Email Notifications

For contact form submissions:
- Formspree sends emails automatically
- Or set up backend to send emails via SendGrid/Mailgun

### Monitor Performance

- Set up uptime monitoring (UptimeRobot, Pingdom)
- Enable error tracking (Sentry, LogRocket)
- Review analytics weekly

---

## 🆘 Troubleshooting

### Site Not Loading

1. Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
2. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
3. Check hosting provider status page
4. Review deployment logs

### Images Not Loading

1. Check image paths (should start with `/`)
2. Verify files in production (check `dist/` folder)
3. Check CORS settings if images from external domain
4. Rebuild and redeploy: `npm run build`

### Form Not Working

1. Check Formspree credentials
2. Test form submission
3. Check spam folder for test emails
4. Review hosting provider's CORS settings

### Slow Performance

1. Run Lighthouse audit
2. Optimize images
3. Enable caching headers
4. Use CDN
5. Minimize JavaScript bundles

### 404 Errors on Routes

**React Router + Static Hosting Issue**

Configure your hosting to serve `index.html` for all routes:

**Vercel**: Automatic ✓

**Netlify**: Add `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**GitHub Pages**: Not supported for client-side routing (use hash routing)

---

## 📈 Monitoring & Maintenance

### Weekly Tasks
- Check site loads correctly
- Verify all links work
- Monitor contact form submissions

### Monthly Tasks
- Review analytics
- Check Google Search Console
- Update content if needed
- Test on different devices

### Quarterly Tasks
- Update portfolio with new projects
- Refresh headshots if needed
- Update reel
- Run security audit
- Update dependencies

### Annually
- Renewal of domain registration
- SSL certificate renewal (automatic on most platforms)
- Annual review of design/layout
- Archive old projects

---

## 💰 Estimated Costs

| Service | Cost | Notes |
|---------|------|-------|
| Domain | $10-15/year | One-time + renewal |
| Vercel | Free | Free tier sufficient for portfolio |
| GitHub | Free | Free for public repos |
| Email (Formspree) | Free | 50 submissions/month free |
| Custom Email | $5-10/month | Optional (e.g., hello@yourdomain.com) |
| **Total** | **~$10-15/year** | Very affordable! |

---

## 🎯 Pro Tips

1. **Use Vercel** - Best balance of ease and features
2. **Point custom domain immediately** - Gets you in Google Search faster
3. **Submit to Google Search Console** - Better visibility in search
4. **Add Google Analytics** - Track where visitors come from
5. **Update portfolio regularly** - Fresh content helps with SEO
6. **Optimize images** - Faster loading = better rankings
7. **Keep it simple** - Don't overcomplicate the design
8. **Test everything before launch** - Catch issues early

---

## 📞 Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **React Router**: https://reactrouter.com
- **Vite Docs**: https://vitejs.dev/guide

---

**Last Updated**: May 2026
**Version**: 1.0.0
