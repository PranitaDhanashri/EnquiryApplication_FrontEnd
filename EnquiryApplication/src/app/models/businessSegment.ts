export class BusinessSegment {
    public BusinessID: number;
    public Segment: string;

    constructor(id: number, seg: string) {
        this.BusinessID = id;
        this.Segment = seg;
    }
}