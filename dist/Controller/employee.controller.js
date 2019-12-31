"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_model_1 = require("../Models/employee.model");
exports.EmployeeController = {
    // Get all employees
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield employee_model_1.Employee.find();
        });
    },
    // Get single employee
    GetOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return employee_model_1.Employee.findOne({ '_id': id });
        });
    },
    // Create new employee
    Create(emp) {
        return __awaiter(this, void 0, void 0, function* () {
            let newEmployee = new employee_model_1.Employee(emp);
            return yield newEmployee.save();
        });
    },
    // Update new employee
    Update(id, emp) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield employee_model_1.Employee.update({ '_id': id }, { $set: emp });
        });
    },
    // Delete employee
    // Note: May be once if the employee is created then just do a soft delete
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield employee_model_1.Employee.remove({ '_id': id });
        });
    }
};
//# sourceMappingURL=employee.controller.js.map