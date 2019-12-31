"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const educationSchema = new mongoose_1.Schema({
    title: String,
    institute: String,
    level: String,
    grades: String,
    remark: String,
    link: String,
    start: Date,
    end: Date,
    isPresent: Boolean
});
exports.EmployeeEducationSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    educations: [educationSchema]
});
exports.EmployeeEducation = mongoose_1.model('EmployeeEducation', exports.EmployeeEducationSchema);
//# sourceMappingURL=employee.education.model.js.map