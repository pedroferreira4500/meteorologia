export interface ICity {
    name?: string;
    temp?:number;
    sunrise?:Date;
    sunset?:Date;
}


export class City implements ICity {
    constructor(
        public name?: string,
        public temp?:number,
        public sunrise?:Date,
        public sunset?:Date
    ) {}
}