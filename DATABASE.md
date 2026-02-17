# Database Setup

This application uses PostgreSQL with Prisma ORM for data persistence.

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the root directory with your database connection string:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require"
```

The DATABASE_URL has been provided for the Neon PostgreSQL database.

### 2. Push Database Schema

Push the Prisma schema to your database:

```bash
npm run db:push
```

This will create the necessary tables in your database.

### 3. Seed the Database (Optional)

To populate the database with sample tweets:

```bash
npm run db:seed
```

### 4. Start the Development Server

```bash
npm run dev
```

## Database Schema

The application uses a single `Tweet` table with the following fields:

- `id` (String, Primary Key) - Unique identifier
- `author` (String) - Tweet author name
- `handle` (String) - Twitter handle
- `content` (String) - Tweet content
- `createdAt` (DateTime) - Creation timestamp
- `comments` (Int) - Number of comments
- `retweets` (Int) - Number of retweets
- `likes` (Int) - Number of likes

## API Endpoints

### GET /api/tweets
Fetches all tweets ordered by creation date (newest first).

### POST /api/tweets
Creates a new tweet.

**Body:**
```json
{
  "content": "Tweet content",
  "author": "Author Name",
  "handle": "username"
}
```

### PATCH /api/tweets/:id
Updates a tweet's like count.

**Body:**
```json
{
  "likes": 10
}
```

## Deployment Notes

When deploying to production:

1. Ensure your DATABASE_URL environment variable is set in your hosting platform
2. Run `npm run db:push` to set up the database schema
3. Optionally run `npm run db:seed` to populate with sample data
4. Build and deploy your application as usual

The database connection is managed through Prisma, which handles connection pooling and query optimization automatically.
