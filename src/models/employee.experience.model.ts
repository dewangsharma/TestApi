import { Document, Schema, Model, model} from 'mongoose';

const experienceSchema = new Schema({
    title: String,
    company: String,
    address: String,
    role: String,
    responsibility: String,
    salary: String,
    remark: String,
    link: String,
    contact: String,
    start: Date,
    end: Date,
    isPresent: Boolean
});

export const EmployeeExperienceSchema: Schema = new Schema({
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee'},
    experiences: [experienceSchema]
});

export const EmployeeExperience = model('EmployeeExperience', EmployeeExperienceSchema);