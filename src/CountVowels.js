/*Question 6: Count Vowels
Write a program that counts the number of vowels in a sentence.*/
function countVowels(sentence){
    const vowels = ['a','e','i','o','u'];
    sentence.toLowerCase();

    let count = 0;
    let unique = [];
    for(let i = 0; i < sentence.length; i++){
        if(vowels.includes(sentence[i]) && !unique.includes(sentence[i])){
            count++
            unique.push(sentence[i]);
        }
    }
    return count;
}
 
 let input = prompt("Enter a sentence: ");
 let count = countVowels(input);
 console.log("The number of vowels is: " + count);
