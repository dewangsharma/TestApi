"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.DivisionSchema = new mongoose_1.Schema({
    organisationId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Organisation' },
    type: String,
    name: String,
    contact: [String],
    email: [String],
    link: [String],
    isRoot: Boolean,
    parents: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Division' }],
    childs: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Division' }],
    keyEmployees: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' }],
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    notes: String
});
exports.Division = mongoose_1.model('Division', exports.DivisionSchema);
//# sourceMappingURL=division.model.js.map