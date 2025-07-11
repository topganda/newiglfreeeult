# India's Got Talent Streaming Platform

A premium dark-themed video streaming website featuring India's Got Talent episodes with cinematic design and smooth animations.

## Features

- 🎬 Premium dark aesthetic with deep red accents
- 📺 Enhanced video player ready for MUX integration
- 🎭 21 India's Got Talent episodes with authentic thumbnails
- 📱 Mobile-responsive design with smooth animations
- 🗄️ PostgreSQL database integration
- ⚡ Built with React, TypeScript, and Express.js

## Deploy to Vercel

### Prerequisites

1. **Database Setup**: Create a PostgreSQL database (recommended: [Neon](https://neon.tech/))
2. **Environment Variables**: You'll need to set `DATABASE_URL` in your Vercel environment

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo)

### Manual Deployment

1. **Clone and Install**
   ```bash
   git clone your-repo
   cd your-repo
   npm install
   ```

2. **Set Environment Variables**
   ```bash
   # In Vercel dashboard or .env.local
   DATABASE_URL=your_postgresql_connection_string
   ```

3. **Build and Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NODE_ENV` | Environment (production/development) | Auto-set |

## Database Schema

The application uses the following tables:
- `episodes`: Stores episode information, thumbnails, and metadata
- `users`: User authentication (ready for future implementation)

## API Endpoints

- `GET /api/episodes` - Get all episodes
- `GET /api/episodes/:id` - Get specific episode
- `POST /api/episodes` - Create new episode
- `GET /api/assets/:filename` - Serve episode thumbnails

## Local Development

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5000`

## Architecture

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Express.js with PostgreSQL
- **Database**: Drizzle ORM
- **Deployment**: Vercel-optimized serverless functions

## Future Enhancements

- [ ] MUX video integration
- [ ] User authentication
- [ ] Video progress tracking
- [ ] Advanced search and filtering
- [ ] Social features and comments