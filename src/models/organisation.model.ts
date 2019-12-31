import { Document, Schema, Model, model} from 'mongoose';

export const OrganisationSchema: Schema = new Schema({
    name: String,
    address: String,
    type: String, // TODO: What is the purpose of this field
    email: String,
    contact: [String],
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    notes: String,
    isActive: {type: Boolean, default: true}
  });
  
  export const Organisation = model('Organisation', OrganisationSchema);