import { Document, Schema, Model, model} from "mongoose";

export var DepartmentSchema: Schema = new Schema({
    title: String,
    details: String,
    contactno: [String],
    emails: [String],
    link: [String],
    leader: [String] // list of employee ObjectId
  });

  export const Department= model('Department', DepartmentSchema);