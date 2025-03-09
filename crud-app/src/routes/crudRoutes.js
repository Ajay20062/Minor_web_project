const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

// Create a new record
router.post('/records', crudController.createRecord);

// Read all records
router.get('/records', crudController.getAllRecords);

// Read a single record by ID
router.get('/records/:id', crudController.getRecordById);

// Update a record by ID
router.put('/records/:id', crudController.updateRecord);

// Delete a record by ID
router.delete('/records/:id', crudController.deleteRecord);

module.exports = router;