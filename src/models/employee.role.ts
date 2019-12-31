import { Document, Schema, Model, model} from 'mongoose';

export const EmployeeRoleSchema: Schema = new Schema({
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee'},
    roleId:{type: Schema.Types.ObjectId, ref: 'Role'} ,
    reportTo: {type: Schema.Types.ObjectId, ref: 'Employee'},
    additionalReportTo: [{type: Schema.Types.ObjectId, ref: 'Employee'}],
    addedBy: {type: Schema.Types.ObjectId, ref: 'Employee'},
    notes: String,
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    roleStart: {type: Date, default: Date.now},
    isActive: Boolean
  });

  export const EmployeeRole = model('EmployeeRole', EmployeeRoleSchema);