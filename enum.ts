enum employeetype {fulltime, intern, parttime, contractor}

interface employee {
    id : number;
    emptype : employeetype;
    data : object;
}

const myemp1 : employee = {

    id : 1,
    emptype : employeetype.fulltime,
    data : {
        joiningdate : '21-01-2021'
    }
}


const myemp2 : employee = {

    id : 2,
    emptype : employeetype.intern,
    data : {
        internperiod : '6 months'
    }
}


const myemp3 : employee = {

    id : 3,
    emptype : employeetype.contractor,
    data : {
        lastdate : '01-01-2021'
    }
}

console.log(myemp1)
console.log(myemp2)
console.log(myemp3)
