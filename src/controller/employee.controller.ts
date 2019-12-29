import {Employee} from '../Modules/employee.module';
import {mongoose } from 'mongoose';
import { IEmployee } from '../Interface/employee.interface';


export let EmployeeController = {
    // Get all employees
    async GetAll(){
        return await Employee.find();        
    },
    
    // async GetOne(id: string ) {
    //     return await Employee.findOne({'_id': id});
    // },

    // Get single employee
    GetOne(id:string): Promise<IEmployee>{
        return Employee.findOne({'_id': id});
    },

    // Create new employee
    async Create(emp) {
        // console.log(emp);
        var newEmployee = new Employee(emp);
        console.log(newEmployee);
        return await newEmployee.save();
    },

    // Update new employee
    async Update(id: string, emp: IEmployee){       
        return await Employee.update({'_id':id },{$set: emp});
    },

    // Delete employee
    async Delete(id: string){
        return await Employee.remove({'_id': id});
    }

}