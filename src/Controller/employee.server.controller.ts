import {Employee, EmployeeSchema} from '../Modules/employee.server.module';


export let EmployeeController = {
    async GetAll(){
        return await Employee.find();
    },
    async Create(emp) {
        var newEmployee = new Employee(emp);
        return await newEmployee.save();
    }
}