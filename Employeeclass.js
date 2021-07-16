export class Emp {
    constructor(fname, lname, city, state) {
        this.firstname = fname;
        this.lastname = lname;
        this.city = city;
        this.state = state;
    }
    displayName() {
        return `${this.firstname + ' ' + this.lastname}`;
    }
    addEmployee() {
        alert('Employee Added Successfully');
    }
}
