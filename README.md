# Mehedi's Portfolio Website

A production-ready portfolio website built with Next.js 15, showcasing research work, projects, and engineering experience.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI, Magic UI, Aceternity UI
- **Animation**: Framer Motion
- **Content**: MDX with LaTeX support

## Features

- 🎨 Scientific/Cyberpunk dark theme
- 📱 Fully responsive design
- 🔬 Research papers with LaTeX math rendering
- 🎯 Bento Grid layout for projects
- 📅 Timeline component for experience
- 🎪 Infinite marquee for skills
- ⚡ Server-side rendering for optimal performance
- 🔍 SEO optimized with dynamic metadata

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── ui/          # Shadcn UI primitives
│   └── sections/    # Page sections
├── data/            # TypeScript interfaces and data
├── lib/             # Utility functions
└── content/         # MDX research papers
```

## Customization

Update the data in `src/data/portfolio.ts` to customize:
- Personal information
- Projects
- Experience
- Publications
- Skills

## Deployment

The site is optimized for deployment on Vercel:

```bash
npm run build
```

## License

MIT

