export interface IExperience {
    employeeId: string; // TODO: Employee ObjectId
    experience: [Experience]
}
class Experience {
    title: string;
    company: string;
    address: string;
    role: string;
    responsibility: string;
    salary: Salary;
    remark: string;
    link: string;
    contact:string;
    start: Date;
    end: Date;
    isPresent: boolean;
}

class Salary{
    package: number;
    type: Salary;
    bonus: number
}

enum SalaryMode{
    Day = 1,
    Week = 2,
    Fortnight = 3,
    Monthly = 4,
    Yearly = 5
}