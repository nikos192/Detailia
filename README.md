# Detailia GC - Professional Mobile Car Detailing Website

Modern, premium single-page website for Detailia GC - a mobile car detailing business on the Gold Coast & Brisbane.

## 🎯 Features

- **Modern & Premium Design** - Clean, high-end aesthetic with smooth animations
- **Mobile Responsive** - Perfect on all devices from mobile to desktop
- **Easy Content Management** - All business information stored in a single object for easy updates
- **Fast Performance** - Built with React and optimized with Vite
- **Smooth Scrolling** - Native HTML5 smooth scroll behavior
- **Quote Request Form** - Integrated contact form for customer inquiries
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessible** - WCAG compliant with proper contrast ratios

## 📋 Project Structure

```
/
├── index.html                 # HTML entry point
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main application component (EDIT HERE)
│   └── index.css             # Global styles
└── .gitignore                # Git ignore rules
```

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

1. Start the development server:
```bash
npm run dev
```

The site will open automatically at `http://localhost:5173`

### Build

1. Build for production:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

## 📝 Updating Content

**All business content is stored in the `CONTENT` object at the top of `src/App.jsx`.**

### To Update Business Information:

Open `src/App.jsx` and find the `CONTENT` object. Edit these fields:

```javascript
const CONTENT = {
  business: {
    name: 'Detailia GC',
    tagline: 'Professional Interior & Exterior Detailing',
    phone: '0478 451 171',
    instagram: '@detailiagc',
    hours: '9:00 AM - 5:00 PM Daily',
    serviceArea: 'Mobile Service - Gold Coast & Brisbane',
    email: 'hello@detailia.com.au',
  },
  // ... more sections below
}
```

### Common Updates:

**Update Phone Number:**
```javascript
phone: '0478 451 171',  // Change this number
```

**Update Service Area:**
```javascript
serviceArea: 'Mobile Service - Gold Coast & Brisbane',  // Change this
```

**Update Hours:**
```javascript
hours: '9:00 AM - 5:00 PM Daily',  // Change this
```

**Update Hero Headline:**
```javascript
hero: {
  headline: 'Professional Interior & Exterior Detailing',  // Change this
  // ...
}
```

**Update Trust Bar Items:**
```javascript
trustBar: [
  { text: 'Mobile Service', icon: '🚗' },
  { text: 'Premium Products', icon: '✨' },
  // ... Add/remove/edit items here
]
```

**Update Services:**
```javascript
services: [
  {
    title: 'Mobile Detailing',  // Service name
    description: 'Comprehensive interior and exterior...',  // Service description
    icon: '🚗',  // Emoji icon
  },
  // ... Add more services or edit existing ones
]
```

**Update Social Media & Contact:**
```javascript
business: {
  instagram: '@detailiagc',  // Change to your Instagram handle
  email: 'hello@detailia.com.au',  // Change to your email
  // ...
}
```

## 🎨 Design & Colors

The website uses a premium color scheme:

- **Primary**: Deep charcoal (#1a1a1a) - Dark backgrounds
- **Accent**: Electric blue (#0ea5e9) - Buttons and highlights
- **Neutrals**: White and light slate - Clean backgrounds
- **Shadows**: Subtle to elevated - Professional depth

To change colors, edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#1a1a1a',  // Main dark color
  secondary: '#0ea5e9',  // Accent/blue color
  accent: '#0ea5e9',  // Button color
  light: '#f8fafc',  // Light background
  border: '#e2e8f0',  // Border color
}
```

## 📞 Contact Form Handling

The contact form is fully functional but currently logs data to the browser console. To integrate with a real backend:

1. Open `src/App.jsx`
2. Find the `handleSubmit` function in the `Contact` component
3. Replace the `console.log` with your backend API call:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  // Send data to your backend
  const response = await fetch('your-api-endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  // Handle response...
}
```

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first design approach
- Tailwind's responsive prefixes (sm, md, lg, xl)
- Optimized touch targets for mobile
- Full menu collapsed on mobile devices

## 🔍 SEO

Meta tags and title are set in `index.html`. Update for your needs:

```html
<title>Detailia GC - Professional Mobile Car Detailing Gold Coast</title>
<meta name="description" content="Your description here..." />
```

## 🛠️ Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite 5** - Next generation frontend build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent SVG icons

## 📦 Dependencies

- `react` - React library
- `react-dom` - React DOM library
- `lucide-react` - Icon library (optional, can be removed)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository to Vercel
3. Deploy with zero configuration

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Static Hosting

Build the site and upload the `dist` folder to any static host:
```bash
npm run build
# Upload the 'dist' folder to your host
```

## 📧 Support

For questions about the design or functionality, refer to the code comments in `src/App.jsx`.

---

**Last Updated:** February 2026
**Built for:** Detailia GC - Professional Mobile Car Detailing
