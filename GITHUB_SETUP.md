# GitHub Setup & Publishing Guide

Your portfolio is ready to publish! Here are the steps to get it on GitHub with live client preview.

## ✅ Local Git Repository Status

Your local repository is configured and ready:
- **Repository**: anushka-portfolio
- **Username**: LarryShawGH
- **Initial Commit**: ✓ Complete (27 files, 3,196 insertions)
- **Branch**: master

## 🚀 Step 1: Create Repository on GitHub

1. Go to **[github.com/new](https://github.com/new)**
2. Fill in the form:
   - **Repository name**: `anushka-portfolio`
   - **Description**: "Professional actor portfolio website"
   - **Visibility**: Public ✓
   - **Initialize with**: Do NOT initialize (we have files locally)
3. Click **"Create repository"**

## 📤 Step 2: Connect Local Repository to GitHub

Copy and run these commands in PowerShell:

```powershell
cd "c:\Users\lshah\projects\Convokz\Convokz-DigitalFactory-1\portfolio"

git branch -M main

git remote add origin https://github.com/LarryShawGH/anushka-portfolio.git

git push -u origin main
```

**Note**: You may be prompted for GitHub authentication. Use your GitHub personal access token or authenticate through GitHub's web browser if prompted.

## 📍 Step 3: Verify Repository

Go to: **https://github.com/LarryShawGH/anushka-portfolio**

You should see:
- All your portfolio files uploaded
- Initial commit with 27 files
- README.md with full documentation

## 🌐 Step 4: Enable GitHub Pages (For Client Preview)

This creates a live website from your repository!

1. Go to your repository: **https://github.com/LarryShawGH/anushka-portfolio**
2. Click **Settings** (gear icon, top right)
3. Scroll to **"Pages"** section (left sidebar)
4. Under **"Source"**:
   - Branch: Select **`main`**
   - Folder: Select **`/(root)`** (if using root), or `/docs` for docs folder
5. Click **Save**

⏳ **Wait 1-2 minutes** for the site to build and deploy.

## 🎉 Your Client Preview URL

Your GitHub Pages site will be available at:

```
https://LarryShawGH.github.io/anushka-portfolio/
```

📧 **Share this link with your client!**

## 🔧 Advanced: Use Custom Branch for Production Builds

For a cleaner setup, you can build the project and push only the `dist/` folder:

1. Build the project locally:
```powershell
cd portfolio
npm run build
```

2. Create a `gh-pages` branch with the dist folder:
```powershell
git subtree push --prefix dist origin gh-pages
```

3. In GitHub Settings > Pages, select the `gh-pages` branch

This way, the main branch has all your source code, and `gh-pages` has only the production build.

## 🔄 Future Deployments

Every time you want to update the live site:

```powershell
# Make changes locally
# Test with: npm run dev

# Build for production
npm run build

# Commit changes
git add .
git commit -m "Update: [describe your changes]"

# Push to GitHub
git push origin main

# (Optional) Push dist to gh-pages branch
git subtree push --prefix dist origin gh-pages
```

## 📋 Checklist

- [ ] Repository created on GitHub
- [ ] Local repo connected to GitHub (`git remote -v` shows origin)
- [ ] Code pushed to GitHub (`git push` successful)
- [ ] GitHub Pages enabled in Settings
- [ ] Site deployed (wait 1-2 minutes)
- [ ] Client preview URL working
- [ ] Client link shared

## 💡 Tips for Sharing with Client

### Email to Client:
```
Hi [Client Name],

I've created a professional portfolio website for you!
You can preview it here: https://LarryShawGH.github.io/anushka-portfolio/

Features included:
✓ Home page with professional introduction
✓ About page with biography
✓ Portfolio showcase with filterable projects
✓ Reel section for video showcases
✓ Headshots and resume downloads
✓ Contact form and information
✓ Fully responsive (works on all devices)
✓ Professional, modern design

Ready to customize? We can:
- Update your projects and reels
- Add your professional headshots
- Customize colors and styling
- Add your social media links
- Set up your custom domain

Let me know your thoughts!
```

## 🌐 Custom Domain (Optional)

To point your domain to the GitHub Pages site:

1. In GitHub Settings > Pages:
   - Add custom domain: `anushkashahactor.com`
   - Save (creates CNAME file)

2. In your domain registrar (GoDaddy, Namecheap, etc.):
   - Update DNS records to point to GitHub Pages
   - Instructions specific to each registrar

3. Wait 24-48 hours for DNS propagation

## 🆘 Troubleshooting

### "Permission denied" error?
- Generate a GitHub Personal Access Token:
  - GitHub → Settings → Developer Settings → Personal Access Tokens
  - Create new token with `repo` scope
  - Use token instead of password when prompted

### GitHub Pages not building?
- Check Actions tab in your repo
- Look for build errors
- Verify `main` branch is selected in Settings > Pages

### Want to see build status?
- Go to your repo
- Click "Actions" tab
- View all deployment runs

## 📊 What's Being Deployed

When GitHub Pages builds your site:
- It looks at the `main` branch
- Finds all your source code
- You need to either:
  - Push built `dist/` folder, OR
  - Use a GitHub Action to build automatically

**Recommended**: Set up automatic builds with GitHub Actions (see guide below)

---

## 🤖 Auto-Build Setup (Advanced)

To automatically build and deploy on every push:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

This automatically:
1. Runs `npm install` and `npm run build` on every push
2. Deploys the built `dist/` to `gh-pages` branch
3. Your site updates automatically!

---

## ✨ Next Steps

1. ✅ Create repository on GitHub
2. ✅ Push code from PowerShell
3. ✅ Enable GitHub Pages
4. ✅ Test the live URL
5. ✅ Share with client
6. Add custom domain (optional)
7. Set up auto-deploy (optional)

**Ready? Start with Step 1 above!**

---

Need help? Check:
- [GitHub Docs - Creating Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories)
- [GitHub Docs - GitHub Pages](https://docs.github.com/en/pages)
- [GitHub Docs - Pushing Code](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository)
