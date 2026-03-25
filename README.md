# Portfolio Admin Panel

A comprehensive admin panel for managing portfolio content including personal information, projects, experience, education, social media links, and more.

## Features

- **Authentication**: Secure login system with JWT token management
- **Content Management**: 
  - Personal information (About section)
  - Projects management
  - Experience and education history
  - Social media links
  - Contact information
  - Profile image management
- **State Management**: Redux for global state management
- **Modern UI**: Semantic UI React components
- **Form Handling**: Formik with Yup validation
- **Routing**: React Router for navigation
- **API Integration**: Axios for HTTP requests with interceptors

## Tech Stack

- **Frontend**: React 18.3.1
- **State Management**: Redux 5.0.1 with React Redux
- **Routing**: React Router DOM 7.13.1
- **UI Framework**: Semantic UI React 2.1.5
- **Form Management**: Formik 2.4.9 with Yup 1.7.1
- **HTTP Client**: Axios 1.13.6
- **Notifications**: React Toastify 11.0.5
- **Build Tool**: Create React App

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API server running on `http://localhost:8080`

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-admin-panel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload when you make changes.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Project Structure

```
src/
├── api/                 # API configuration and interceptors
├── components/          # Reusable components
├── layouts/            # Layout components (AdminDashboard, AdminMenu)
├── pages/              # Page components
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── education/
│   ├── experience/
│   ├── projects/
│   └── social/
├── router/             # Route configurations
├── service/            # API service classes
├── store/              # Redux store configuration
│   ├── actions/
│   ├── reducers/
│   └── initialValues/
└── util/               # Utility functions
```

## Authentication

The application uses JWT-based authentication:

1. **Login**: Users authenticate with username/password
2. **Token Storage**: Access tokens are stored in Redux state and persisted to localStorage
3. **API Interceptors**: Automatic token attachment to requests and handling of 401 responses
4. **Auto-logout**: Users are automatically logged out on token expiration

## API Integration

The application communicates with a REST API running on `http://localhost:8080/api`. All API requests include:

- Automatic JWT token attachment
- Error handling with toast notifications
- 401 response handling with automatic logout

## Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```
REACT_APP_API_URL=http://localhost:8080/api
```