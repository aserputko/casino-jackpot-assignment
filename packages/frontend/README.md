# Frontend

React application built with Vite and TypeScript.

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
frontend/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server (default port: 5173, configurable via PORT env variable)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file in the `packages/frontend` directory to configure the application:

```bash
# Frontend Server Port
PORT=5173
```

The PORT value can be overridden by setting it in the `.env` file.
