# BlogSPA

A React Single Page Application with TypeScript, context hooks, and API integration.

## Features

- Authentication context (`useAuth`) with login/logout.
- Local posts management (`useLocalPosts`) with add/delete functionality.
- Blog list page fetching posts from an API.
- Custom hooks (`useFetchComments`) for comment fetching.
- Jest unit tests for hooks and components.
- Playwright end-to-end tests for SPA navigation.

## Tech Stack

- React + TypeScript
- React Context for state management
- React Router v6
- Jest + React Testing Library
- Playwright for E2E testing
- Vite (or create-react-app) as build tool
- TailwindCSS (optional)

## Scripts

```bash
# Run unit tests
yarn test

# Run E2E tests
yarn test:e2e

# Start development server
yarn dev

# Build for production
yarn build

## Setup

# Install dependencies
yarn install

# Run dev server
yarn dev
```
