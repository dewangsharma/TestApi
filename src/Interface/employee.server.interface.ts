export interface IEmployee {
    title:string,
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    dob: Date;
    gender: Gender;
    nationality: string,
    maritalStatus: MaritalStatus,
    username:string;
    contact: string[];
    address:string[];
    kin: string[];
    roleId: string; //TODO: This need to be ObjectId of roles table 
    reportTo: string[]; //TODO: This need to be ObjectId of employee table
    created: Date;
    updated:Date;
    addedBy: string; // TODO: This need to be ObjectId of employee table
    joined: Date;
    isActive: boolean;
    notes: string;
  };

  enum Gender {
      Male = 1, 
      Female = 2,
      Other = 3,
      NotDisclosed = 100
  }

  enum MaritalStatus {
      Married = 1,
      UnMarried = 2,
      Divorsed = 3,
      NotDisclosed = 100
  }