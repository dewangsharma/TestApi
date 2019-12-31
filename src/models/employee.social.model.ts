import { Document, Schema, Model, model} from 'mongoose';

const socialSchema = new Schema({
    type: String,
    link: String,
    notes: String,
    update: {type: Date, default: Date.now}
});

export const EmployeeSocialSchema: Schema = new Schema({
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee'},
    socials: [socialSchema]
});

export const EmployeeSocial = model('EmployeeSocial', EmployeeSocialSchema);