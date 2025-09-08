# Blog SPA — React Project

![Blog SPA Banner](./banner.png)

A modern Single Page Application (SPA) built with **React**, **React Router v6**, **Tailwind CSS**, and **Clean Architecture** principles. This project includes **protected routes**, **lazy loading**, **unit and E2E tests**, and is fully **Dockerized** for easy deployment.

---

## 🧩 Features

- Responsive, clean UI built with **Tailwind CSS**
- Routing with **React Router v6**:
  - Nested routes `/blog/:id`
  - Protected route `/admin`
  - 404 page
- Authentication using **AuthContext** and `useAuth` hook
- Data fetching with custom hooks `useFetchPosts` and `useFetchPost`
- **Unit tests** using React Testing Library & Jest
- **E2E tests** using Playwright
- Fully **Dockerized** for local development and deployment
- Lazy loading pages with `React.lazy` and `Suspense`

---

## 📁 Project Structure

/src
/components # Reusable components (PostCard, Navbar, Button)
/pages # SPA pages (Home, BlogList, BlogDetail, Admin, Login, NotFound)
/hooks # Custom hooks (useAuth, useFetchPosts, useFetchPost)
/context # AuthContext provider
/services # Mock API services
/routes # Routing components (AppRoutes, RequireAuth)
/tests # Unit & E2E tests
App.tsx # Main app component
index.tsx # Entry point

---

## 🛠 Tech Stack

- React 18
- React Router v6
- Tailwind CSS
- Jest + React Testing Library
- Playwright
- Docker
- TypeScript

## 📝 Features in Details

- BlogList: Responsive grid, cards with hover effects, loading spinner
- BlogDetail: Centered content, back to blog link, loading animation
- Admin: Protected route, styled like dashboard with cards
- Login: Auth flow with redirect, professional UI
- Lazy loading pages for faster performance

## 👨‍💻 How to Use This Project for Interview

- Show clean architecture and separation of concerns
- Explain routing, protected routes, and lazy loading
- Demonstrate hooks (useAuth, useFetchPosts)
- Show unit tests and E2E tests
- Mention Docker deployment
- Highlight professional UI with Tailwind
