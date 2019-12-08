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
const department_server_module_1 = require("../Modules/department.server.module");
class DepartmentController {
    static GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield department_server_module_1.Department.find();
        });
    }
    ;
    static GetOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield department_server_module_1.Department.find({ id: id });
        });
    }
    ;
    static Create(dep) {
        return __awaiter(this, void 0, void 0, function* () {
            let newDep = new department_server_module_1.Department(dep);
            return yield newDep.save();
        });
    }
    ;
}
exports.default = DepartmentController;
;
//# sourceMappingURL=department.server.controller.js.map