
var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var createdAt = 1234;
var date = moment(createdAt);
// date.add(100, 'year');
// console.log(date.format('MMM Do, YYYY'));
console.log(date.format('H:mm'));