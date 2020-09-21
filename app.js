//var profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

/* .slice() is an array method to return a brand-new array based on "process.argv" starting at the third index 
(i.e., index 2 in the zero-based array), and ending with the final index. It Returns everything from the first 
zero-based index we provide as the first argument up to, but not including the zero-based index we provide 
as the second argument. For more information: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice*/

const profileDataArgs = process.argv.slice(2, process.argv.length); // The "const" keyword is a new feature in JavaScript that allows us to create variables that can't be reassigned a value. 
//console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
// Notice the "=>": this means the expression is an arrow function and replaces the keyword "function" with "=>"
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }
    console.log('================');

    /*
    profileDataArr.forEach(function(profileItem) {
        console.log(profileItem);
    });
    */

    // This the "cleaner" version of the block of code above this function
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);

