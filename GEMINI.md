# Project Overview

This is a Learning Management System (LMS) built with Next.js, TypeScript, and Prisma. It provides a platform for students, instructors, and admins to manage and interact with courses.

## Technologies

- **Framework:** Next.js
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI, Storybook
- **Authentication:** JWT (JSON Web Tokens)
- **Media Management:** Cloudinary

## Architecture

The application is structured as a standard Next.js project with the following key directories:

- `src/app`: Contains the application's pages and layouts.
- `src/components`: Contains reusable React components.
- `src/lib`: Contains utility functions and Prisma client.
- `prisma`: Contains the database schema and migrations.

The application uses a role-based access control system with the following roles:

- `ADMIN`: Can access the admin dashboard to manage the platform.
- `STUDENT`: Can enroll in courses and access course materials.
- `INSTRUCTOR`: Can create and manage courses.

# Building and Running

## Prerequisites

- Node.js (version 20 or higher)
- npm
- PostgreSQL

## Installation

1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up the database:
   - Create a `.env` file in the root of the project.
   - Add the `DATABASE_URL` environment variable to the `.env` file:
     ```
     DATABASE_URL="postgresql://user:password@host:port/database"
     ```
4. Run the database migrations: `npx prisma migrate dev`
5. Seed the database: `npm run prisma:seed`

## Running the Application

- **Development:** `npm run dev`
- **Production:** `npm run build` and `npm start`

## Testing

The project uses Vitest for testing, including Storybook interaction tests with Playwright.

- **Run Storybook:** `npm run storybook`

# Development Conventions

## Code Style

The project uses ESLint to enforce a consistent code style. Before committing any changes, make sure to run the linter: `npm run lint`

## Git Workflow

- Create a new branch for each feature or bug fix.
- Create a pull request to merge changes into the `main` branch.
- Make sure all tests and linting checks pass before merging.