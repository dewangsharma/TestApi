export interface IDepartment {
    title:string;
    details: string;
    contactno: string[];
    emails: string[];
    link: string[];
    leader: string[]; // list of employee ObjectId
}