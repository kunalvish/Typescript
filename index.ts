import { Emp } from './Employeeclass.js'
import { User } from './userinterface.js'

const fname = document.querySelector('#firstname') as HTMLInputElement;
const lname = document.querySelector('#lastname') as HTMLInputElement;
const city = document.querySelector('#city') as HTMLInputElement;
const state = document.querySelector('#state') as HTMLInputElement;
const f = document.querySelector('form');

f && f.addEventListener('submit', (e) => {

    e.preventDefault();

    let emp :User;

    emp = new Emp(fname.value, lname.value, city.value, state.value);

    alert(emp.displayName());
    
});

