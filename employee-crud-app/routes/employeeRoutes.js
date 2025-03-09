const express = require('express');
const router = express.Router();

// Employee Model
const Employee = require('../models/employeeModel');

// @route   GET /employees
// @desc    Get All Employees
router.get('/', (req, res) => {
    Employee.find()
        .sort({ date: -1 })
        .then(employees => res.json(employees));
});

// @route   POST /employees
// @desc    Create An Employee
router.post('/', (req, res) => {
    const newEmployee = new Employee({
        name: req.body.name,
        position: req.body.position,
        department: req.body.department,
        salary: req.body.salary
    });

    newEmployee.save().then(employee => res.json(employee));
});

// @route   PUT /employees/:id
// @desc    Update An Employee
router.put('/:id', (req, res) => {
    Employee.findById(req.params.id)
        .then(employee => {
            employee.name = req.body.name;
            employee.position = req.body.position;
            employee.department = req.body.department;
            employee.salary = req.body.salary;
            employee.save().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ success: false }));
});

// @route   DELETE /employees/:id
// @desc    Delete An Employee
router.delete('/:id', (req, res) => {
    Employee.findById(req.params.id)
        .then(employee => employee.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;