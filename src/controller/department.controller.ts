import {Department} from '../Modules/department.module';
import {IDepartment} from '../Interface/department.interface';
import {mongoose } from 'mongoose';

export default class DepartmentController {
    public static async GetAll(){
        return await Department.find();
    };

    public static async GetOne(id: mongoose.Types.ObjectId ) {
        return await Department.find({id: id}); 
    };

    public static async Create(dep: IDepartment){
        let newDep = new Department(dep);
        return await newDep.save();
    };


};