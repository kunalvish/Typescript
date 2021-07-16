let user = {
    firstname: 'kunal',
    lastname: 'vish',
    displayName() {
        return `${this.firstname} ${this.lastname}`;
    }
};
let getFirstname = (obj) => {
    console.log(user.firstname);
};
export {};
