"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const socialSchema = new mongoose_1.Schema({
    type: String,
    link: String,
    notes: String,
    update: { type: Date, default: Date.now }
});
exports.EmployeeSocialSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    socials: [socialSchema]
});
exports.EmployeeSocial = mongoose_1.model('EmployeeSocial', exports.EmployeeSocialSchema);
//# sourceMappingURL=employee.social.model.js.map