import {Employee} from '../Models/employee.model';
import {mongoose } from 'mongoose';

export let EmployeeController = {
    // Get all employees
    async GetAll() {
        return await Employee.find();        
    },
    
    // Get single employee
    async GetOne(id){
        return Employee.findOne({'_id': id});
    },

    // Create new employee
    async Create(emp) {
        let newEmployee = new Employee(emp);
        return await newEmployee.save();
    },

    // Update new employee
    async Update(id, emp){       
        return await Employee.update({'_id':id },{$set: emp});
    },

    // Delete employee
    // Note: May be once if the employee is created then just do a soft delete
    async Delete(id: string){
        return await Employee.remove({'_id': id});
    }
}