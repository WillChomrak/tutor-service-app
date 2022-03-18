// Creating full schedule of date objects
let baseDate = new Date(0);
let baseDateAddOne = new Date(0);
 // This sets to my time zone - I should actually start this at the first hr.. 7 or whatever
console.log(new Date(baseDate.setHours(0,0,0,0)));
// now I want to loop to add 3 mins
// baseDate.setHours(0,90,0,0) // ok so this tells me excess minutes will be rounded up to hours. beautiful.
// console.log(baseDate);
console.log("-----------------------");

let availArray = [];

for (let i = 0; i < 12; i++) {
    // baseDate.setHours(7,0,0,0);
    baseDate.setHours(7 + i, 0, 0, 0);
    baseDateAddOne.setHours(8 + i, 0, 0, 0);
    let newTime = baseDate.toString();
    let newTimeAddOne = baseDateAddOne.toString();
    let timeTuple = [newTime, newTimeAddOne];
    // console.log(timeTuple);
    availArray.push(timeTuple); //(new Date(newTime));

    // another way - seems less efficient
    // availArray.push(baseDate.toString());
    // availArray[i] = new Date(availArray[i]);
    // wait this didn't work - it's only giving the last num in all the values...?
}
console.log(new Date(availArray[0][0]).getHours());
let string = `
'Wed Dec 31 1969 00:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 00:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 01:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 01:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 02:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 02:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 03:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 03:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 04:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 04:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 05:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 05:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 06:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 06:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 07:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 07:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 08:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 08:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 09:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 09:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 10:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 10:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 11:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 11:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 12:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 12:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 13:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 13:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 14:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 14:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 15:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 15:30:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 16:00:00 GMT-0500 (Eastern Standard Time)',
'Wed Dec 31 1969 16:30:00 GMT-0500 (Eastern Standard Time)'
  `
// console.log(string.replaceAll(`'`, `"`));

// _________________________________________________________________________________________
// Date testing

// const dateString = "2022-01-21T00:01:13.000Z"
// console.log("date string: ", dateString);
// const dateObject = new Date(0);
// console.log("Date: ", dateObject)
// // console.log("day of month: ", dateObject.getDate())
// // dateObject.setDate(14);
// // console.log("day of month: ", dateObject.getDate())
// // console.log("day of week: ", dateObject.getDay())
// // console.log("month: ", dateObject.getMonth())
// // console.log("Year: ", dateObject.getFullYear())

// // Ok so I need to do this with the setHours(), setMinutes(), setSeconds(), and setMilliseconds() functions
// dateObject.setHours(10,1,0,0);
// console.log("set hours: ", dateObject);
// console.log("Time zone offset in min: ", dateObject.getTimezoneOffset()) // So all dates are displayed in Grenwich mean time?
// // console.log("Date time to 0: ", dateObject.setHours(0,0,0,0).toString())
// const mill = dateObject.setHours(1,0,0,0);
// console.log("mill: ", mill);
// console.log(new Date(mill))

// console.log("___________________________________________");

// // let dateObject = new Date("2022-01-21T00:01:13.000Z");
// // dateObject.setHours(10,1,0,0);
// // console.log("set hours: ", dateObject)


// let dateZero = new Date("2022-01-21T00:01:13.000Z");
// console.log("date zer0: ", dateZero);

// dateZero.setHours(1, 3, 5, 7);

// console.log("date zero set hour", dateZero);
