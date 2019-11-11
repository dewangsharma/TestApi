"use strict";
const express = require("express");
const employee_server_controller_1 = require("../Controller/employee.server.controller");
const Extension = require("../Extends/Extension");
const router = express.Router();
// GET
const Get = function _getAllEmployee(req, res, next) {
    employee_server_controller_1.EmployeeController.GetAll().then((result) => {
        res.status(200).send(result);
    });
};
// POST 
const Post = function _postEmployee(req, res, next) {
    employee_server_controller_1.EmployeeController.Create(req.body).then((reply) => {
        res.status(200).send({ message: Extension.Extension.String.Format('New Employee {0} created', reply._id) });
    });
};
router.get('/', Get);
router.post('/', Post);
module.exports = router;
//# sourceMappingURL=employee.server.routes.js.map