# Mohit Yadav - Photography & Cinematography Portfolio

A modern, responsive portfolio website for photographer and cinematographer Mohit Yadav, built with Adobe Portfolio-inspired design aesthetics.

## 🎯 Features

- **Photography Gallery**: Organized by categories (Model, Food, Travel, Hotel, Product)
- **Videography Showcase**: Video portfolio with YouTube embeds
- **Behind The Scenes**: Equipment details and creative process
- **About Page**: Professional biography and achievements
- **Contact Form**: Project inquiry form with budget ranges
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Dark/Light Mode**: Theme switching with next-themes
- **Image Lightbox**: Interactive photo viewing with react-photo-view
- **Smooth Animations**: Framer Motion transitions
- **SEO Optimized**: Meta tags and OpenGraph configuration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Image Lightbox**: react-photo-view
- **Theme Switching**: next-themes
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 🚀 Getting Started

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

4. Open [http://localhost:3000](http://localhost:3000) to view the portfolio

## 📁 Project Structure

```
app/
├── globals.css          # Global styles and Tailwind imports
├── layout.tsx           # Root layout with metadata and providers
├── page.tsx             # Homepage with hero slideshow
├── about/               # About page with biography
├── bts/                 # Behind the scenes content
├── contact/             # Contact form and information
├── photography/         # Photography galleries
│   └── [category]/      # Dynamic category pages
├── projects/            # Project showcase
├── resume/              # Professional resume
└── videography/         # Video portfolio

components/
├── Navbar.tsx           # Navigation component
└── ThemeProvider.tsx    # Theme context provider

public/images/
├── hero/                # Hero slideshow images
├── photography/         # Category-organized photos
│   ├── model/
│   ├── food/
│   ├── travel/
│   ├── hotel/
│   └── product/
└── *.jpg                # Profile and project images
```

## 🎨 Design Features

- **Adobe Portfolio Aesthetic**: Clean, minimal design inspired by Adobe Portfolio
- **Typography**: Inter font family for modern readability
- **Color Scheme**: Professional palette with blue and purple accents
- **Grid Layouts**: Masonry-style galleries and responsive grids
- **Hover Effects**: Smooth transitions and interactive elements
- **Mobile Responsive**: Optimized for all device sizes

## 📸 Photography Categories

- **Model Photography**: Portrait and fashion photography
- **Food Photography**: Culinary and restaurant imagery
- **Travel Photography**: Landscape and destination photos
- **Hotel Photography**: Interior and hospitality imagery
- **Product Photography**: Commercial and e-commerce shots

## 🎬 Videography Services

- Documentary filmmaking
- Commercial video production
- Event cinematography
- Creative video projects
- Post-production services

## 📞 Contact Information

The portfolio includes a comprehensive contact form with:
- Project type selection
- Budget range options
- Timeline preferences
- Detailed project descriptions
- FAQ section for common inquiries

## 🚀 Deployment

To deploy the portfolio:

1. **Build the project:**
```bash
npm run build
```

2. **Deploy to Vercel (recommended):**
```bash
npx vercel --prod
```

Or deploy to any hosting platform that supports Next.js applications.

## 📄 License

This project is created for Mohit Yadav's professional portfolio. All images and content are placeholder materials for demonstration purposes.

## 🤝 Credits

- Built with Next.js 14 and modern web technologies
- Design inspired by Adobe Portfolio
- Icons by Lucide React
- Fonts by Google Fonts

## Contact

Prince Kushwaha - Developer & Coordinator
- Email: prince@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [Your GitHub](https://github.com)
