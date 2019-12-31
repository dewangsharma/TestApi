"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.EmployeeComplienceSchema = new mongoose_1.Schema({
    complienceId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Complience' },
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    signedOn: Date,
    verifiedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    notes: String,
    updated: Date,
    isSigned: Boolean
});
exports.EmployeeComplience = mongoose_1.model('EmployeeComplience', exports.EmployeeComplienceSchema);
//# sourceMappingURL=employee.complience.model.js.map