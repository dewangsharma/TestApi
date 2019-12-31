"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const roleSchema = new mongoose_1.Schema({
    devisionId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Division' },
    name: String,
    title: String,
    type: String,
    detail: String,
    roleCount: Number,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    notes: String
});
exports.Role = mongoose_1.model('Role', roleSchema);
//# sourceMappingURL=role.model.js.map