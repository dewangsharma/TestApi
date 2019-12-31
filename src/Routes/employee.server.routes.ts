// TODO: Error handling
import * as express from 'express';
import {EmployeeController} from '../Controller/employee.controller';
import {extension} from '../Helpers/extension';

const router = express.Router();

// GET. TODO: Get by index such as first 20, 40 , 60 
const Get = function _getAllEmployee(req,res,next){
    EmployeeController.GetAll().then((result)=>{
        res.status(200).send(result);
    });
};

// GET: Get single employee by employee id
const GetOne = function _getOneEmployee(req,res,next){
    EmployeeController.GetOne(req.params.id).then((result)=>{
        res.status(200).send(result);
    });
};

// POST: Save employee 
const Post = function _postEmployee(req,res,next){
    try{   
        EmployeeController.Create(req.body).then((reply)=>{
            res.status(200).send({message:extension.String.Format( 'New Employee {0} created', reply.fullName())});
        }); 
    }catch(err){
        console.log(err);
    }       
};

// PUT: Update employee
const Put = function _putEmployee(req,res,next){
    try{
        EmployeeController.Update(req.params.id,  req.body).then((reply) =>{
            res.status(200).send({message: reply});
        });
    }
    catch(err){
        console.log(err);
    }
};

router.get('/', Get);
router.get('/:id', GetOne);
router.post('/', Post);
router.put('/', Put);

export = router;