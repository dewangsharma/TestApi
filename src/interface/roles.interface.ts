export interface IRole {
    title:string;
    details: string;
    departmentId: string; // TODO: Department ObjectId
    defaultManager: string; // TODO: Role Object; default line manager for this role
}