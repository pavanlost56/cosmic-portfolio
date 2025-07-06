# 🧑‍💻 Ajmeera Pavan Kumar – Portfolio

A clean, accessible, and responsive black & white personal developer portfolio built with modern web technologies.

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Font:** Inter (Google Fonts)

## 🎯 Features

### ✨ Core Sections
- **Hero Section** - Professional introduction with CTA buttons
- **Stats Section** - Key metrics and achievements
- **Skills & Technologies** - Technical expertise with progress bars
- **Experience Timeline** - Professional journey with detailed descriptions
- **Projects Grid** - Showcase of development work with links
- **Learning Section** - Current learning progress and goals
- **Contact Form** - Functional contact form with validation
- **Footer** - Social links and copyright information

### 🎨 Design System
- **Theme:** Strictly black & white using Tailwind's neutral palette
- **Colors:** Only `black`, `white`, and `gray-50` to `gray-900`
- **Typography:** Clean sans-serif fonts with consistent spacing
- **Layout:** Max width `max-w-5xl`, centered, mobile-first responsive
- **Animations:** Subtle fade-in and slide-in effects using Framer Motion
- **Accessibility:** Semantic HTML, keyboard navigation, proper contrast

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cosmic-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
cosmic-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Learning.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── Footer.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── lib/
│       └── data.ts
├── public/
│   └── resume.pdf (add your resume here)
└── ...config files
```

## 🔧 Customization

### Update Personal Information
Edit `src/lib/data.ts` to customize:
- Personal details (name, role, contact info)
- Skills and proficiency levels
- Work experience and descriptions
- Project showcases
- Learning goals

### Add Your Resume
1. Save your resume as `resume.pdf`
2. Place it in the `public/` folder
3. The download link will work automatically

### Modify Styling
- All styling follows the black & white design system
- Use only Tailwind's neutral color palette
- Maintain consistent spacing and typography

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Mobile:** 320px and up
- **Tablet:** 768px and up  
- **Desktop:** 1024px and up
- **Large screens:** 1280px and up

## 🌟 Key Components

### Hero Section
- Animated name and role introduction
- GitHub, LinkedIn, and Resume download buttons
- Scroll indicator animation

### Skills Section
- Categorized skill groups (Frontend, Backend, DevOps, Tools)
- Animated progress bars
- Responsive grid layout

### Experience Timeline
- Vertical timeline with alternating cards
- Company details and achievement bullets
- Hover effects and animations

### Projects Grid
- Project cards with tech stack tags
- GitHub and live demo links
- Responsive grid layout

### Contact Form
- React Hook Form with validation
- Accessible form controls
- Loading states and success feedback

## 🚀 Performance

- **Fast Loading:** Optimized Next.js build
- **SEO Ready:** Proper meta tags and structured data
- **Accessibility:** WCAG 2.1 AA compliant
- **Lighthouse Score:** 95+ across all metrics

## 📜 Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Contact

**Ajmeera Pavan Kumar**
- Email: pavankumar22119@gmail.com
- Phone: +91-9440926408
- GitHub: [@pavanlost56](https://github.com/pavanlost56)
- LinkedIn: [pavan-kumar-ajmeera](https://www.linkedin.com/in/pavan-kumar-ajmeera-8b3ba3318/)

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
