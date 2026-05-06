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

The project is structured as a full-stack application with a robust front-end framework and an embedded Express back-end for API orchestration.

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
- **Form/Interaction**: React Toastify

### Backend
- Dedicated Node/Express server mapped via the `backend` workspace (configured in `package.json` scripts).

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd cognitiveHealth
   ```
2. Install the dependencies for both frontend and backend:
   ```bash
   npm install
   ```
   *(Note: A `postinstall` script automatically runs `npm install` inside the `backend` folder.)*

### Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server for the frontend.
- `npm run dev:backend`: Starts the backend development server.
- `npm run start:backend`: Starts the backend server in production mode.
- `npm run build`: Builds both the frontend and backend for production.
- `npm run build:frontend`: Compiles TypeScript and builds the frontend via Vite.
- `npm run build:backend`: Builds the backend.
- `npm run lint`: Runs ESLint to catch formatting and code quality issues.
- `npm run preview`: Locally previews the production build of the frontend.

## Project Structure

```
cognitiveHealth/
├── public/               # Static assets
├── src/                  # React Frontend source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components
│   ├── routes/           # Routing configuration & guards
│   ├── theme/            # Styling, CSS variables, and colors
│   ├── hooks/            # Custom React hooks
│   └── App.tsx           # Root component
├── backend/              # Node.js backend configuration and APIs
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
