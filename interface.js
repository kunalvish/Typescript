"use strict";
;
function getName(fname, lname) {
    console.log(`${fname} ${lname}`);
}
function updateName(fname, lname) {
    console.log(`${fname} ${lname}`);
}
let emp1 = getName;
emp1('Kunal', 'Vish');
emp1 = updateName;
emp1('xyqe', 'ssss');
class Employee2 {
    //  city : string;
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
}
let emp3 = new Employee2('kunal', 'Vish');
//emp3.getCity('Pune')
console.log(emp3);
