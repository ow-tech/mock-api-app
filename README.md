# Mock API App - Local Setup Guide

## Prerequisites
Ensure you have the following installed before proceeding:
- **Node.js** v18.20.6 (for compatibility with dependencies)
- **npm** (comes with Node.js)
- A code editor of your choice (e.g., VS Code, WebStorm)

## Installation Steps

1. **Clone the Repository**
   ```sh
   git clone https://github.com/ow-tech/mock-api-app.git
   ```

2. **Navigate to the Project Directory**
   ```sh
   cd mock-api-app
   ```

3. **Open in Your Preferred Code Editor**
   
   Example: If using VS Code, run:
   ```sh
   code .
   ```

4. **Install Dependencies**
   While in the root directory, open the terminal and run:
   ```sh
   npm install
   ```

## Running the Application

To start the development server, run:
```sh
npm start
```

The application should now be running at `http://localhost:3000/`.

## Technologies Used
- **React** v18.2.0
- **Tailwind CSS** v3.4.17
- **TypeScript**
- **Node.js** v18.20.6

## Application Features and Requirements

### Setup:
- Created using **Create React App** with TypeScript.
- Integrated **Tailwind CSS** for styling.

### Mock API:
- Uses **JSONPlaceholder** (https://jsonplaceholder.typicode.com/) for simulating server interactions.
- Implements endpoints for fetching, creating, updating, and deleting items.

### Component Structure:
- Displays a list of items.
- Each item contains a **title** and **description**.
- Includes a form for adding new items.

### Functionality:
- Fetches and displays item lists from the mock API.
- Supports adding new items and updating the UI accordingly.
- Allows users to delete items.
- Implements basic error handling for API calls.
- - Editing existing item titles or descriptions.
- sorting for the item list.

### Styling:
- Uses **Tailwind CSS** for styling components.
- Ensures a **responsive design** for both desktop and mobile devices.

### Deployment:
- The application is deployed on **Vercel**
- Deployed Application URL: **[https://mock-api-app-git-develop-ow-techs-projects.vercel.app]**






## Additional Notes
- If you encounter any issues, ensure you have the correct Node.js version installed.
- Tailwind CSS version 3.4.17 is used for stability.
- Modify the `package.json` scripts if needed for custom configurations.

Enjoy developing! 🚀

