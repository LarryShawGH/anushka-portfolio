# ⚡ Quick Start - First 5 Minutes

## 1️⃣ Install & Run (1 minute)

```bash
cd portfolio
npm install
npm run dev
```

Your site opens at `http://localhost:5173` 🎉

## 2️⃣ Update Your Name (30 seconds)

Edit `src/components/Navigation.tsx`:
```tsx
<h1 className="font-serif text-2xl font-bold text-slate-900">
  Anushka Shah  ← Change this
</h1>
```

## 3️⃣ Update Your Bio (1 minute)

Edit `src/pages/HomePage.tsx`:
```tsx
<h1>Hi, I'm <span>Your Name Here</span></h1>

<p>
  [UPDATE YOUR BIO - What are you? Where are you based?]
</p>
```

## 4️⃣ Update Contact Info (1 minute)

Edit `src/pages/ContactPage.tsx`:
```tsx
<a href="mailto:your@email.com">your@email.com</a>
<a href="tel:+1XXXXXXXXXX">(XXX) XXX-XXXX</a>
```

## 5️⃣ Update Footer (1 minute)

Edit `src/components/Footer.tsx`:
```tsx
<p>Your Email, Location, Social Links</p>
```

## ✅ Done!

You now have a working portfolio with your info!

---

## 📸 Next: Add Images

1. Create folder: `portfolio/public/images/`
2. Add your headshot image
3. Update `src/pages/HomePage.tsx`:
   ```tsx
   <img src="/images/your-headshot.jpg" alt="Your Name" />
   ```

---

## 🚀 Ready to Deploy?

```bash
# Build for production
npm run build

# Push to GitHub
git push origin main

# Go to Vercel.com and import your GitHub repo
# Root directory: portfolio
# Click Deploy!
```

**You're live in 5 minutes!** 🎊

---

## 📚 Full Guides

- **Detailed Setup**: See `README.md`
- **Customization**: See `CUSTOMIZATION_GUIDE.md`
- **Deployment**: See `DEPLOYMENT_GUIDE.md`
- **Project Info**: See `PROJECT_SUMMARY.md`

---

## 🎯 What to Customize Now

| File | Change | Why |
|------|--------|-----|
| `src/components/Navigation.tsx` | Your name | Logo |
| `src/pages/HomePage.tsx` | Your bio | Hero section |
| `src/pages/AboutPage.tsx` | Your background | About page |
| `src/components/Footer.tsx` | Contact info | Footer |
| `src/pages/ContactPage.tsx` | Email & phone | Contact form |

---

## ⚙️ File Locations

```
portfolio/
├── src/
│   ├── pages/       ← Edit these
│   └── components/  ← Edit these
├── public/
│   └── images/      ← Add your images here
└── index.html       ← Meta tags
```

---

## 💡 Pro Tips

1. **Save your changes** - File auto-refreshes in browser
2. **Check mobile** - Resize browser to test responsive
3. **No need to restart** - Vite auto-reloads on file change
4. **Keep it simple** - Don't overcomplicate at first
5. **Add images later** - Get the text working first

---

## 🆘 Quick Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 5174
```

**Styles not updating?**
```bash
# Restart the dev server
# Ctrl+C then npm run dev
```

**Images not showing?**
```
Check: Does file exist in public/ folder?
Check: Path starts with / ?
Check: Filename matches exactly?
```

---

## 📱 After Customization

1. **Test on mobile**: Open in Chrome DevTools (F12)
2. **Check all links**: Click every navigation link
3. **Test contact form**: Fill out and submit
4. **Check images**: All visible and clear?

---

## 🎬 Next Phase

Once basic customization done:

1. [ ] Add portfolio projects
2. [ ] Add reel videos
3. [ ] Upload professional headshots
4. [ ] Add resume download
5. [ ] Deploy to Vercel
6. [ ] Point custom domain

---

**Ready? Start with Step 1 above!** 🚀
