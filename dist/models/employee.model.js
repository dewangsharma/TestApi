"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const extension_1 = require("../Helpers/extension");
/*
export var EmployeeSchema: Schema = new Schema({
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
    roleId: [String], //TODO: This need to be ObjectId of roles table
    reportTo: [String], //TODO: This need to be ObjectId of employee table
    created: Date,
    updated:Date,
    addedBy: String, // TODO: This need to be ObjectId of employee table
    joined: Date,
    isActive: Boolean,
    notes: String
  });

*/
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
    isActive: { type: Boolean, default: true }
});
exports.EmployeeSchema.methods.fullName = function () {
    return extension_1.extension.String.Format('{0} {1} {2} {3}', this.title, this.firstName, this.middleName, this.lastName);
};
exports.Employee = mongoose_1.model('Employee', exports.EmployeeSchema);
//# sourceMappingURL=employee.model.js.map