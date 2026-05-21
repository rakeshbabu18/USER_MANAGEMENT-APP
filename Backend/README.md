# User Management Backend

This is the server-side component of the User Management App. It provides APIs to manage user data in a MongoDB database.

## Technologies & Packages Installed

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **nodemon** (Dev Dependency): Tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Installation Steps

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

   ```

3. Run the server:
   - For production/standard run:
     ```bash
     npm start
     ```
   - For development with auto-restart:
     ```bash
     npx nodemon server.js
     ```

## API Endpoints

- `GET /users-api/users`: Get all users.
- `POST /users-api/user`: Create a new user.
- `GET /users-api/user/:id`: Get a specific user by ID.
- `PUT /users-api/user/:id`: Update a user.
- `DELETE /users-api/user/:id`: Delete a user.
