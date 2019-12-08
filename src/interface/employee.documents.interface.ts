export interface IDocuments {
    employeeId: string; // TODO: Employee ObjectId
    documents: [Documents]
}
class Documents {
    title: string;
    remark: string;
    link: string;
    updatedOn: Date;
    updatedBy: string; // ToDo: Employee ObjectId
}