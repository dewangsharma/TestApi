import { Document, Schema, Model, model} from 'mongoose';

export const EmployeeComplienceSchema: Schema = new Schema({
    complienceId: {type: Schema.Types.ObjectId, ref: 'Complience'},
    employeeId:{type: Schema.Types.ObjectId, ref: 'Employee'},
    signedOn: Date,
    verifiedBy: {type: Schema.Types.ObjectId, ref: 'Employee'},
    notes: String,
    updated: Date,
    isSigned: Boolean
});

export const EmployeeComplience = model('EmployeeComplience', EmployeeComplienceSchema);