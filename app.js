console.log('Starting app.js');

const fs    = require('fs');
const os    = require('os');
const notes = require('./notes');

var res = notes.addNote();
console.log(res);
// var user = os.userInfo();
// // console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) =>{
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });