# Pranay Begwani - Portfolio Website

A modern React-based portfolio website showcasing professional experience, projects, education, and leadership roles.

## Features

- **React Components**: Modular component structure for easy maintenance
- **Responsive Design**: Mobile-friendly layout with sidebar navigation
- **Project Showcase**: Interactive project cards with modal details
- **Work Experience**: Detailed experience items with location pins
- **Education**: Display of dual degrees from Georgia Tech
- **Contact Section**: Easy-to-access contact information

## Project Structure

```
├── public/
│   ├── index.html          # Main HTML file
│   └── [images]            # Image assets
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx     # Navigation sidebar
│   │   ├── ExperienceItem.jsx  # Work experience component
│   │   ├── ProjectCard.jsx      # Project card component
│   │   ├── Education.jsx        # Education component
│   │   └── Contact.jsx          # Contact section
│   ├── styles/
│   │   └── index.css       # Main stylesheet
│   ├── App.jsx             # Main app component
│   └── index.js            # React entry point
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

To build the app for production (e.g., for GitHub Pages):

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploying to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Copy the contents of the `build` folder to the root directory (or configure GitHub Pages to serve from the `build` folder)

3. Commit and push:
```bash
git add .
git commit -m "Deploy React portfolio"
git push
```

## Components

### Sidebar
Navigation sidebar with profile image, social links, and contact email.

### ExperienceItem
Reusable component for displaying work experience and leadership roles with:
- Company logo
- Role title
- Company name and location (with location pin icon)
- Details (bullet points or paragraph)

### ProjectCard
Small card component for projects that opens a modal with:
- Project title
- Tech stack
- Project description

### Education
Component displaying education information with:
- School logo
- School name and location
- Multiple degrees (supports dual degrees)

### Contact
Contact section at the bottom with:
- Email
- Social media links (LinkedIn, GitHub, Twitter, Medium)

## Technologies Used

- React 18
- CSS3 (with CSS Variables)
- Font Awesome Icons
