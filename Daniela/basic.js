// Basic exercise 1

// function crystalGazer(job_title, location, partners_name, number_childrens) {
//     return ("You will be a " + job_title + " in " + location + " and married to  " + partners_name + " with " + number_childrens + " children.")
// }
// console.log(crystalGazer("Developer", "Vienna", "no one", "zero"))






// Basic exercise 2


// function ageCalculator(birth_year, current_year) {
//     let age = current_year - birth_year;
//     let age_2 = age + 1;
//     return ("You are either " + age + " " + "or " + age_2 + ".")

// }
// console.log(ageCalculator("1996", "2022"))


// Basic exercise 3

// function ageCalculator(birthYear) {

//     var date = new Date().getFullYear();
//     var age = date - birthYear;
//     var age2 = age + 1;

//     console.log("You are either " + age + " " + "or " + age2 + ".")

// }
// ageCalculator(1996);


// Basic exercise 4

// function radianCalc(degrees) {
//     var formula = (degrees * (Math.PI / 180));
//     console.log(formula);
// }
// radianCalc(90)


// Basic exercise 5

// function box(width, height, depth) {
//     area = width * height;
//     volume = width * height * depth;
//     console.log("The area of the box is: " + area)
//     console.log("The volume of the box is: " + volume)
// }

// box(10, 5, 19)






// Intermediate 1

// (() => {
//     let text = 'i am a web developer';
//     let result = text.charAt(0).toUpperCase();
//     console.log(result + text.slice(1));
// })();


// Intermediate 2

// function classes(Math, Physics, English) {
//     let sum = Math + Physics + English;
//     let average = (Math + Physics + English) / 3;
//     console.log("Sum: " + sum)
//     console.log("Average: " + average)
// }
// classes(1, 5, 3)

// Advanced

// function atmMachine(money) {

//     var hundred = Math.floor(money / 100);
//     var rest = money % 100;
//     var fifty = Math.floor(rest / 50);
//      rest = rest % 50;
//     var twenty = Math.floor(rest / 20);
//      rest = rest % 20;
//     var ten = Math.floor(rest / 10);

//     return `you have ${hundred} 100, ${fifty} 50, ${twenty} 20, ${ten} 10,`;



// }
// console.log(atmMachine(580));

// // *******************************************************************************************************************************

// Challenge

// function time(minutes) {



//     var hours = (minutes / 60);
//     var rhours = Math.floor(hours);
//     var rminutes = minutes % 60;

//     return (minutes + " Minuten sind: " + rhours + " Stunden und " + rminutes + " Minuten.");

// }

// console.log(time(100))