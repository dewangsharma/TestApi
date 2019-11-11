"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const employeeRoute = require("./Routes/employee.server.routes");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/testHR', { useNewUrlParser: true, useUnifiedTopology: true }); //{ useMongoClient: true }
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({ message: 'Hello World!' });
        });
        this.express.use('/', router);
        this.express.use('/api/data', employeeRoute);
    }
    ;
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map