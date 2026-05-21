# User Management Frontend

This is the client-side component of the User Management App, built with React and Vite.

## Technologies & Packages Installed

- **react** & **react-dom**: Core React libraries.
- **vite**: Next-generation frontend tooling for fast development.
- **react-router**: Declarative routing for React.
- **react-hook-form**: Performant, flexible and extensible forms with easy-to-use validation.
- **react-toastify**: Add notifications to your app with ease.
- **tailwindcss** & **@tailwindcss/vite**: Utility-first CSS framework for styling.
- **eslint**: For identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Installation Steps

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Development

The frontend is configured to connect to the backend at `http://localhost:4000` by default. Ensure the backend is running before testing API-related features.

## Main Components

- `AddUser`: Form to create new user records.
- `UsersList`: Displays a list of all registered users.
- `User`: Detailed view for a specific user.
- `RootLayout`: Common layout containing Header and Footer.

