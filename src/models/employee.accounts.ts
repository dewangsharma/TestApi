import { Document, Schema, Model, model} from 'mongoose';

/*
 #NOTE:
 Indian bank have IFSC Code, Branch Name or Address, while in UK we need just Sort code, So lets offer that flexibility
 Exampples:
    #1.  [{type: 'IFSC', detail: 'SBIN001451'}, {type: 'Branch', detail: 'MG Road, Delhi'}]
    #2.  [{type: 'SortCode', detail: '11-54-85'}]
*/
const bankSchema: Schema = new Schema({
    type: String,
    detail: String 
},{'_id': false});

export const EmployeeAccountSchema: Schema = new Schema({
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee'},
    salary: String,
    salaryBand: String,
    bank : [bankSchema],
    accountNumber: String,
    addedBy: {type: Schema.Types.ObjectId, ref: 'Employee'}, // TODO: I think we don't need this field
    notes: String,
    updated: {type: Date, default: Date.now}
  });

  export const EmployeeAccount = model('EmployeeAccount', EmployeeAccountSchema);