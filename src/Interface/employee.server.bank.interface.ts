export interface IDocuments {
    employeeId: string; // TODO: Employee ObjectId
    bank: BankAccount;
    persion: PensionAccount;
}
class BankAccount{
    title: string;
    accountholder: string;
    accountno: string;
    branch: string;
    city: string;
    state: string;
    ifsc: string;
}

class PensionAccount {
    // TODO: details about pension account 
}
