export interface IDocuments {
    employeeId: string; // TODO: Employee ObjectId
    complience: [Complience]
}
class Complience {
    title: string;
    remark: string;
    link: string;
    signedOn: Date;
    updatedBy: string; // ToDo: Employee ObjectId
    verifiedBy: string; // ToDo: Employee ObjectId
}