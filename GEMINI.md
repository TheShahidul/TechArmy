# Project Overview

This is a React.js application built with TypeScript and Vite. It utilizes React Router DOM for navigation, Redux Toolkit for state management, and Tailwind CSS for styling. The project appears to be an e-commerce or product display application, featuring home, product, category, and all products pages.

## Technologies Used

*   **Framework:** React.js
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Routing:** React Router DOM
*   **State Management:** Redux Toolkit
*   **Styling:** Tailwind CSS
*   **UI Components:** Swiper, React Icons

## Building and Running

To get started with this project, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run in Development Mode:**
    ```bash
    npm run dev
    ```
    This will start the development server, and you can view the application in your browser.

3.  **Build for Production:**
    ```bash
    npm run build
    ```
    This command compiles the TypeScript code and bundles the application for production deployment.

4.  **Preview Production Build:**
    ```bash
    npm run preview
    ```
    This command serves the production build locally for testing.

5.  **Linting:**
    ```bash
    npm run lint
    ```
    This command runs ESLint to check for code quality and style issues.

## Development Conventions

*   **Code Style:** Enforced using ESLint, as configured in `eslint.config.js`.
*   **TypeScript:** The project uses TypeScript for type safety, with configurations in `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`.
*   **Styling:** Tailwind CSS is used for utility-first styling, configured in `tailwind.config.js` and `postcss.config.js`.
*   **Component Structure:** Components are organized within the `src/components` directory, pages in `src/pages`, and data in `src/data`.
*   **State Management:** Redux Toolkit is used for managing application state, with slices defined in `src/store/slices`.
