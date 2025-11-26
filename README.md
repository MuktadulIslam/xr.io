# CraftXR - Official Website

## 🚀 About CraftXR

CraftXR is a revolutionary no-code VR development platform that empowers educators to create immersive 3D simulations for training students. Our platform features:

- **EvalNTS**: AI-Evaluator for Non-technical Skills
- **No-Code VR Development**: Intuitive drag-and-drop interface
- **Realistic VR Simulations**: High-fidelity 3D environments

## 🎨 Design Features

### Color Scheme
- **Primary Color**: `#073030` (Dark Teal)
- **Secondary Colors**: Emerald (`#10b981`) and Teal (`#14b8a6`)
- Beautiful gradient combinations throughout the site

### Animations & Effects
- **Particles.js Background**: Interactive particle system with 150 particles
- **Framer Motion**: Smooth animations and transitions
- **Gradient Animations**: Dynamic color shifts and glows
- **Hover Effects**: Interactive elements with scale and glow effects
- **Scroll Animations**: Elements animate in as you scroll

## 🏗️ Project Structure

```
xr.io/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles and animations
│   └── components/
│       ├── ParticlesBackground.tsx  # Particles.js integration
│       ├── Navbar.tsx               # Navigation bar
│       ├── Hero.tsx                 # Hero section
│       ├── Features.tsx             # Features showcase
│       ├── About.tsx                # About section with stats
│       ├── CTA.tsx                  # Call-to-action section
│       └── Footer.tsx               # Footer with links
├── public/                     # Static assets
├── package.json
└── README.md
```

## 📦 Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19**: Latest React version
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **TSParticles**: Particle background effects

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd xr.io
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

## 🎯 Key Features

### ParticlesBackground Component
- Configured with 150 particles
- Move speed set to 3
- Interactive on hover and click
- White particles with semi-transparent links

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions

### Performance Optimizations
- Server components where possible
- Client components marked with 'use client'
- Optimized animations with Framer Motion
- Lazy loading of particle engine

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast text for readability

## 🎨 Customization

### Changing Colors

Edit the color values in components to match your brand:
- Primary: `#073030`
- Emerald: `#10b981`, `#059669`
- Teal: `#14b8a6`, `#0d9488`

### Modifying Particles

Adjust settings in `ParticlesBackground.tsx`:
```typescript
number: {
  value: 150,  // Number of particles
},
move: {
  speed: 3,    // Movement speed
}
```

### Adding Sections

Create new components in `src/components/` and import them in `src/app/page.tsx`.

## 📱 Sections Overview

1. **Navbar**: Sticky navigation with scroll effect
2. **Hero**: Main landing section with CTA buttons
3. **Features**: Showcase of 3 core features
4. **About**: Company information with statistics
5. **CTA**: Call-to-action section
6. **Footer**: Links, newsletter, and social media

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

© 2025 CraftXR. All rights reserved.

## 🤝 Contributing

This is the official CraftXR website. For contributions or suggestions, please contact the development team.

---

Built with ❤️ for educators worldwide
