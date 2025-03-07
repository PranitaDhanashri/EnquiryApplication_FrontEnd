export class Customer {
    public CustomerID: number;
    public Name: string;
    public ContactPerson: string;
    public ContactNumber: string;
    public AlternativeNumber: string;
    public EmailID: string;
    public Address: string;

    constructor(cid: number, name: string, contactPerson: string, contactNumber: string, alternativeNumber: string, emailId: string, address: string) {
        this.CustomerID = cid;
        this.Name = name;
        this.ContactPerson = contactPerson;
        this.ContactNumber = contactNumber;
        this.AlternativeNumber = alternativeNumber;
        this.EmailID = emailId;
        this.Address = address;
    }
}
