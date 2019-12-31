import { Document, Schema, Model, model} from 'mongoose';
import {extension} from '../Helpers/extension';

export const EmployeeSchema: Schema = new Schema({
    title: String,
    firstName: String,
    middleName: String,
    lastName: String,
    username: String,
    email: String,
    contact: [String],
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    notes: String,
    isActive: {type: Boolean, default: true},
    status: Number // can be useful for new employee induction, onboard process or something else
});

EmployeeSchema.methods.fullName = function(): string {
  return extension.String.Format('{0} {1} {2} {3}', this.title, this.firstName, this.middleName, this.lastName ); 
};
  
export const Employee = model('Employee', EmployeeSchema);