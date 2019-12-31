"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.EmployeeRoleSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    roleId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Role' },
    reportTo: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    additionalReportTo: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' }],
    addedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    notes: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    roleStart: { type: Date, default: Date.now },
    isActive: Boolean
});
exports.EmployeeRole = mongoose_1.model('EmployeeRole', exports.EmployeeRoleSchema);
//# sourceMappingURL=employee.role.js.map