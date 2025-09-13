# Rakshak Kumar - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion, showcasing my projects, skills, and experience as a Full Stack Developer.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between dark and light modes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Meta tags, sitemap, and structured data for better search visibility
- **Performance Optimized**: Lazy loading, image optimization, and efficient bundling
- **Accessibility**: WCAG compliant with proper focus management and screen reader support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: Optimized for static export

## 📋 Sections

1. **Hero Section**: Introduction with animated elements
2. **About**: Personal information and background
3. **Education**: Academic timeline with achievements
4. **Projects**: Featured projects with detailed descriptions
5. **Skills**: Technical skills with proficiency indicators
6. **Contact**: Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rakshakphogat/portfolio.git
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Export Static Site

```bash
npm run export
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main homepage
│   ├── globals.css        # Global styles
│   └── sitemap.js         # SEO sitemap
├── components/
│   ├── Navbar.jsx         # Navigation component
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About section
│   ├── Education.jsx      # Education timeline
│   ├── Projects.jsx       # Projects showcase
│   ├── Skills.jsx         # Skills display
│   ├── Contact.jsx        # Contact form
│   └── Footer.jsx         # Footer component
└── data/
    └── portfolio.js       # Portfolio data and content
```

## 🎨 Customization

### Personal Information

Update your information in `src/data/portfolio.js`:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... other details
  },
  // ... other sections
};
```

### Styling

- Modify colors and design in Tailwind CSS classes
- Adjust animations in Framer Motion components
- Customize global styles in `src/app/globals.css`

### Content

- Add/remove sections by modifying components
- Update project information in the data file
- Customize navigation items

## 📱 Progressive Web App (PWA)

The portfolio includes PWA features:

- Web app manifest for installation
- Optimized for mobile devices
- Offline-ready architecture

## 🔧 Performance Optimizations

- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Minification**: CSS and JavaScript minification in production
- **Caching**: Proper cache headers for static assets

## 📊 SEO Features

- Meta tags for social media sharing
- Structured data markup
- XML sitemap generation
- Robots.txt configuration
- Open Graph and Twitter Card tags

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/rakshakphogat/portfolio/issues).

## 📞 Contact

**Rakshak Kumar**

- Email: rakshakphogat@gmail.com
- LinkedIn: [rakshak-kumar](https://www.linkedin.com/in/rakshak-kumar-97901a331/)
- GitHub: [rakshakphogat](https://github.com/rakshakphogat)

---

⭐ Star this repository if you found it helpful!
