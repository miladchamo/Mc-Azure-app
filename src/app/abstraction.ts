export abstract class Abstraction {
    constructor(protected name: string) { }
    
        abstract myFunc(input : string) : string;
    
        test(message) {
            return message + this.myFunc(this.name);
        }
}
