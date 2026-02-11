# 🚀 Quick Setup Instructions

Node.js is not installed on your system. Here's how to get started:

## Step 1: Install Node.js

Visit [nodejs.org](https://nodejs.org) and download the LTS version for macOS.

- Download the macOS installer
- Run the installer and follow the prompts
- Restart your terminal when complete

## Step 2: Verify Installation

Open a new terminal and run:

```bash
node --version
npm --version
```

You should see version numbers for both.

## Step 3: Install Dependencies

In the project directory, run:

```bash
npm install
```

This will install React, Tailwind, Vite, and all other dependencies.

## Step 4: Start Development Server

```bash
npm run dev
```

The website will automatically open at http://localhost:5173

## Step 5: Edit Content

Open `src/App.jsx` and edit the `CONTENT` object at the top to customize:
- Business information (phone, hours, etc.)
- Hero headline and description
- Services
- About section
- Contact information

Save the file and the website will auto-refresh!

## Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder ready for deployment.

---

That's it! The entire website structure is ready. Just install Node.js and run `npm install` to get started.
