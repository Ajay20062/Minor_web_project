# Code Citations

## License: unknown
https://github.com/abdo/hr-system/tree/b35b8ab81efe3346ce971a102f3688ed9d7c90e8/routes/api/employee.js

```
Employee.findById(req.params.id)
        .then(employee => employee.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json(
```


## License: unknown
https://github.com/maxrosen/Ultimate-Software-Job-Board/tree/6a57b91afc95f56d3b4760bbe88d207640542053/backend/router/api/employees.js

```
', (req, res) => {
    Employee.findById(req.params.id)
        .then(employee => employee.remove().then(() => res.json({ success: true })))
        .catch(err =
```


## License: unknown
https://github.com/bekzemed/employee-managment/tree/0e8b3fba8ce172167d3010337f65ff2ce46e89ff/route/employee.js

```
.delete('/:id', (req, res) => {
    Employee.findById(req.params.id)
        .then(employee => employee.remove().then(() => res.json({ success: true })
```


## License: unknown
https://github.com/eric4820/INVENTORY-MANAGEMENT-SYSTEM/tree/9dc26c8f943b85a1de0cf95bb7ad250514a5f9e9/routes/api/employees.js

```
.id)
        .then(employee => employee.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
```

