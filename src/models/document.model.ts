import { Document, Schema, Model, model} from 'mongoose';

const attachSchema: Schema = new Schema({
    documentType: String,
    documentNumber: String,
    link: String,
    notes: String,
    updated: {type: Date, default: Date.now}
},{'_id': false});

export const AttachmentSchema: Schema = new Schema({
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee'},
    attachments:[attachSchema]
});
  
export const Attachment = model('Attachment', AttachmentSchema);