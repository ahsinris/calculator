// function calculator(number) {

//     let result;

//     switch (number) {
//         case (100 <= number && number >= 200):
//             result = number * 1;
// break;
// case (201 <= number && number >= 300):
// result = number * 2;
// break;

// case (301 <= number && number >= 400):
//             result = number * 3;
//             break;

//         case (401 <= number && number >= 500):
//             result = number * 4;
//             break;



//     }

//     return result

// }

// console.log(calculator(105))

// function calculator(operator, num1, num2) {



//     let result;

//     if (!num1 || !num2) {

//         return "kindly enter numbers"
//     }

//     if (operator === "+") {

//         result = num1 + num2;
//     }
//     else if (operator === "-") {
//         result = num1 - num2;
//     }
//     else if (operator === "*") {

//         result = num1 * num2;
//     }

//     else if (operator === "/") {

//         result = num1 / num2;
//     }
//     else {

//         return "invalid operator"

//     }

//     return result;
// }

// console.log(calculator("+", 10, 150))

function reverse_a_number(n) {

    let string = n.toString()

    // console.log(string)

    return string.split("").reverse().join("");
}
console.log((reverse_a_number(32243)));

// const http = require('http');

// const fs = require('fs');

// http.createServer((req, res) => {
//     // console.log(req)

//     res.write("hello rishvan")

//     res.write("\nserver up and running")

//     res.end()

// }).listen(4000)


// fs.open('createfile.txt', 'w', (err, res) => {
//     if (err) {
//         console.log(err, "error msg")
//     }
//     else {
//         console.log(res, "sucess msg")
//     }
// })
// fs.appendFile('appendcreatefile.txt', "ulagil kanum aalganavai anaithirukum avalin  sayal ", (err, res) => {
//     if (err) {
//         console.log(err, "error msg")
//     } else {
//         console.log(res, "sucess msg")
//     }
// })

// fs.writeFile('appendcreatefile.txt', 'metophile', (err, res) => {
//     if (err) {
//         console.log(err, 'error msg')
//     }
//     else {
//         console.log(res, "sucess msg")
//     }
// })
// fs.appendFile('appendcreatefile.txt', '\naval', (err, res) => {

//     if (err) {
//         console.log(err, "error msg")
//     }
//     else {
//         console.log(res, "sucess msg")
//     }
// })


// fs.readFile('appendcreatefile.txt', (err, res) => {

//     if (err) {
//         console.log(err, "error msg")
//     }
//     else {
//         console.log(res.toString(), "sucess msg")
//     }
// })

// fs.unlink('appendcreatefile.txt', (err, res) => {

//     if (err) {
//         console.log(err, "error msg")
//     }
//     else {
//         console.log(res, "sucess msg")
//     }
// })

// fs.writeFile('ris.txt', 'ris', (err, res) => {

//     if (err) {
//         console.log(err, "error msg")
//     }
//     else {
//         console.log(res, "sucess msg")
//     }
// })





