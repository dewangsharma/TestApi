"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const attachSchema = new mongoose_1.Schema({
    documentType: String,
    documentNumber: String,
    link: String,
    notes: String,
    updated: { type: Date, default: Date.now }
}, { '_id': false });
exports.AttachmentSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    attachments: [attachSchema]
});
exports.Attachment = mongoose_1.model('Attachment', exports.AttachmentSchema);
//# sourceMappingURL=document.model.js.map