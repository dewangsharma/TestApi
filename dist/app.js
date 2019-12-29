"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const employeeRoute = require("./Routes/employee.server.routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// TODO: database details, including path, auth in separate config file
mongoose.connect('mongodb://localhost:27017/testHR', { useNewUrlParser: true, useUnifiedTopology: true }); //{ useMongoClient: true }
class App {
    constructor() {
        this.express = express();
        this.config();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({ message: 'Test HR Application' });
        });
        // Todo: write log in trace file for each request via middleware
        // Todo: define authentication and authorization middleware
        // Todo: define all routes here        
        this.express.use('/', router);
        this.express.use('/api/data', employeeRoute);
    }
    ;
    config() {
        // support application/json type post data
        this.express.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map