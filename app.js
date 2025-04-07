
//FROM FEBRUARY 24TH, 2025 MATT HUNTINGTON CLASS --FIRST TIME CREATING FUNCTIONS
//from first week at GA in Matt Huntington's Class
/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

// ANSWER
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

// ANSWER
function isAdult(age){
    if (age >= 21){
        return 'isAdult';
    } else (age < 21)
        return 'isMinor';
    
}

console.log('Exercise 2 Result:', isAdult(18));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

// ANSWER
/* FIRST ATTEMPT: I'm trying to write this one as simply and clearly as possible. 
It comes out as true when type in a vowel; however, it doesn't say false otherwise when I debug troubleshoot.)*/

// function isCharAVowel(char){
//     if (char === 'a', 'e', 'i', 'o', 'u'){
//         return true;
//      } else {
//         return false;
//      }
     
//     }
// console.log('Exercise 3 Result:', isCharAVowel("a"));


/*SECOND ATTEMPT: switched out the info after if statement. I believe that is more correct. But when I type in "z" in console.log,
it still comes out at true. */

//     function isCharAVowel(char){
//         if (char === 'a' || 'e'|| 'i'|| 'o'|| 'u'){
//             return true;
//         } else {
//              return false;
//  }
// }
// console.log('Exercise 3 Result:', isCharAVowel("a"));

/* THIRD ATTEMPT  - for this one, I asked chapgpt what was wrong with my code. It gave me a lot of convoluted answers
But this one made the most sense to me. I needed to define what char was for each vowel. For the console.log, when I ran it with "z", it came out false. Yay!
 I also wonder if there is a simpler and easier way to do this. But I'm running out of time for the assignment.
 THE CORRECT ONE!!!! THAT WORKED!!! YAY!*/

function isCharAVowel(char){
    if (char === 'a' || char === 'e'|| char === 'i'|| char === 'o'|| char === 'u'){
        return true;
    } else {
        return false;
}
}
console.log('Exercise 3 Result:', isCharAVowel("z"));
console.log('Exercise 3 Result:', isCharAVowel("a"));


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

/* FIRST ATTEMPT - SAYS LINE 116 is invalid.*/
//     function generateEmail(name, domain){
//         if (name === 'name' && domain === 'domain') {
//             return name@domain;
//         }

//     }
// console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


/* Second ATTEMPT  - my terminal says undefined. When I researched it, 
I guess my name === 'name' is searching for 'name' instead of name like "johnsmith"*/
// function generateEmail(name, domain){
//     if (name === 'name' && domain === 'domain') {
//         return name + '@' + domain;
//     }

// }
// console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


/* THIRD ATTEMPT - IT WORKED!!! YAY!!!! This is fun when it works :) */
function generateEmail(name, domain){
        return name + '@' + domain;
    }

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));



/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

/* FIRST BEGINNING OF ATTEMPT, BUT THEN REALIZED NEEDED TO CHANGE PARAMETERS.*/
// function greetUser (name, morning, afternoon, evening){
//     if 
// }
// console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/* ADDTL FIRST ATTEMPT. I made changes along the way as I typed node app.js in terminal. I think it worked! :)*/
// function greetUser (name, timeOfTheDay){
//     if (timeOfTheDay === 'morning') {
//         return `Good morning, ${name}!`;
//     } else if (timeOfTheDay === 'afternoon') {
//         return `Good afternoon, ${name}!`;
//     } else if (timeOfTheDay === 'evening') {
//         return `Good evening, ${name}!`;
//     } else {
//         return `Hello, ${name}!`; // Default if timeOfDay is not recognized
//     }
// }
// console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

(my notes: this is asking to compare three numbers and choose the largest number.)

Complete the exercise in the space below:
*/

/* YAY! I'M GETTING THIS!!!!*/
function maxOfThree (num1, num2, num3){
    if (num1 >= num2 && num1 >= num3) {
        return num1;  
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;  
    } else {
        return num3; 
}
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/* MY INTERNET WAS IN AND OUT ALL DAY AND EVENING YESTERDAY. THIS WAS THE MOST I COULD GET DONE DUE TO INTERNET.
GOING TO TRY AND FINISH THESE EXERCISES EITHER LATER TODAY OR THIS WEEKEND. */