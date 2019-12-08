export interface IEducation {
    employeeId: string; // TODO: Employee ObjectId
    qualification: [Qualification]
}
class Qualification {
    title: string;
    institute: string;
    level: string;
    grades: string;
    remark: string;
    link: string;
    start: Date;
    end: Date;
    isPresent: boolean;    
}