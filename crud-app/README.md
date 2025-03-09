# CRUD Application

## Overview
This CRUD application allows users to perform basic operations on data, specifically Create, Read, Update, and Delete (CRUD) functionalities. It is built using HTML, CSS, JavaScript, and MongoDB, with an Express.js backend.

## Project Structure
```
crud-app
├── public
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── scripts.js
│   └── index.html
├── src
│   ├── controllers
│   │   └── crudController.js
│   ├── models
│   │   └── crudModel.js
│   ├── routes
│   │   └── crudRoutes.js
│   └── app.js
├── package.json
├── README.md
└── .gitignore
```

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd crud-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Set up your MongoDB database and update the connection string in `src/app.js`.
5. Start the application:
   ```
   npm start
   ```

## Usage
- Open your web browser and navigate to `http://localhost:3000` (or the port specified in your app).
- Use the interface to create, read, update, and delete records.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License.