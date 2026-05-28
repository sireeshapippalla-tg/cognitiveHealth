# Cognitive Health Website

Welcome to the **Cognitive Health Website** project repository. This is a modern web application built for healthcare revenue cycle management (RCM) and financial solutions.

## Overview

The Cognitive Health Website serves as the main digital platform for offering automated and efficient RCM services, including:

- **Payment Posting**
- **Lockbox Analysis**
- **Contract Analysis**
- **Eligibility Discovery**
- **Denial Workflow**
- **Pre-Bill Services**
- **RCM Readiness**

The project is a standalone front-end application designed to connect to an external API service.

## Tech Stack

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **State Management**: Redux Toolkit & React Redux
- **Routing**: React Router v7
- **Styling & UI**: Material-UI (MUI), Emotion, custom CSS variables
- **Animations**: Framer Motion
- **Utilities**: Axios, JWT Decode, JSPDF, HTML2Canvas
- **Testing**: Vitest, React Testing Library, JSDOM
- **Form/Interaction**: React Toastify

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd cognitiveHealth
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and builds the app for production.
- `npm run lint`: Runs ESLint to catch formatting and code quality issues.
- `npm run preview`: Locally previews the production build.
- `npx vitest run`: Runs the automated test suite.

## Project Structure

```
cognitiveHealth/
├── public/               # Static assets and security headers
├── src/                  # React Frontend source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components
│   ├── routes/           # Routing configuration & guards
│   ├── theme/            # Styling, CSS variables, and colors
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Testing and logic utilities
│   └── App.tsx           # Root component
├── package.json          # Project dependencies and scripts
└── vite.config.ts        # Vite configuration
```

## Features

- **Responsive Design**: Ensuring a seamless experience across desktop, tablet, and mobile interfaces.
- **Authentication Guards**: Integrated protected routes and auth guards to secure specific areas of the application.
- **HubSpot Tracking**: Integrated HubSpot capabilities for tracking user events and analytics.
- **PDF Generation**: Capable of converting specific web components to PDFs using HTML2Canvas and JSPDF.

## License
Private repository. All rights reserved.
