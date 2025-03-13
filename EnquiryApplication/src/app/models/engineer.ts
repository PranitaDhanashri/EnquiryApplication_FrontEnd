export class Engineer {
    public EngID: number;
    public Name: string;
    public ContactNumber: string;
    public Address: string;
    public DOB: Date;

    constructor(id: number, name: string, contact: string, add: string, birthDate: Date) {
        this.EngID = id;
        this.Name = name;
        this.ContactNumber = contact;
        this.Address = add;
        this.DOB = birthDate;
    }
}
