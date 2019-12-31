import { Document, Schema, Model, model} from 'mongoose';

export var DivisionSchema: Schema = new Schema({
    organisationId: {type: Schema.Types.ObjectId, ref: 'Organisation'},
    type: String,
    name: String,
    contact: [String],
    email: [String],
    link: [String],
    isRoot: Boolean,
    parents: [{type: Schema.Types.ObjectId, ref: 'Division'}],
    childs: [{type: Schema.Types.ObjectId, ref: 'Division'}],
    keyEmployees: [{type: Schema.Types.ObjectId, ref: 'Employee'}],
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    notes: String
  });

  export const Division= model('Division', DivisionSchema);