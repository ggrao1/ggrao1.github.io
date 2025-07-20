# Gautham G Rao - Personal Portfolio

A modern, responsive portfolio website showcasing expertise in cloud computing, artificial intelligence, and full-stack development.

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient animations and glass effects
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Dynamic navigation, animated elements, and smooth transitions
- **SEO Optimized**: Proper meta tags, structured data, and performance optimization
- **TypeScript**: Full type safety and better development experience
- **Accessibility**: WCAG compliant with semantic HTML and proper ARIA attributes

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Package Manager**: npm

## 📋 Sections

### Home

- Hero section with animated taglines
- Featured projects showcase
- Skills overview
- Call-to-action buttons

### About

- Personal journey and philosophy
- Career highlights
- Achievements and certifications
- Professional values

### Projects

- Detailed project showcase
- Technologies used
- Challenges and solutions
- Live demos and GitHub links

### Skills

- Comprehensive skill breakdown
- Experience levels and descriptions
- Project examples
- Certifications and achievements

### Blog

- Technical articles and insights
- Categories and tags
- Featured and recent posts
- Newsletter signup

### Contact

- Contact form with validation
- Professional links
- Services offered
- FAQ section

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ggrao1/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### GitHub Pages Setup (Important!)

**Before pushing your code, configure GitHub Pages:**

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Save the settings

### Automatic Deployment

1. **Push to master/main branch**: The GitHub Actions workflow will automatically build and deploy your site
2. **Wait for deployment**: Check the "Actions" tab to see the deployment progress
3. **Access your site**: Your portfolio will be available at `https://ggrao1.github.io/ggrao-website`

### Troubleshooting

If GitHub Pages shows README instead of your website:

1. **Check GitHub Pages source**: Ensure it's set to "GitHub Actions" not "Deploy from a branch"
2. **Check Actions tab**: Look for any failed deployments
3. **Verify build**: The workflow should create an `index.html` file in the root of the deployed content
4. **Clear cache**: Try accessing your site in an incognito/private browser window

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Build and export static files
npm run export

# Deploy to GitHub Pages (requires gh-pages package)
npm run deploy
```

### Important Notes

- **Repository name**: Make sure your repository name matches the URL structure
- **Branch**: This workflow supports both `master` and `main` branches
- **Build time**: Initial deployment may take 5-10 minutes
- **Custom domain**: You can configure a custom domain in repository settings

Your site will be available at: `https://ggrao1.github.io/ggrao-website`

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/           # About page
│   ├── blog/            # Blog listing page
│   ├── contact/         # Contact page
│   ├── projects/        # Projects page
│   ├── skills/          # Skills page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # Reusable components
│   ├── Navigation.tsx   # Main navigation
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Hero section
│   ├── FeaturedProjects.tsx
│   ├── Skills.tsx       # Skills component
│   └── ProjectCard.tsx  # Project card component
└── public/              # Static assets
```

## 🎨 Design System

### Colors

- Primary: Purple (#7C3AED)
- Secondary: Blue (#2563EB)
- Accent: Various gradients
- Neutral: Gray scale

### Typography

- Font: Inter (Google Fonts)
- Headings: Bold weights
- Body: Regular weight

### Components

- Glass effect cards
- Gradient backgrounds
- Smooth animations
- Hover interactions

## 🔧 Customization

### Content Updates

- Update personal information in components
- Add/remove projects in the projects data
- Modify skills in the skills data structure
- Update contact information and links

### Styling

- Customize colors in `tailwind.config.js`
- Modify animations in `globals.css`
- Update component styles using Tailwind classes

### Adding Pages

- Create new page files in `src/app/`
- Add navigation links in `Navigation.tsx`
- Update sitemap and metadata

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Optimized images and assets

## ⚡ Performance

- Next.js automatic optimization
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Minimal bundle size

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on commits

### Other Platforms

- Netlify
- AWS Amplify
- Digital Ocean App Platform

## 📊 Analytics & SEO

- Google Analytics ready
- Open Graph meta tags
- Twitter Card support
- Structured data markup
- Sitemap generation

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: gautham@example.com
- **LinkedIn**: [gauthamgrao](https://linkedin.com/in/gauthamgrao)
- **GitHub**: [ggrao1](https://github.com/ggrao1)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Vercel for hosting and deployment
- The open-source community

---

**Built with ❤️ by Gautham G Rao**
