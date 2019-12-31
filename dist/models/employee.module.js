"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
exports.EmployeeSchema = new mongoose_1.Schema({
    title: String,
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    dob: Date,
    gender: String,
    nationality: String,
    maritalStatus: String,
    username: String,
    contact: [String],
    address: [String],
    kin: [String],
    roleId: [String],
    reportTo: [String],
    created: Date,
    updated: Date,
    addedBy: String,
    joined: Date,
    isActive: Boolean,
    notes: String
});
exports.EmployeeSchema.methods.fullName = function () {
    return (this.firstName.trim() + ' ' + this.middleName.trim() + ' ' + this.lastName.trim());
};
exports.Employee = mongoose_1.model("Employee", exports.EmployeeSchema);
//# sourceMappingURL=employee.module.js.map