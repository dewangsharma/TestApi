"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const extension_1 = require("../Helpers/extension");
exports.EmployeeSchema = new mongoose_1.Schema({
    title: String,
    firstName: String,
    middleName: String,
    lastName: String,
    username: String,
    email: String,
    contact: [String],
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    notes: String,
    isActive: { type: Boolean, default: true },
    status: Number // can be useful for new employee induction, onboard process or something else
});
exports.EmployeeSchema.methods.fullName = function () {
    return extension_1.extension.String.Format('{0} {1} {2} {3}', this.title, this.firstName, this.middleName, this.lastName);
};
exports.Employee = mongoose_1.model('Employee', exports.EmployeeSchema);
//# sourceMappingURL=employee.model.js.map