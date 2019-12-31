import { Document, Schema, Model, model} from 'mongoose';

const educationSchema = new Schema({
    title: String,
    institute: String,
    level: String,
    grades: String,
    remark: String,
    link: String,
    start: Date,
    end: Date,
    isPresent: Boolean
});

export const EmployeeEducationSchema: Schema = new Schema({
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee'},
    educations: [educationSchema]    
});

export const EmployeeEducation = model('EmployeeEducation', EmployeeEducationSchema);