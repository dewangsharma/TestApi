import * as express from 'express';
import {Employee, IEmployeeModel, EmployeeSchema} from '../Modules/employee.server.module';
import {EmployeeController} from '../Controller/employee.server.controller';
import * as Extension from '../Extends/Extension';

const router = express.Router();

// GET. TODO: Get by index such as first 20, 40 , 60 
const Get  = function _getAllEmployee(req,res,next){
    EmployeeController.GetAll().then((result)=>{
        res.status(200).send(result);
    });
};

// POST 
const Post = function _postEmployee(req,res,next){
    EmployeeController.Create(req.body).then((reply)=>{
        res.status(200).send({message:Extension.Extension.String.Format( 'New Employee {0} created', reply._id)});
    });        
};


router.get('/', Get);
router.post('/', Post);

export = router;