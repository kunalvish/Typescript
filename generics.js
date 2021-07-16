"use strict";
const randomEmpid = (obj) => {
    let empid = Math.random() * 100;
    return Object.assign({ empid }, obj);
};
let emp_1 = randomEmpid({ name: 'Kunal', city: 'Pune' });
//console.log(emp_1.name)
const randomEmpid1 = (obj) => {
    let empid = Math.random() * 100;
    return Object.assign({ empid }, obj);
};
let emp_11 = randomEmpid1({ name: 'Kunal', city: 'Pune' });
console.log(emp_11.name);
const randomEmpid2 = (obj) => {
    let empid = Math.random() * 100;
    return Object.assign({ empid }, obj);
};
let emp_12 = randomEmpid2({ name: 'Kunal', city: 'Pune' });
console.log(emp_12.name);
const empin1 = {
    empid: 1,
    name: 'Kunal',
    data: 'Pune'
};
const empin2 = {
    empid: 1,
    name: 'Kunal',
    data: ['Pune', 'Delhi']
};
