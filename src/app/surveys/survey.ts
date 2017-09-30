export class Survey {
    id : number;
    question: string;
    answers: any;

    constructor() {
        this.answers = [[],[],[]];
    }
}