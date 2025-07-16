# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- ✨ Modern and clean design
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive
- ⚡ Built with Next.js 14 App Router
- 🎨 Styled with TailwindCSS
- 🔧 TypeScript for type safety
- 🎭 Smooth animations with Framer Motion

## Pages

- **Home**: Hero section with introduction and quick links
- **Projects**: Showcase of featured projects with tech stacks
- **Resume**: Complete resume with experience, education, and skills
- **Contact**: Contact form and social media links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd photoportfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── resume/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx
│   └── ThemeProvider.tsx
├── public/
│   └── images/
└── package.json
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Next Themes**: Theme management

## Customization

1. Update the personal information in the components
2. Replace placeholder images in the `public/images` directory
3. Modify the project data in `app/projects/page.tsx`
4. Update contact information and social links
5. Customize the color scheme in `tailwind.config.ts`

## Deployment

This project can be deployed on any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **AWS Amplify**

## License

MIT License

## Contact

Prince Kushwaha - Developer & Coordinator
- Email: prince@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [Your GitHub](https://github.com)
