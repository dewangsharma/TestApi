export interface ISocial {
    employeeId: string; // TODO: Employee ObjectId
    facebook: string;
    linkedIn: string;
    twitter: string;
    whatsapp: string;
    others: [ExtraSocial]
}

class ExtraSocial{
    title:string;
    url: string;
}