"use strict";
var employeetype;
(function (employeetype) {
    employeetype[employeetype["fulltime"] = 0] = "fulltime";
    employeetype[employeetype["intern"] = 1] = "intern";
    employeetype[employeetype["parttime"] = 2] = "parttime";
    employeetype[employeetype["contractor"] = 3] = "contractor";
})(employeetype || (employeetype = {}));
const myemp1 = {
    id: 1,
    emptype: employeetype.fulltime,
    data: {
        joiningdate: '21-01-2021'
    }
};
const myemp2 = {
    id: 2,
    emptype: employeetype.intern,
    data: {
        internperiod: '6 months'
    }
};
const myemp3 = {
    id: 3,
    emptype: employeetype.contractor,
    data: {
        lastdate: '01-01-2021'
    }
};
console.log(myemp1);
console.log(myemp2);
console.log(myemp3);
