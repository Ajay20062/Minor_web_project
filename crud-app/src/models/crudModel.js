const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CrudModel = mongoose.model('Crud', crudSchema);

module.exports = CrudModel;