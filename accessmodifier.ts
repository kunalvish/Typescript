class myclass {
    public empid : number;
    readonly name : string;
    private age : number;

    constructor(empid : number, name : string, age: number){
        this.empid = empid;
        this.name = name;
        this.age = age;
    }

    showdetails (){
        console.log(`${this.empid} ${this.name} ${this.age}`)
    }

    updateage(newage : number) {
        this.age = newage;
    }
}

let mycls = new myclass(1,'abc',15)

mycls.updateage(16)

console.log(mycls)

//error mycls.age = 16 