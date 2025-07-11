# replit.md

## Overview

This is a premium dark-themed video streaming application featuring "India's Got Talent" episodes. Built with a modern full-stack architecture, it showcases a Netflix-style interface with elegant animations, custom episode thumbnails, and a sophisticated video player design. The application uses React with TypeScript for the frontend, Express.js for the backend, PostgreSQL for data persistence, and includes a comprehensive UI component library based on shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Animation**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with endpoints for episodes management
- **Data Storage**: In-memory storage with interface for future database integration
- **Middleware**: Custom logging, JSON parsing, and error handling

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Separate shared schema definitions for users and episodes
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: PostgreSQL database with automatic initialization
- **Storage**: DatabaseStorage class replaces MemStorage for persistent data

## Key Components

### Frontend Components
1. **Layout Components**
   - Header: Fixed navigation with branding
   - Footer: Links and branding information
   - ScrollProgressIndicator: Visual scroll progress

2. **Content Components**
   - VideoPlayer: Placeholder for MUX video integration
   - EpisodeGrid: Grid layout for episode browsing
   - AdBanner: Advertisement placement component

3. **UI Components**
   - Comprehensive shadcn/ui library (40+ components)
   - Custom styled components with dark theme
   - Responsive design patterns

### Backend Components
1. **Storage Layer**
   - IStorage interface for data abstraction
   - MemStorage: In-memory implementation with sample data
   - 20+ pre-populated sample episodes

2. **API Routes**
   - GET /api/episodes: Retrieve all episodes
   - GET /api/episodes/:id: Retrieve single episode
   - POST /api/episodes: Create new episode
   - Comprehensive error handling and validation

3. **Schema Definitions**
   - User schema: id, username, password
   - Episode schema: id, title, description, episodeNumber, duration, rating, thumbnailUrl, videoUrl
   - Zod validation schemas for type safety

## Data Flow

1. **Client Request**: Frontend makes API requests using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Data Validation**: Zod schemas validate incoming data
4. **Response**: JSON responses sent back to client
5. **State Management**: React Query manages caching and synchronization
6. **UI Updates**: Components re-render based on updated data

## External Dependencies

### Frontend Dependencies
- **UI/UX**: Radix UI primitives, Framer Motion, Embla Carousel
- **Utilities**: date-fns, clsx, class-variance-authority
- **Development**: Vite, TypeScript, Tailwind CSS

### Backend Dependencies
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod, drizzle-zod
- **Session**: connect-pg-simple (configured for future use)

### Development Tools
- **Build**: esbuild for server bundling
- **Development**: tsx for TypeScript execution
- **Database**: drizzle-kit for migrations
- **Replit**: Custom plugins for development environment

## Deployment Strategy

### Development Environment
- **Server**: Development server runs on Node.js with hot reloading
- **Frontend**: Vite dev server with HMR (Hot Module Replacement)
- **Database**: Configured for Neon Database but using in-memory storage

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Single Node.js process serves both API and static files

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Session**: PostgreSQL session store configured
- **Static Assets**: Served from `dist/public` in production

### Key Features Ready for Implementation
1. **Video Streaming**: MUX integration placeholder in VideoPlayer component
2. **Database Migration**: Drizzle schema ready for PostgreSQL deployment
3. **User Authentication**: Schema and session management configured
4. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
5. **SEO Optimization**: Proper meta tags and semantic HTML structure