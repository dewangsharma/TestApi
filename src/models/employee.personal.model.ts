import { Document, Schema, Model, model} from 'mongoose';

const kinSchema: Schema = new Schema({
    name: String,
    relation: String,
    contact: String,
    email: String
}, { '_id': false });

const addressSchema: Schema = new Schema({
    type: String, 
    address: String 
},{'_id': false});

export const EmployeePersonalSchema: Schema = new Schema({
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee'},
    kin : kinSchema,
    address: addressSchema,
    gender: String,
    nationality: String,
    maritalStatus: String,
    email: String,
    contact: String,
    medicalNotes: String,
    notes: String,
    updated:{type: Date, default: Date.now}
  });

  export const EmployeePersonal = model('EmployeePersonal', EmployeePersonalSchema);