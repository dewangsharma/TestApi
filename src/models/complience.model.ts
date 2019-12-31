import { Document, Schema, Model, model} from 'mongoose';

const complienceSchema: Schema = new Schema({
    devisionId: {type: Schema.Types.ObjectId, ref: 'Division'},
    name: String,
    title: String,
    type: String,
    detail: String,
    links: [String],
    attachments: [{type: Schema.Types.ObjectId, ref: 'Attachment'}],
    updatedBy: {type: Schema.Types.ObjectId, ref: 'Employee'},
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    notes: String
});

export const Complience = model('Complience', complienceSchema);