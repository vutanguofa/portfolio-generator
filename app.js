/* Start of lesson 1 */

//var profileDataArgs = process.argv.slice(2, process.argv.length); // this array holds the user command-line arguments.
//console.log(profileDataArgs);

/* .slice() is an array method to return a brand-new array based on "process.argv" starting at the third index 
(i.e., index 2 in the zero-based array), and ending with the final index. It Returns everything from the first 
zero-based index we provide as the first argument up to, but not including the zero-based index we provide 
as the second argument. For more information: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice*/

// const profileDataArgs = process.argv.slice(2, process.argv.length); // The "const" keyword is a new feature in JavaScript that allows us to create variables that can't be reassigned a value. 
// //console.log(profileDataArgs);

// // Notice the lack of parentheses around the `profileDataArr` parameter?
// // Notice the "=>": this means the expression is an arrow function and replaces the keyword "function" with "=>"
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('================');

//     /*
//     profileDataArr.forEach(function(profileItem) {
//         console.log(profileItem);
//     });
//     */

//     // This the "cleaner" version of the block of code above this function
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

//printProfileData(profileDataArgs)
/* End of lesson 1 */




/* Start of lesson 2 */
// const fs = require('fs'); // The require statement is a built-in function that's globally available in Node.js. It allows the app.js file to access the fs module's functions through the fs assignment.
// const profileDataArgs = process.argv.slice(2, process.argv.length); // this array holds the user command-line arguments.
// /*
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// */
// const [name, github] = profileDataArgs; // This code represents the same things as the above block using "assignment descructuring"

// // Using backticks for template literals
// //const generatePage = () => 'Name: Jane, Github: janehub'; // This function returns a string.
// //console.log(generatePage());

// /*
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// */


// // Using muli-lines for the above block of code
// // const generatePage = (userName, githubName) => {
// //     return `
// //       Name: ${userName}
// //       GitHub: ${githubName}
// //     `;
// // };

// //console.log(generatePage('Jane', 'janehub'));
// /*
// const generatePage = () => 'Name: Jane, Github: janehub'; // This function returns a string.
// console.log(name, github);
// console.log(generatePage(name, github));
// */

// // this function will output the included HTML string
// const generatePage = (name, github) => {
//     return `
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//     </head>
  
//     <body>
//       <h1>${name}</h1>
//       <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
// };
// //console.log(name, github);
// //console.log(generatePage(name, github));


// //The first argument is the file name that will be created, or the output file. 
// //The second argument is the data that's being written: the HTML string template. 
// //The third argument is the callback function that will handle any errors as well as the success message.
// fs.writeFile('index.html', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

// End of lesson 2

// Start of lesson 3

const inquirer = require('inquirer');
//console.log(inquirer)
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));