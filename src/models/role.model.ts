import { Document, Schema, Model, model} from 'mongoose';

const roleSchema: Schema = new Schema({
    devisionId: {type: Schema.Types.ObjectId, ref: 'Division'},
    name: String,
    title: String,
    type: String,
    detail: String,
    roleCount: Number,
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    notes: String
});

export const Role = model('Role', roleSchema);