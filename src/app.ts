import * as express from 'express';
import * as employeeRoute from './Routes/employee.server.routes';
import * as mongoose from 'mongoose';

// TODO: database details, including path, auth in separate config file
mongoose.connect('mongodb://localhost:27017/testHR', {useNewUrlParser: true, useUnifiedTopology:true}); //{ useMongoClient: true }

class App {
    public express;
  
    constructor () {
      this.express = express()
      this.mountRoutes()
    }
  
    private mountRoutes (): void {
      const router = express.Router();
      router.get('/', (req, res) => {
        res.json({message: 'Test HR Application'});
      });

      // Todo: write log in trace file for each request via middleware
      // Todo: define authentication and authorization middleware
      // Todo: define all routes here
      this.express.use('/', router);
      this.express.use('/api/data', employeeRoute);
    };
  }
  
  export default new App().express;
