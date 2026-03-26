# Rbay - Redis-Powered E-commerce

Rbay is a practice project designed to explore and implement various e-commerce features using **Redis** as the primary data store and caching layer. This project demonstrates how Redis can be used for session management, real-time bidding, item caching, user tracking, and more.

##  Key Features (Redis Powered)

- **Session Management**: Fast and reliable user sessions stored in Redis.
- **Real-time Bidding**: High-performance bidding system utilizing Redis sorted sets and concurrency control.
- **Page Caching**: Intelligent caching of frequently accessed pages to reduce database load and improve response times.
- **User Activity Tracking**: Tracking item views and user likes using Redis data structures.
- **Background Jobs**: Asynchronous task processing for various e-commerce operations.
- **Seeding & Simulation**: Includes tools to seed the database with mock data and simulate user behavior.

##  Tech Stack

- **Frontend/Backend**: [SvelteKit](https://kit.svelte.dev/)
- **Database/Cache**: [Redis](https://redis.io/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Utilities**: `ioredis`, `faker-js`, `luxon`

## Prerequisites

- Node.js (v16.x or later recommended)
- A running Redis instance (Local or Cloud)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd redis-e-commerce
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory based on the example below:
    ```bash
    cp .env.example .env
    ```

## Environment Variables Example

Ensure your `.env` file contains the following variables to connect to your Redis instance:

```env
REDIS_HOST=your-redis-host.cloud.redislabs.com
REDIS_PORT=12345
REDIS_PW=your-secure-password
```

## Available Scripts

- `npm run dev`: Starts the SvelteKit development server.
- `npm run seed`: Seeds the Redis database with initial mock data (Users, Items, Bids).
- `npm run worker`: Starts the background job worker.
- `npm run cli`: Runs the interactive CLI tool for managing the project.
- `npm run sandbox`: Runs a playground script for testing Redis operations.

## Project Structure

- `/src/services/queries`: Contains all Redis query logic (Sessions, Bids, Items, etc.).
- `/src/services/redis`: Redis client configuration and connection logic.
- `/seeds`: Scripts for populating the database.
- `/worker`: Background process implementation.
- `/cli`: Command-line management tools.
- `/sandbox`: Area for experimental Redis code.

---

*This project is built for educational purposes to master Redis integration in modern web applications.*
