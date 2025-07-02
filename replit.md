# Portfolio Application

## Overview

This is a modern portfolio application built with React, TypeScript, and Express.js. The application features a sophisticated frontend showcasing projects, certifications, experience, and contact information, with a backend API structure ready for development. The app uses a monorepo structure with shared schemas and includes modern UI components from shadcn/ui.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library based on Radix UI primitives
- **State Management**: React hooks and TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **Development**: Hot reload with Vite integration

### Database Strategy
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema migrations
- **Schema**: Shared TypeScript schemas with Zod validation

## Key Components

### Frontend Components
1. **Portfolio Section**: Main portfolio showcase with navigation
2. **Projects Section**: Filterable project gallery with categories
3. **Certifications Section**: Grid display of professional certifications
4. **Experience Section**: Timeline-based experience display
5. **Contact Section**: Contact form with validation and contact information
6. **Navigation**: Responsive navigation with smooth scrolling

### Backend Infrastructure
1. **Storage Interface**: Abstracted storage layer with in-memory implementation
2. **Route Registration**: Centralized API route management
3. **Error Handling**: Global error handling middleware
4. **Development Tools**: Request logging and Vite integration

### Shared Resources
1. **Schema Definitions**: Type-safe database schemas with Zod validation
2. **Type Exports**: Shared TypeScript types between frontend and backend

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
- **Command**: `npm run dev` - Starts development server with hot reload
- **Port**: Vite dev server with Express API backend
- **Database**: Uses DATABASE_URL environment variable

### Production Build
- **Frontend**: `vite build` - Optimized React build to `dist/public`
- **Backend**: `esbuild` - Bundled Express server to `dist/index.js`
- **Start**: `npm start` - Runs production server

### Database Management
- **Schema Push**: `npm run db:push` - Applies schema changes to database
- **Migrations**: Generated in `./migrations` directory
- **Connection**: Requires `DATABASE_URL` environment variable

## Changelog

```
Changelog:
- July 02, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```