const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const crudRoutes = require('./routes/crudRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/crud-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.use('/api', crudRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});