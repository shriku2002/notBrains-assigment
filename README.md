# notBrains Landing Page

A modern and responsive landing page for a SaaS product called "notBrains" built with React.

## Features

- Responsive design that works on mobile, tablet, and desktop viewports
- Modern UI with smooth animations and transitions
- Modular component structure for easy maintenance
- Reusable UI components like buttons, cards, etc.
- Clean and semantic HTML structure
- CSS with variables for consistent styling across components

## Project Structure

```
src/
├── components/
│   ├── Header.jsx        - Navigation bar component
│   ├── Hero.jsx          - Hero/banner section component
│   ├── TrustedBy.jsx     - Trusted companies section
│   ├── FeatureHighlights.jsx - Key features with illustrations
│   ├── FeaturesGrid.jsx  - Feature grid section
│   ├── Team.jsx          - Team members grid
│   ├── Blog.jsx          - Blog/articles section
│   ├── Footer.jsx        - Footer with links and information
│   └── Button.jsx        - Reusable button component
├── App.jsx               - Main application component
└── main.jsx              - Application entry point
```

## How to Run the Project

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173` (or the URL shown in your terminal)

## Build for Production

To build the project for production, run:

```bash
npm run build
```

This will generate optimized files in the `dist` directory that can be deployed to a web server.

## Technologies Used

- React.js for building user interfaces
- CSS for styling
- React Icons for iconography
- Vite for build tooling and development server