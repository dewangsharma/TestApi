"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.DepartmentSchema = new mongoose_1.Schema({
    title: String,
    details: String,
    contactno: [String],
    emails: [String],
    link: [String],
    leader: [String] // list of employee ObjectId
});
exports.Department = mongoose_1.model('Department', exports.DepartmentSchema);
//# sourceMappingURL=department.server.module.js.map