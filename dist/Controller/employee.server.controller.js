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
const employee_server_module_1 = require("../Modules/employee.server.module");
exports.EmployeeController = {
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield employee_server_module_1.Employee.find();
        });
    },
    // async GetOne(id: string ) {
    //     return await Employee.findOne({'_id': id});
    // },
    GetOne(id) {
        return employee_server_module_1.Employee.findOne({ '_id': id });
    },
    Create(emp) {
        return __awaiter(this, void 0, void 0, function* () {
            var newEmployee = new employee_server_module_1.Employee(emp);
            return yield newEmployee.save();
        });
    }
};
//# sourceMappingURL=employee.server.controller.js.map