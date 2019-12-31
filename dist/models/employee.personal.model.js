"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const kinSchema = new mongoose_1.Schema({
    name: String,
    relation: String,
    contact: String,
    email: String
}, { '_id': false });
const addressSchema = new mongoose_1.Schema({
    type: String,
    address: String
}, { '_id': false });
exports.EmployeePersonalSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    kin: kinSchema,
    address: addressSchema,
    gender: String,
    nationality: String,
    maritalStatus: String,
    email: String,
    contact: String,
    medicalNotes: String,
    notes: String,
    updated: { type: Date, default: Date.now }
});
exports.EmployeePersonal = mongoose_1.model('EmployeePersonal', exports.EmployeePersonalSchema);
//# sourceMappingURL=employee.personal.model.js.map