"use strict";
const express = require("express");
const employee_controller_1 = require("../Controller/employee.controller");
const extension_1 = require("../Helpers/extension");
const router = express.Router();
// GET. TODO: Get by index such as first 20, 40 , 60 
const Get = function _getAllEmployee(req, res, next) {
    employee_controller_1.EmployeeController.GetAll().then((result) => {
        res.status(200).send(result);
    });
};
// GET: Get single employee by employee id
const GetOne = function _getOneEmployee(req, res, next) {
    employee_controller_1.EmployeeController.GetOne(req.params.id).then((result) => {
        res.status(200).send(result);
    });
};
// POST: Save employee 
// TODO: correct req.body as input param for Create function
const Post = function _postEmployee(req, res, next) {
    try {
        employee_controller_1.EmployeeController.Create(req.body).then((reply) => {
            res.status(200).send({ message: extension_1.extension.String.Format('New Employee {0} created', reply.fullName()) });
        });
    }
    catch (err) {
        console.log(err);
    }
};
// PUT: Update employee
const Put = function _putEmployee(req, res, next) {
    try {
        employee_controller_1.EmployeeController.Update(req.params.id, req.body).then((reply) => {
            res.status(200).send({ message: reply });
        });
    }
    catch (err) {
    }
};
router.get('/', Get);
router.get('/:id', GetOne);
router.post('/', Post);
router.put('/', Put);
module.exports = router;
//# sourceMappingURL=employee.server.routes.js.map