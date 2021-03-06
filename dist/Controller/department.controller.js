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
const division_model_1 = require("../Models/division.model");
class DepartmentController {
    static GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield division_model_1.Department.find();
        });
    }
    ;
    static GetOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield division_model_1.Department.find({ id: id });
        });
    }
    ;
    static Create(dep) {
        return __awaiter(this, void 0, void 0, function* () {
            let newDep = new division_model_1.Department(dep);
            return yield newDep.save();
        });
    }
    ;
}
exports.default = DepartmentController;
;
//# sourceMappingURL=department.controller.js.map