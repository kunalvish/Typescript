interface Employee {
   
    (fname: string, lname : string) :void;
};


function getName(fname : string, lname: string): void {
    console.log(`${fname} ${lname}`)
}

function updateName(fname : string, lname: string): void {
    console.log(`${fname} ${lname}`)
}

let emp1:Employee = getName;

emp1('Kunal','Vish')

emp1 = updateName;

emp1('xyqe', 'ssss')

interface Employee1 {
    firstname : string;
    lastname : string;
   // city : string;
    //getCity : (city :string) => void;
}

class Employee2 implements Employee1 {
    firstname : string;
    lastname : string;
  //  city : string;

    constructor(fname : string, lname : string){
        this.firstname = fname;
        this.lastname = lname;
    }

  //  getCity(city : string) : void {
  //      this.city = city;
  //  }
}

let emp3 = new Employee2('kunal', 'Vish');

//emp3.getCity('Pune')

console.log(emp3)

