# Login and Registration Form Backend

## Tech Stacks

### 1. Express.js
   - **Description:** Express.js is a fast, unopinionated, minimalist web framework for Node.js. It simplifies the process of building robust web applications.
   - **Function:** In this project, Express.js is used to handle HTTP requests, define routes, and manage middleware to streamline the development of the backend server.

### 2. Mongoose
   - **Description:** Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level, schema-based abstraction over MongoDB.
   - **Function:** Mongoose is utilized to interact with the MongoDB database. It helps define data models, schema validation, and facilitates the handling of database operations.

### 3. Bcrypt
   - **Description:** Bcrypt is a library for hashing passwords. It uses a one-way cryptographic hash function to securely store passwords.
   - **Function:** In this project, Bcrypt is employed to hash and verify user passwords before storing them in the database, enhancing security by protecting sensitive user information.

### 4. Dotenv
   - **Description:** Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
   - **Function:** Dotenv is used to manage environment variables, allowing the secure storage of sensitive information such as database connection strings or API keys outside of the codebase.

### 5. Cors
   - **Description:** CORS (Cross-Origin Resource Sharing) is a mechanism that allows or restricts requested resources on a web server based on the origin of the requesting client.
   - **Function:** Cors is implemented to handle cross-origin HTTP requests, ensuring that the backend can safely interact with frontend applications hosted on different domains.

### 6. Nodemon
   - **Description:** Nodemon is a utility that monitors for changes in files in a Node.js application and automatically restarts the server when changes are detected.
   - **Function:** Nodemon is used during development to improve the development workflow by automatically restarting the server whenever changes are made to the codebase.

## Project Setup and Execution

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.
4. Create a `.env` file in the root directory and configure environment variables.
5. Run `npm start` to start the server using Nodemon.
6. Access the backend API at the specified endpoint.

created by Ankit (Firebird)
Visit my website: [www.ankitdas98.com](http://www.ankitdas98.com)

