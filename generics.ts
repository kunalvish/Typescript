const randomEmpid = (obj : object) => {
    let empid = Math.random() * 100
    return {empid, ...obj}
}

let emp_1 = randomEmpid({name : 'Kunal', city : 'Pune'})

//console.log(emp_1.name)


const randomEmpid1 = <T extends object>(obj : T) => {
    let empid = Math.random() * 100
    return {empid, ...obj}
}

let emp_11 = randomEmpid1({name : 'Kunal', city : 'Pune'})


console.log(emp_11.name)

const randomEmpid2 = <T extends {name : string}>(obj : T) => {
    let empid = Math.random() * 100
    return {empid, ...obj}
}

let emp_12 = randomEmpid2({name : 'Kunal', city : 'Pune'})

console.log(emp_12.name)

interface empinterface <T>{
    empid : number;
    name : string;
    data : T;
}

const empin1 : empinterface<string> = {
    empid :1,
    name : 'Kunal',
    data : 'Pune'
}

const empin2 : empinterface<string[]> = {
    empid :1,
    name : 'Kunal',
    data : ['Pune','Delhi']
}
