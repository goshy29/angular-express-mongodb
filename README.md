# Angular Project + Express.js + MongoDB
## Project Description:
This Full-Stack Project which I called Cake World with Angular, Express.js and MongoDB is a web application that combines frontend built with Angular and backend using Express.js and MongoDB. Тhe purpose of this application is to share a recipe of your favorite cake, which recipe will be posted at the Blog from the Menu and saved in MongoDB. Information at the Blog includes a title, user name, email and recipe. The application allows you to delete someones blog. Also you will find Cakes from the menu where you can read some interesting articles about desserts which are in-memory loaded.

## Features:
1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
2. Full-Stack Architecture: Combines a Angular frontend with an Express.js backend and MongoDB database.
3. Blog: Allows users to post recipes with title, user details, and the recipe itself. Provides functionality to delete blog posts.
4. In-Memory Articles: Displays articles about desserts that are in-memory loaded for quick access.

## Technologies Used:
1. Frontend: Angular, HTML, CSS.
2. Backend: Node.js, Express.js.
3. Database: MongoDB, Mongoose.
4. State Management: Angular Services.
5. Routing: Angular Router.
6. Version Control: Git, GitHub.

## Project Structure:
Frontend: Contains all Angular components and frontend logic.
  1. Components: Components(some of them reusable) for different sections of the project, including Menu.
  2. Pages: Separate pages for Home, Cakes, Blog and Share Recipe.

Backend: Contains all Express.js server-side code and database logic.
  1. Routes: Define API endpoints for fetching and manipulating project data.
  2. Controllers: Handle the logic for each API endpoint.
  3. Models: Define the MongoDB schemas using Mongoose.
  4. Config: Configuration files, including database connection settings.

## To run this project locally, follow these steps:
1. GitHub: https://github.com/goshy29/angular-express-mongodb
2. Clone the repository: git clone https://github.com/goshy29/angular-express-mongodb.git
3. Open the project with your code editor(VS Code) and open TWO New Terminals
4. At the First Terminal to install Frontend dependencies, in the root directory run: npm install       
5. At the Second Terminal to install Backend dependencies, type "cd backend" then run: npm install   
6. To start the Frontend development server, in the root directory run: npm start    
7. To start the Backend server, in the backend directory run: npm start
8. Open the application in your browser: http://localhost:4200

