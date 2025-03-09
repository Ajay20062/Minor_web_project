const CrudModel = require('../models/crudModel');

// Create a new record
exports.createRecord = async (req, res) => {
    try {
        const newRecord = new CrudModel(req.body);
        await newRecord.save();
        res.status(201).json({ message: 'Record created successfully', data: newRecord });
    } catch (error) {
        res.status(400).json({ message: 'Error creating record', error: error.message });
    }
};

// Read all records
exports.getAllRecords = async (req, res) => {
    try {
        const records = await CrudModel.find();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving records', error: error.message });
    }
};

// Update a record by ID
exports.updateRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRecord = await CrudModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json({ message: 'Record updated successfully', data: updatedRecord });
    } catch (error) {
        res.status(400).json({ message: 'Error updating record', error: error.message });
    }
};

// Delete a record by ID
exports.deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRecord = await CrudModel.findByIdAndDelete(id);
        if (!deletedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.status(200).json({ message: 'Record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting record', error: error.message });
    }
};