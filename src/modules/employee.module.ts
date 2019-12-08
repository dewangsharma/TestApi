import { Document, Schema, Model, model} from "mongoose";
import { IEmployee } from "../Interface/employee.interface";

export interface IEmployeeModel extends IEmployee, Document {
    fullName(): string;
};

export var EmployeeSchema: Schema = new Schema({
    title: String,
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    dob: Date,
    gender: String,
    nationality: String,
    maritalStatus: String,
    username: String,
    contact: [String],
    address: [String],
    kin: [String],
    roleId: [String], //TODO: This need to be ObjectId of roles table 
    reportTo: [String], //TODO: This need to be ObjectId of employee table
    created: Date,
    updated:Date,
    addedBy: String, // TODO: This need to be ObjectId of employee table
    joined: Date,
    isActive: Boolean,
    notes: String
  });

  EmployeeSchema.methods.fullName = function(): string {
    return (this.firstName.trim() + ' ' + this.middleName.trim() + ' ' + this.lastName.trim());
  };

  export const Employee: Model<IEmployeeModel> = model<IEmployeeModel>("Employee", EmployeeSchema);