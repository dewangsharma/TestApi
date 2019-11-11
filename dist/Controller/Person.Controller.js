"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Extension_1 = require("../Extends/Extension");
const ext = require("../Extends/Extension");
let CommonExtension = ext.Extension;
var HR;
(function (HR) {
    class CSPerson {
        constructor(title, fName, mName, lName, dob) {
            this.title = '';
            this.fName = '';
            this.mName = '';
            this.lName = '';
            this.dob = new Date();
            this.title = title;
            this.fName = fName;
            this.mName = mName;
            this.lName = lName;
            this.dob = dob;
        }
        printName() {
            // console.log(Extension.String.Formate('{0} {1} {2} ', Salute, this.title, this.fName.toUpperCase()));
            console.log(Extension_1.Extension.String.Format('Message: {0} {1} {2} ', HR.Salute, this.title, this.fName.toUpperCase()));
            console.log(CommonExtension.String.Format('Another {0} {1}', new Date(), 123444555));
        }
    }
    HR.Salute = 'Hello';
    HR.Person = CSPerson;
    class testClass {
        myFunction(param1) {
            console.log('MY FUNCTION ' + param1);
        }
    }
    HR.testClass = testClass;
    ;
    HR.Temp = {
        p1: 'TEMP -- P1'
    };
})(HR = exports.HR || (exports.HR = {}));
;
//# sourceMappingURL=Person.Controller.js.map