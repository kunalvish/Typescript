export interface User {
    firstname : string;
    lastname: string;
    displayName() : string
}

let user : User =  {

    firstname: 'kunal',
    lastname: 'vish',

    displayName() : string {
        return `${this.firstname} ${this.lastname}`;
    }
}

let getFirstname = (obj : User) => {

    console.log(user.firstname)
}


