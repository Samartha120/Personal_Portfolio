# Software Developer Portfolio

A production-ready, high-performance personal portfolio website built with **Vite, React, TypeScript, and Tailwind CSS**.

Designed specifically for software engineering roles, recruiter outreach, off-campus placements, and technical job applications. Built with an **anti-AI, editorial design philosophy**: minimal, highly readable, restrained, and focused on demonstrating real technical capability.

---

## Key Features

- **Editorial Technical Aesthetic**: Restrained typography-first design using Inter, clean spacing grids, subtle 1px border hierarchy, and zero generic AI clichés (no glowing neon, particle backgrounds, or artificial percentage bars).
- **Recruiter 30-Second Skim Hierarchy**: Immediate identity establishment, categorized tech stack, featured project specification, work history, and direct PDF resume actions.
- **Deep Technical Project Specifications**: Interactive project detail specs breaking down problem statements, engineering approaches, system architecture, implementation details, and verified benchmarks.
- **Data & Presentation Decoupling**: All portfolio content (profile, projects, skills, experience, education, achievements) is structured in `src/data/*.ts` for quick updates without touching component logic.
- **Dark & Light Theme**: Built-in persistent theme switcher using `localStorage` and system `prefers-color-scheme`.
- **Performance & SEO**: Lighthouse performance score optimized, lightweight bundle size, semantic HTML5 tags, Open Graph meta, Twitter card metadata, `robots.txt`, and `sitemap.xml`.
- **Accessible (WCAG)**: Keyboard navigation support, visible focus rings, aria-labels, and modal ESC key handling.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (used subtly for smooth reveals)

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── resume/
│       └── resume.pdf
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Resume.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectModal.tsx
│   │       ├── SocialLinks.tsx
│   │       └── ThemeToggle.tsx
│   │
│   ├── data/
│   │   ├── profile.ts        # Personal info, bio, social links
│   │   ├── projects.ts       # Structured project specifications
│   │   ├── skills.ts         # Technical skill categories
│   │   ├── experience.ts     # Work history & internship bullets
│   │   ├── education.ts      # Degree & coursework details
│   │   └── achievements.ts   # Engineering awards & contributions
│   │
│   ├── hooks/
│   │   ├── useTheme.ts       # Light/Dark mode state hook
│   │   └── useScrollSpy.ts   # Active navigation section tracker
│   │
│   ├── lib/
│   │   └── utils.ts          # Classnames utility (clsx + tailwind-merge)
│   │
│   ├── types/
│   │   └── index.ts          # Strict TypeScript interfaces
│   │
│   ├── styles/
│   │   └── globals.css       # Tailwind CSS import & theme variables
│   │
│   ├── App.tsx               # Main application component
│   └── main.tsx              # Application entry point
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Production Build & Preview

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Deployment

### Vercel (Recommended)
1. Push this repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Deploy!

### Netlify
1. Connect your repository to Netlify.
2. Build Command: `npm run build`.
3. Publish Directory: `dist`.

---

## Customization Guide

To update the portfolio with your personal details:
1. Edit `src/data/profile.ts` for name, email, GitHub, LinkedIn, and bio.
2. Replace `public/resume/resume.pdf` with your actual PDF resume.
3. Edit `src/data/projects.ts` to add or modify your engineering projects.
4. Edit `src/data/skills.ts` to adjust your skill categories.
