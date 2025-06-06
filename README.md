# Ben Brasso Portfolio

> ⚠️ **Usage Notice**  
> This portfolio repository is for reference only.  
> **Forking, copying, or reusing any part of this project without explicit permission is prohibited.**

---

A modern, responsive portfolio website showcasing UX design work, built with Next.js 15 and deployed on Vercel.

## 🚀 Live Demo

[Visit live site](https://www.benbrasso.com/)

## 📋 About

This portfolio showcases my work as a Full-Stack UX Product Design Lead, featuring:

- **Featured Projects**: Healthcare UX design case studies including provider scheduling, patient check-in, and AI scribe dashboards
- **Personal README**: A comprehensive guide to my work style, strengths, and collaboration preferences
- **Contact Form**: Direct communication with email integration
- **Responsive Design**: Optimized for all devices and screen sizes

## 🛠️ Tech Stack

### Framework & Core
- **Next.js 15** - React framework with App Router
- **React 18+** - With Server Components and Server Actions
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### UI & Components
- **shadcn/ui** - Component library built on Radix UI
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

### Forms & Validation
- **React Hook Form** - Performant form management
- **Zod** - TypeScript-first schema validation
- **Resend** - Email delivery service

### Deployment & Hosting
- **Vercel** - Deployment platform with automatic CI/CD
- **Cloudinary** - Image optimization and delivery

## 🏗️ Project Structure

\`\`\`
app/
├── components/         # Reusable UI components
├── contact/            # Contact page and form logic
├── read-me/            # Personal README page
├── work/               # Project case studies
├── data/               # Project data and content
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx            # Homepage

components/ui/          # shadcn/ui components
public/                 # Static assets
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/designbybenbrasso-portfolio.git
cd designbybenbrasso-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Add your environment variables:
\`\`\`
RESEND_API_KEY=your_resend_api_key
# Add other environment variables as needed
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Contact Form Setup

The contact form uses Resend for email delivery. To set it up:

1. Sign up for a [Resend account](https://resend.com)
2. Get your API key from the Resend dashboard
3. Add the API key to your environment variables
4. Update the recipient email in `app/contact/actions.ts`

## 🎨 Customization

### Adding New Projects
1. Add project data to `app/data/projects-data.ts`
2. Create a new page in `app/work/[project-slug]/page.tsx`
3. Add project images to your image hosting service

### Updating Content
- **Hero Section**: Edit `app/components/hero-section.tsx`
- **About Content**: Modify `app/components/hero-section-bio-block.tsx`
- **README Content**: Update `app/read-me/read-me-data.ts`
- **Tools**: Edit `app/components/tools-i-use.tsx`

### Styling
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Individual component files

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📱 Features

- ✅ Responsive design for all devices
- ✅ Dark/light mode support
- ✅ SEO optimized with Next.js metadata
- ✅ Smooth animations with Framer Motion
- ✅ Contact form with email integration
- ✅ Accessible design following WCAG guidelines
- ✅ Fast loading with Next.js optimizations
- ✅ Type-safe development with TypeScript

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Ben Brasso**
- Portfolio: [benbrasso.com](https://www.benbrasso.com)
- LinkedIn: [linkedin.com/in/benbrasso](https://linkedin.com/in/benbrasso)
- GitHub: [github.com/benbrasso-agile6](https://github.com/benbrasso-agile6)
- Email: benbrasso@gmail.com

---

Built with ❤️ using Next.js 15 and deployed on Vercel.

---

## 📝 License & Usage

- **Code**: Licensed under the [MIT License](./LICENSE).
- **Design, Content & Images**: Licensed under the [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).
- **Repository Access Policy**: Forking, copying, or mirroring this repository is **not permitted without prior written consent**.

This repository is intended for viewing and reference only.  
For licensing requests, please [contact me](mailto:benbrasso@gmail.com).

© 2025 Ben Brasso. All rights reserved.
