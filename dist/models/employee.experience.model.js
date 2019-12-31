"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const experienceSchema = new mongoose_1.Schema({
    title: String,
    company: String,
    address: String,
    role: String,
    responsibility: String,
    salary: String,
    remark: String,
    link: String,
    contact: String,
    start: Date,
    end: Date,
    isPresent: Boolean
});
exports.EmployeeExperienceSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    experiences: [experienceSchema]
});
exports.EmployeeExperience = mongoose_1.model('EmployeeExperience', exports.EmployeeExperienceSchema);
//# sourceMappingURL=employee.experience.model.js.map