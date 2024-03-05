/*Question 4: Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the
string, and then returns the result string.*/

function capitalizeFirstLetter(word){
    let str = word.split(" ");

    for(let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    let result = str.join(" ");
    return result;
}

let inputStr = prompt("Enter a string: ");
let frstLtrCap = capitalizeFirstLetter(inputStr);
console.log("The result is: " + frstLtrCap);