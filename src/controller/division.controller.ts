import {Division} from '../Models/division.model';
import {mongoose } from 'mongoose';

export default class DivisionController {
    public static async GetAll(){
        return await Division.find();
    };

    public static async GetOne(id: mongoose.Types.ObjectId ) {
        return await Division.find({id: id}); 
    };

    public static async Create(dep){
        let newDep = new Division(dep);
        return await newDep.save();
    };
};