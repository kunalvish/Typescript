import { Emp } from './Employeeclass.js';
const fname = document.querySelector('#firstname');
const lname = document.querySelector('#lastname');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const f = document.querySelector('form');
f && f.addEventListener('submit', (e) => {
    e.preventDefault();
    let emp;
    emp = new Emp(fname.value, lname.value, city.value, state.value);
    alert(emp.displayName());
});
