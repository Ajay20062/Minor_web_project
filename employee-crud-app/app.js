const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/employee-crud-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use Routes
const employees = require('./routes/employeeRoutes');
app.use('/employees', employees);

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to the Employee CRUD application!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});