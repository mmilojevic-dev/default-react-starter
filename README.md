# Default React Starter

This is `default-react-starter`, a boilerplate for building scalable and efficient web applications using React, Redux Toolkit, React Query, and Tailwind CSS. Designed to offer a robust starting point for both new projects and seasoned developers, it integrates modern development tools and practices.

## Features

- **React**: Leverages the latest capabilities of React, including hooks and the new rendering engine, to build dynamic and efficient user interfaces.
- **TypeScript**: Provides strong typing to enhance code quality and readability, helping to prevent runtime errors and making the codebase easier to refactor and understand.
- **Vite**: Utilizes Vite for fast development and optimized builds, offering out-of-the-box support for TypeScript, JSX, CSS, and more, with instant server start and HMR (Hot Module Replacement).
- **Tailwind CSS**: Employs Tailwind CSS for rapid UI development with utility-first styling, allowing developers to build custom designs without leaving your HTML.
- **Zustand**: Implements Zustand for efficient state management, simplifying state logic and reducing boilerplate code.
- **React Query**: Manages and synchronizes asynchronous data with the server state, optimizing data fetching, caching, and synchronization.
- **ESLint and Prettier**: Ensures code consistency and cleanliness with automated linting and formatting to help maintain code quality standards.
- **Axios**: Utilizes Axios for making HTTP requests to fetch or save data, an essential part of interacting with external APIs and backend.
- **shadCN-UI**: Integrates ShadCN-UI components on top of RadixUI to provide accessible and customizable low-level UI primitives, ideal for building high-quality design systems and web applications. Enhanced with shadCN-UI, this combination offers additional theming and extended styling capabilities, aligning with the design system's specific needs and aesthetics.
- **React Hook Form**: Incorporates React Hook Form to manage form state and validation in React applications, enhancing form handling with minimal re-renders.
- **Zod**: Employs Zod to perform schema validation for TypeScript, ensuring data integrity by validating data shapes at runtime, ideal for use with TypeScript.


## Getting Started

### Prerequisites

- Node.js version 18 or later.
- Yarn or npm installed.
- Docker installed and running.

### Installation

Clone the repository and install dependencies.

```bash
git clone https://github.com/mmilojevic-dev/default-react-starter.git
cd default-react-starter
yarn install
```

### Configuration

Copy the `.env.example` file to a new file named `.env` and update the environment variables according to your local setup.

Edit the `.env` file with the appropriate values for:

- `REACT_APP_CLIENT_URL` - The URL where your client is hosted.
- `REACT_APP_API_URL` - The base URL for your API.

### Development

To start the development server, run:

```bash
yarn dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without needing to restart the server.

### Building for Production

To create a production build, use:

```bash
yarn build
```

This will bundle your application with Vite and optimize it for the best performance. The output will be stored in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
yarn preview
```

### Running with Docker

To containerize the application, use the following commands:

```bash
docker build -t news-aggregator .
docker run -p 8080:80 news-aggregator
```

This will build and run the Docker container, making the app accessible at http://localhost:3000.

### Available Scripts

In the project directory, you can run:

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the app for production.
- `yarn preview`: Serves the built app for previewing before deployment.
- `yarn lint`: Lints and checks for code errors.
- `yarn lint:fix`: Automatically fixes linting issues found by ESLint.
- `yarn types`: Runs TypeScript to check for type errors.

###  Architectural Overview

#### Component-Based Architecture
- React Framework: At the core of the application is React, which encourages a component-based architecture. This structure enables developers to build reusable UI components that manage  their state, making the code more readable and easier to debug.
- TypeScript: TypeScript is used to enhance the development experience with static type checking. This ensures that components and utilities are used correctly, reducing runtime errors and improving code quality.

#### State Management
- Zustand: This project uses Zustand for in-app-memory state management, which simplifies state logic and reduces boilerplate code. Zustand's API is minimalistic and allows for efficient and straightforward state management.
- React Query: For server state management, React Query is employed to handle data fetching, caching, and synchronization. This optimizes performance by reducing the number of requests needed and manages server state in the UI effectively.

#### Styling and Design System
- Tailwind CSS: Tailwind CSS supports a utility-first approach that helps in building custom designs quickly without leaving the HTML. It's configured to purge unused styles in production, ensuring that the bundle size is minimized.
- CSS Variables: Defined in globals.css, CSS variables facilitate theming and allow for dynamic styling changes. This supports light and dark modes by adjusting variables based on user preferences or system settings.
- shadCN-UI and Radix UI: These libraries provide low-level UI primitives that are styled using Tailwind CSS and CSS variables, ensuring accessibility and customizability.

#### Routing and Navigation
- React Router DOM: The application uses React Router for declarative routing. This setup enables dynamic client-side routing, making the application feel more fluid and responsive. Routes are configured to handle public and protected paths, aiding in the implementation of authentication and authorization.

#### Development Practices
- Modular Code: The application is structured in a modular fashion, where each feature or component is isolated in its directory with its related assets. This modularization helps in managing large codebases and makes the application scalable.
- Environment Configuration: Environment variables are used to configure application settings across different environments, making it easy to deploy and scale the application without changes to the codebase.

#### Testing and Quality Assurance
- ESLint and Prettier: These tools are integrated to enforce coding standards and styles, ensuring that all developers in a team can write code that is consistent and clean.
- Unit and Integration Testing: While not handled in initial setup, the architectural approach supports the integration of testing frameworks like Jest and React Testing Library to facilitate unit and integration testing, ensuring components function as expected.
