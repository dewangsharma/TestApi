import * as express from 'express';
import * as path from 'path';
import { writeFileSync, readFileSync } from 'fs'
import {EmployeeController} from '../Controller/employee.controller';
import * as Extension from '../Extends/Extension';


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
// TODO: correct req.body as input param for Create function
const Post = function _postEmployee(req,res,next){
    try{   
        // let dataLog = path.join(__filename, '../../log/data.txt');        
        // if(fs.existsSync(dataLog)){
        //     console.log('DATA LOG is available');
        // }else{
        //     console.log('DATA LOG is not available ');
            
        // }
        //writeFileSync(dataLog);
        
        EmployeeController.Create(req.body).then((reply)=>{
            res.status(200).send({message:Extension.Extension.String.Format( 'New Employee {0} created', reply._id)});
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

    }
};

router.get('/', Get);
router.get('/:id', GetOne);
router.post('/', Post);
router.put('/', Put);



export = router;