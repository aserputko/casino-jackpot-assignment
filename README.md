# Casino Jackpot Assignment

A simple slot machine game implementation where the house always wins! This project demonstrates a full-stack web application with a React frontend, NestJS backend, and PostgreSQL database.

## 🎰 About the Game

Players start with 10 credits and can roll three slots by spending 1 credit per roll. The game implements business logic to ensure the house edge is maintained while providing an engaging user experience.

### Features

- **Game Session Management**: Server-side session state management
- **Slot Machine**: 3-slot, 1-row slot machine interface
- **Credit System**: Players start with 10 credits, 1 credit per roll
- **Cash Out**: Players can cash out remaining credits anytime
- **Real-time Updates**: Live credit and game state synchronization

## 🏗️ Architecture

### Tech Stack

- **Frontend**: React.js, TypeScript, TailwindCSS, Shadcn/ui, Vite
- **Backend**: NestJS, TypeScript, Swagger/OpenAPI
- **Database**: PostgreSQL with Prisma ORM
- **Infrastructure**: Docker, NPM Workspaces (Monorepo)

### Project Structure

```
├── packages/
│   ├── backend/          # NestJS API server
│   │   ├── src/
│   │   ├── prisma/       # Database schema and migrations
│   │   └── test/
│   └── frontend/         # React application
│       ├── src/
│       └── components/
├── docs/                 # Architecture documentation
└── docker-compose.yml    # Database container
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Docker** and **Docker Compose**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aserputko/casino-jackpot-assignment.git
   cd casino-jackpot-assignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the database**

   ```bash
   npm run docker:up
   ```

4. **Run database migrations**

   ```bash
   npm run prisma:migrate
   ```

5. **Generate Prisma client**
   ```bash
   npm run prisma:generate
   ```

## 🎮 Running the Application

### Development Mode

Start all services in development mode:

```bash
# Terminal 1: Start backend (API server)
npm run start:backend

# Terminal 2: Start frontend (React app)
npm run start:frontend
```

The applications will be available at:

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **API Documentation**: http://localhost:3000/docs

### Individual Services

**Backend only:**

```bash
cd packages/backend
npm run start:dev
```

**Frontend only:**

```bash
cd packages/frontend
npm run dev
```

**Database only:**

```bash
npm run docker:up
```

### Production Build

```bash
# Build both frontend and backend
npm run build

# Or build individually
npm run build:backend
npm run build:frontend

# Preview frontend production build
npm run preview:frontend
```

## 🗄️ Database Management

### Docker Commands

```bash
# Start PostgreSQL container
npm run docker:up

# Stop containers
npm run docker:down

# View container logs
npm run docker:logs

# Check container status
npm run docker:ps
```

### Prisma Commands

```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Open Prisma Studio (database GUI)
npm run prisma:studio
```

### Database Configuration

The PostgreSQL database runs in Docker with default configuration:

- **Host**: localhost
- **Port**: 5432
- **Database**: casino_jackpot
- **Username**: postgres
- **Password**: postgres

## 🔧 Development

### Code Quality

```bash
# Run linting for both packages
npm run lint

# Run linting individually
npm run lint:backend
npm run lint:frontend
```

### API Generation

The frontend uses auto-generated API client from the backend's OpenAPI specification:

```bash
# Generate API client for frontend
npm run generate:api:frontend
```

### Testing

```bash
# Backend tests
cd packages/backend
npm test
npm run test:e2e

# Frontend tests (if configured)
cd packages/frontend
npm test
```

## 📖 Documentation

- [Architecture Drivers](docs/1_architecture_drivers.md) - Requirements and user stories
- [Architecture Solution](docs/2_architecture_solution.md) - Technical solution and diagrams

## 🐳 Docker Support

The project includes Docker Compose configuration for the PostgreSQL database. The database container includes:

- Health checks
- Persistent data volumes
- Environment variable configuration
- Auto-restart policies

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Run linting before committing: `npm run lint`
3. Ensure all tests pass
4. Update documentation as needed
