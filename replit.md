# Portfolio Application

## Overview

This is a modern portfolio website built with pure HTML, CSS, and JavaScript. The application features a sophisticated frontend showcasing projects, certifications, experience, and contact information. The site uses only vanilla web technologies without any frameworks or TypeScript.

## System Architecture

### Frontend Architecture
- **Languages**: Pure HTML5, CSS3, and vanilla JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid, Flexbox, and CSS variables for theming
- **Animations**: CSS animations and transitions with Intersection Observer API
- **Responsiveness**: Mobile-first responsive design with CSS media queries
- **No Frameworks**: Built without React, Vue, Angular, or any other frameworks

### Backend Architecture
- **Runtime**: Node.js with Express.js for static file serving
- **Language**: Pure JavaScript (ES5+ compatible)
- **Purpose**: Simple static file server to serve HTML, CSS, and JS files
- **Development**: Direct file serving without build processes

### Data Strategy
- **Storage**: Static JavaScript objects in data.js file
- **Structure**: Portfolio data stored as JavaScript constants
- **No Database**: All data is statically defined in the code

## Key Components

### HTML Structure
1. **Navigation Bar**: Fixed navigation with smooth scrolling and active link highlighting
2. **Home Section**: Hero section with animated typewriter text and floating profile card
3. **Projects Section**: Filterable project gallery with modals for detailed views
4. **Certifications Section**: Grid display of professional certifications
5. **Experience Section**: Timeline-based experience display with animations
6. **Contact Section**: Contact form that redirects to WhatsApp

### JavaScript Features
1. **Scroll Animations**: Bidirectional slide-in animations with Intersection Observer
2. **Project Modal**: Media viewer with image/video support and thumbnail navigation
3. **Contact Form**: WhatsApp integration with phone number 62996635404
4. **Animated Counters**: Number animations on page load
5. **Filter System**: Project category filtering with smooth transitions

### CSS Features
1. **Responsive Design**: Mobile-first approach with media queries
2. **Dark Theme**: Modern dark theme with gradient accents
3. **Animations**: Smooth hover effects and page transitions
4. **Custom Properties**: CSS variables for consistent theming

## Data Flow

1. **Client-Side Rendering**: React components render portfolio data from static configuration
2. **Dynamic Navigation**: Smooth scrolling navigation with active section tracking
3. **Form Handling**: Contact forms use React Hook Form with validation
4. **API Ready**: Backend structure prepared for CRUD operations
5. **State Management**: TanStack Query configured for future API integration

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitive components
- **react-hook-form**: Form handling with validation

### Development Tools
- **Vite**: Fast build tool with HMR
- **TypeScript**: Type safety across the application
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling (conditional)

## Deployment Strategy

### Development
- **Command**: `node server.js` - Starts simple Express static file server
- **Port**: 5000 - Serves HTML, CSS, and JavaScript files
- **No Build Process**: Direct file serving without compilation

### File Structure
- **index.html**: Main HTML file with semantic structure
- **styles.css**: Complete CSS with animations and responsive design
- **script.js**: JavaScript functionality and DOM manipulation
- **data.js**: Static portfolio data and SVG icons
- **server.js**: Simple Express server for static file serving

## Changelog

```
Changelog:
- July 02, 2025. Initial setup with React/TypeScript
- July 02, 2025. Complete conversion to pure HTML, CSS, and JavaScript
  - Removed all TypeScript, React, and framework dependencies
  - Created vanilla JavaScript portfolio with animations
  - Implemented WhatsApp contact form integration (62996635404)
  - Added bidirectional scroll animations and project modals
  - Enhanced typewriter animation speed (2x faster)
  - Created native Node.js HTTP server for static files
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```