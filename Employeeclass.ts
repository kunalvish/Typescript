import { User } from './userinterface.js'

export class Emp implements User {

    firstname : string;
    lastname: string;
    city: string;
    state: string;

    constructor(fname : string, lname: string, city: string, state: string){
        
        this.firstname = fname;
        this.lastname = lname;
        this.city = city;
        this.state = state;
    }

    displayName() : string {
        return `${this.firstname + ' ' + this.lastname}`
    }

    addEmployee() : void{

        alert('Employee Added Successfully')
    }
}
