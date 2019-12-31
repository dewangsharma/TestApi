"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.OrganisationSchema = new mongoose_1.Schema({
    name: String,
    address: String,
    type: String,
    email: String,
    contact: [String],
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    notes: String,
    isActive: { type: Boolean, default: true }
});
exports.Organisation = mongoose_1.model('Organisation', exports.OrganisationSchema);
//# sourceMappingURL=organisation.model.js.map