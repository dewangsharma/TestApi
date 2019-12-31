"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const complienceSchema = new mongoose_1.Schema({
    devisionId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Division' },
    name: String,
    title: String,
    type: String,
    detail: String,
    links: [String],
    attachments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Attachment' }],
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    notes: String
});
exports.Complience = mongoose_1.model('Complience', complienceSchema);
//# sourceMappingURL=complience.model.js.map