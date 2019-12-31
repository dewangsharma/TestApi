"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/*
 #NOTE:
 Indian bank have IFSC Code, Branch Name or Address, while in UK we need just Sort code, So lets offer that flexibility
 Exampples:
    #1.  [{type: 'IFSC', detail: 'SBIN001451'}, {type: 'Branch', detail: 'MG Road, Delhi'}]
    #2.  [{type: 'SortCode', detail: '11-54-85'}]
*/
const bankSchema = new mongoose_1.Schema({
    type: String,
    detail: String
}, { '_id': false });
exports.EmployeeAccountSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    salary: String,
    salaryBand: String,
    bank: [bankSchema],
    accountNumber: String,
    addedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    notes: String,
    updated: { type: Date, default: Date.now }
});
exports.EmployeeAccount = mongoose_1.model('EmployeeAccount', exports.EmployeeAccountSchema);
//# sourceMappingURL=employee.accounts.js.map