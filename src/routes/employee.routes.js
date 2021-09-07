const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee.controller');
// Retrieve all employees
router.get('/', employeeController.findAll);

//create
router.post('/', employeeController.create);

//update
router.put('/:id', employeeController.update);

//delete
router.delete('/:id', employeeController.delete);

module.exports = router