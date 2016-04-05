export class Pong {

    x: string;

    constructor() {
        this.x = 'piiiopning'
    }

    sayX() {
        document.title = "Success";
        console.log(this.x)
    }
}


let pong = new Pong();

pong.sayX();