
//1. Create an array of 3 student names and add one more using push().
let students = ["Alice", "Bob", "Charlie"];
students.push("David");
console.log(students);

//2. Remove the last item from an array of fruits using pop().
let fruites = ["Apple", "Banana", "Mango"];
fruites.pop();
console.log(fruites);

//3. Add "Monday" to the beginning of a days array using unshift().
let days = ["tuesday", "Wednesday", "Thursday"];
days.unshift("Monday");
console.log(days);
//4. Remove the first item from an array of colors using shift().
let color =["red", "blue", "green"];
color.shift();
console.log(color);

//5. Use splice() to insert "Math" and "Science" at index 2 of a subjects array.
let subjecets = ["English", "History", "Geography"];
subjecets.splice(2, 0, "Math", "Science");
console.log(subjecets);
//6. Use splice() to remove 2 elements starting from index 1 of a cities array.
let cities = ["New York", "Los Angeles", "Chicago", "Houston"];
cities.splice(1, 2);
console.log(cities);
//7. Use slice() to get the first 3 items from a countries array.
let countries = ["USA", "Canada", "Mexico", "Brazil", "Argentina"];
let firstThreeCountries = countries.slice(0, 3);
console.log(firstThreeCountries);
//8. Convert the string "apple,banana,mango" into an array using split().
let fruitsString = "apple,banana,mango";
let fruitsArray = fruitsString.split(",");
console.log(fruitsArray);
//9. Join an array of characters ['J','S'] into a single string using join().
let characters = ['J', 'S'];
let joinedString = characters.join("");
console.log(joinedString);
//10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using concat().
let array1 = ['pen', 'pencil'];
let array2 = ['eraser', 'sharpener'];
let combinedArray = array1.concat(array2);
console.log(combinedArray);
//11. Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).
let numbers = [10, 5, 2, 8];
numbers.sort();
console.log(numbers);
//12. Sort an array of names alphabetically using sort().
let names = ["Charlie", "Alice", "Bob"];
names.sort();
console.log(names);
//13. Reverse the order of an array of numbers using reverse().
let numArray = [1, 2, 3, 4, 5];
numArray.reverse();
console.log(numArray);
//14. Use indexOf() to find the index of "Blue" in a colors array.
let colors = ["Red", "Green", "Blue", "Yellow"];
let indexOfBlue = colors.indexOf("Blue");
console.log(indexOfBlue);
//15. Add three new items to an empty array using push().
let emptyArray = [];
emptyArray.push("Item1", "Item2", "Item3");
console.log(emptyArray);
//16. Remove the middle item from an array of 5 numbers using splice().
let numbersArray = [1, 2, 3, 4, 5];
let middleIndex = Math.floor(numbersArray.length / 2);
numbersArray.splice(middleIndex, 1);
console.log(numbersArray);
//17. Create a string "HTML CSS JavaScript" and convert it to an array using split().
let techString = "HTML CSS JavaScript";
let techArray = techString.split(" ");
console.log(techArray);
//18. Create an array ['a', 'b', 'c'], reverse it, then join it with - in between.
let letters = ['a', 'b', 'c'];
letters.reverse();
let joinedLetters = letters.join("-");
console.log(joinedLetters);

//19. Check if "Karachi" exists in an array using indexOf() and show its index.
let citiesArray = ["Lahore", "Karachi", "Islamabad"];
let indexOfKarachi = citiesArray.indexOf("Karachi");
if (indexOfKarachi !== -1) {
    console.log(`Karachi exists at index: ${indexOfKarachi}`);
}    


//20. Concatenate two arrays of even and odd numbers using concat() and then reverse them. 
let evenNumbers = [2, 4, 6, 8];
let oddNumbers = [1, 3, 5, 7];
let combinedNumbers = evenNumbers.concat(oddNumbers);
//combinedNumbers.reverse();
//console.log(combinedNumbers);






// ALERTS




//1. Write a script to greet your website visitor using JS alert box.
//alert("Welcome to our website!");
 


//2. Write a script to display following message on your web 
//page: 
document.getElementById("message").textContent = "Apna message yahan likhein";


//3. Write a script to display following message on your web 
//page: (Hint : Use line break) 
document.getElementById("line").textContent = "Use line break";


//4. Write a script to display following messages in sequence: 
//Page 1 of 3 
 
//alert("Page 1 of 3");               
  //ALERTS | JAVASCRIPT                                             
//5. Generate the following message through browser’s 
//developer console: 
///console.log("ALERTS | JAVASCRIPT");

//6. Make use of alerts in your new/existing HTML & CSS 
//project. 
//<h1>Welcome to My Website</h1>

    //<button onclick="showMessage()">Click Me</button>

   // <script>
      //  function showMessage() {
            //alert("Welcome Naqeeb!");
      //  }
//</script>


//7. Practice placement of <script></script> element in 
//following sections of your project in exercise 6: 
//a. Head 
//b. Body (before your page’s HTML)  
//c. Body (inside your page’s HTML) 
//d. Body (after your page’s HTML)


//<script>
        //alert("Hello JavaScript");
   // </script>


//1. Declare a variable called username;

   var username;

   //2. Declare a variable called myName & assign to it a string 
//that represents your Full Name.

    var myName = "John Doe";


    ///3. Write script to 
//a) Declare a JS variable, titled message. 
//b) Assign “Hello World” to variable message 
//c) Display the message in alert box. 


var message;
message = "Hello World";
//alert(message);


//4. Write a script to save student’s bio data in JS variables and 
//show the data in alert boxes.


var name = "Naqeeb";
var age = 20;
var course = "JavaScript";
var institute = "SMIT";
var city = "Quetta";

//alert(name);
//alert(age);
//alert(course);
//(institute);
//alert(city);



//5. Write a script to display the following alert using one JS 
//variable: 
var word = "PIZZA";

///alert(
   // word + "\n" +
   // word.slice(0, 3) + "\n" +
   // word.slice(0, 2) + "\n" +
   // word.slice(0, 1) + "\n" +
    //word.slice(0, 0)
//);






//6. Declare a variable called email and assign to it a string that 
//represents your Email Address(e.g. example@example.com). 
//Show the blow mentioned message in an alert box.(Hint: use 
//string concatenation) 

var email = "example@example.com";
//alert("Your email address is: " + email); 


//7. Declare a variable called book & give it the value “A 
///smarter way to learn JavaScript”. Display the following 
//message in an alert box: 

var book = "A smarter way to learn JavaScript";
//alert("I am trying to learn from the book: " + book);


//8. Write a script to display this in browser through JS

//document.getElementById("display").textContent = "This is displayed through JavaScript";








//03


//1. Declare a variable called age & assign to it your age. Show 
///your age in an alert box.

var age = 25;
alert("I am " + age + " years old.");

//2. Declare & initialize a variable to keep track of how many 
//times a visitor has visited a web page. Show his/her 
//number of visits on your web page. For example: “You 
//have visited this site N times”. 

var visitCount = 0;
visitCount++;
alert("You have visited this site " + visitCount + " times.");


//3. Declare a variable called birthYear & assign to it your 
//birth year. Show the following message in your browser: 


var birthYear = 1990;
alert("My birth year is " + birthYear + ".");



//4. A visitor visits an online clothing store 
//www.xyzClothing.com . Write a script to store in variables 
//the following information: 
//b. Product title 
//c. Quantity i.e. how many products a visitor wants to 
//order 
//Show the following message in your browser: “John 
//Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 

let customerName = "John Doe";
let productTitle = "T-shirt";
let quantity = 5;

alert(customerName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");






//04

//1. Declare 3 variables in one statement. 

//let name, age, city;



//2. Declare 5 legal & 5 illegal variable names. 
//let username;
//let studentName;
//let age;
//let _price;
//let $amount;

//let 123name;
//let my-name;
//let user name;
//let @price;
//let var;



//3. Display this in your browser 
//a)  A heading stating “Rules for naming JS variables” 
//b)  Variable names can only contain ______, ______, 
//______ and ______. 
//For example $my_1stVariable 
//c) Variables must begin with a ______, ______ or 
///_____. For example $name, _name or name 
//d) Variable names are case _________ 
//e) Variable names should not be JS _________  





document.write("<h1>Rules for naming JS variables</h1>");

document.write("Variable names can only contain numbers, $, and _. For example $my_1stVariable<br>");

document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br>");

document.write("Variable names are case sensitive<br>");

document.write("Variable names should not be JS keywords");



//05

//1. Write a program that take two numbers & add them in a 
//new variable. Show the result in your browser.  

// Question 1: Addition

let num1 = 10;
let num2 = 5;

let sum = num1 + num2;

document.write("Addition: " + sum + "<br>");
//2. Repeat task1 for subtraction, multiplication, division & 
//modulus. 

// Question 2: Subtraction

let sub = num1 - num2;

document.write("Subtraction: " + sub + "<br>");


// Multiplication

let mul = num1 * num2;

document.write("Multiplication: " + mul + "<br>");


// Division

let div = num1 / num2;

document.write("Division: " + div + "<br>");


// Modulus

let mod = num1 % num2;

document.write("Modulus: " + mod);




//3. Do the following using JS Mathematic Expressions 
//a. Declare a variable. 
//b. Show the value of variable in your browser like “Value 
//after variable declaration is: ??”. 
//c. Initialize the variable with some number. 
//d. Show the value of variable in your browser like “Initial 
//value: 5”. 
//e. Increment the variable. 
//f. Show the value of variable in your browser like “Value 
//after increment is: 6”. 
//g. Add 7 to the variable. 
//h. Show the value of variable in your browser like “Value 
//after addition is: 13”. 
//i. Decrement the variable. 
//j. Show the value of variable in your browser like “Value 
//after decrement is: 12”. 
//k. Show the remainder after dividing the variable’s value 
//by 3.  
//l. Output : “The remainder is : 0”.


// a. Declare a variable

let number;


// b. Show the value

document.write("Value after variable declaration is: " + number + "<br>");


// c. Initialize the variable

number = 5;


// d. Show initial value

document.write("Initial value: " + number + "<br>");


// e. Increment the variable

number++;


// f. Show value after increment

document.write("Value after increment is: " + number + "<br>");


// g. Add 7 to the variable

number = number + 7;


// h. Show value after addition

document.write("Value after addition is: " + number + "<br>");


// i. Decrement the variable

number--;


// j. Show value after decrement

document.write("Value after decrement is: " + number + "<br>");


// k. Divide variable by 3 and find remainder

let remainder = number % 3;


// l. Show remainder

document.write("The remainder is: " + remainder);


//4. Cost of one movie ticket is 600 PKR. Write a script to 
//store 
//ticket price in a variable & calculate the cost of buying 5 
//tickets 
//to a movie. Example output: 

let ticketPrice = 600;

let totalCost = ticketPrice * 5;

document.write("Total cost of 5 tickets is: " + totalCost + " PKR");



//5. Write a script to display multiplication table of any 
//number in your browser. E.g

number = 4;

for (let multiplier = 1; multiplier <= 10; multiplier++) {
  document.write(number + " x " + multiplier + " = " + number * multiplier + "<br>");
}

//6. The Temperature Converter: It’s hot out! Let’s make a 
//converter based on the steps here. 
//a.  Store a Celsius temperature into a variable. 
//b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
//c. Now store a Fahrenheit temperature into a variable. 
//d. Convert it to Celsius & output “NNoF is NNoC”. 
//Conversion Formulae: 

// a. Store Celsius temperature

let celsius = 25;


// b. Convert Celsius to Fahrenheit

let fahrenheit = (celsius * 9/5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br>");


// c. Store Fahrenheit temperature

let tempFahrenheit = 70;


// d. Convert Fahrenheit to Celsius

let tempCelsius = (tempFahrenheit - 32) * 5/9;

document.write(tempFahrenheit + "°F is " + tempCelsius + "°C");




//7.  Write a program to implement checkout process of a 
//shopping cart system for an e-commerce website. Store 
//he following in variables 
//Page 4 of 9 
//MATH EXPRESSIONS | JAVASCRIPT 
//a. Price of item 1 
//b. Price of item 2 
//c. Ordered quantity of item 1 
//d. Ordered Quantity of item 2 
//e. Shipping charges 
//Compute the total cost & show the receipt in your browser. 


// a. Price of item 1

let priceItem1 = 500;


// b. Price of item 2

let priceItem2 = 300;


// c. Ordered quantity of item 1

let quantityItem1 = 2;


// d. Ordered quantity of item 2

let quantityItem2 = 3;


// e. Shipping charges

let shippingCharges = 200;


// Calculate total cost

let totalItem1 = priceItem1 * quantityItem1;

let totalItem2 = priceItem2 * quantityItem2;

 totalCost = totalItem1 + totalItem2 + shippingCharges;


// Show receipt in browser

document.write("Price of Item 1: " + totalItem1 + "<br>");

document.write("Price of Item 2: " + totalItem2 + "<br>");

document.write("Shipping Charges: " + shippingCharges + "<br>");

document.write("Total Cost: " + totalCost);


//8. Store total marks & marks obtained by a student in 2 
//variables. Compute the percentage & show the result in 
//your browser

// Store total marks

let totalMarks = 500;


// Store obtained marks

let obtainedMarks = 400;


// Calculate percentage

let percentage = (obtainedMarks / totalMarks) * 100;


// Show result in browser

document.write("Total Marks: " + totalMarks + "<br>");

document.write("Obtained Marks: " + obtainedMarks + "<br>");

document.write("Percentage: " + percentage + "%");


//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
//script to convert the total currency to Pakistani Rupees. 
//Perform all calculations in a single expression. 
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
//and 1 Saudi Riyal = 28 Pakistani Rupee)

// Store US Dollars

let usDollars = 10;


// Store Saudi Riyals

let saudiRiyals = 25;


// Convert total currency into Pakistani Rupees

let totalPKR = (usDollars * 104.80) + (saudiRiyals * 28);


// Show result in browser

document.write("Total Currency in PKR: " + totalPKR);


//10. Write a program to initialize a variable with some 
//number and do arithmetic in following sequence: 
//a. Add 5 
//b. Multiply by 10 
//c. Divide the result by 2 
//Perform all calculations in a single expression

 number = 10;
let result = ((number + 5) * 10) / 2;
document.write("Result: " + result);



//11. The Age Calculator: Forgot how old someone is? 
//Calculate it! 
//a. Store the current year in a variable. 
//b. Store their birth year in a variable. 
//c. Calculate their 2 possible ages based on the stored 
//values. 
//Output them to the screen like so: “They are either NN or NN 
//years old”.


// a. Store current year

let currentYear = 2024;

// b. Store birth year

//let birthYear = 1990;

// c. Calculate possible ages

let age1 = currentYear - birthYear;

let age2 = age1 - 1;

// Output possible ages

document.write("They are either " + age1 + " or " + age2 + " years old.");



//12. The Geometrizer: Calculate properties of a circle. 
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and 
//output “The circumference is NN”. 
//(Hint : Circumference of a circle = 2 π r , π = 3.142) 
//Calculate the area based on the radius, and output “The 
//area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// a. Store a radius into a variable.

let radius = 5;

// b. Calculate the circumference based on the radius, and 
//output “The circumference is NN”. 

let circumference = 2 * 3.142 * radius;

// Calculate the area based on the radius, and output “The 
//area is NN”.

let area = 3.142 * radius * radius;

// Show results in browser

document.write("The circumference is " + circumference + "<br>");

document.write("The area is " + area + "<br>");

//13. The Lifetime Supply Calculator: Ever wonder how 
//much a “lifetime supply” of your favorite snack is? 
//Wonder no more. 
//a. Store your favorite snack into a variable 
//b. Store your current age into a variable. 
//c. Store a maximum age into a variable. 
//d. Store an estimated amount per day (as a number). 
//e. Calculate how many would you eat total for the rest of 
//your life. 
//Output the result to the screen like so: “You will need 
//NNNN to last you until the ripe old age of NN”.



// a. Store your favorite snack

let favoriteSnack = "Chips";


// b. Store your current age

let currentAge = 20;


// c. Store maximum age

let maxAge = 80;


// d. Store estimated amount per day

let amountPerDay = 2;


// e. Calculate lifetime supply

let totalSupply = (maxAge - currentAge) * 365 * amountPerDay;


// Output result

document.write("You will need " + totalSupply + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);

 totalSupply = (maxAge - currentAge) * 365 * amountPerDay;






 //06


//1. Write a program to take a number in a variable, do the 
//required arithmetic to display the following result in your 
//browser: 

let a = 10;

document.write("The value of a is: " + a + "<br>");
document.write("........................................<br><br>");

// Pre-Increment

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-Increment

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-Decrement

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-Decrement

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a);

a = 10;

document.write(++a);
 a = 10;

document.write(a++);

//2. What will be the output in variables a, b & result after 
//execution of the following script: 
//var a = 2, b = 1; 
//var result = --a - --b + ++b + b--; 
//Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--



 //a = 2, b = 1;

 //result = --a - --b + ++b + b--;

//document.write("a is: " + a + "<br>");
//document.write("b is: " + b + "<br>");
//document.write("result is: " + result);


//3. Write a program that takes input a name from user & 
//greet the user. 


let userName = prompt("Please enter your name:");
document.write("Hello, " + userName + "! Nice to meet you!");



//5. Write a program to take input a number from user & 
//display it’s multiplication table on your browser. If user 
//does not enter a new number, multiplication table of 5 
//should be displayed by default.



 number = prompt("Enter a number");

if (number === "" || number === null) {
    number = 5;
}

number = Number(number);

document.write("<h2>Multiplication Table of " + number + "</h2>");

document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10));




//6. Take 
//a) Take three subjects name from user and store them in 3 
//different variables. 
//b) Total marks for each subject is 100, store it in another 
//variable. 
//c) Take obtained marks for first subject from user and 
//stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user 
//and store them in variables. 
//e) Now calculate total marks and percentage and show the 
//result in browser like this.(Hint: user table)


let subject1 = Number(prompt("Enter marks of Subject 1"));
let subject2 = Number(prompt("Enter marks of Subject 2"));
let subject3 = Number(prompt("Enter marks of Subject 3"));

 totalMarks = 300;

 obtainedMarks = subject1 + subject2 + subject3;

 percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h2>Marks Sheet</h2>");

document.write("Total Marks: " + totalMarks + "<br>");

document.write("Obtained Marks: " + obtainedMarks + "<br>");

document.write("Percentage: " + percentage + "%");






//07


//1. Write a program to take “city” name as input from user. If 
//user enters “Karachi”, welcome the user like this: 
//“Welcome to city of lights” 

let cityName = prompt("Enter city name:");

if (cityName.toLowerCase() === "karachi") {
    document.write("Welcome to city of lights");
} else {
    document.write("Welcome to " + cityName);
}



//2. Write a program to take “gender” as input from user. If the 
//user is male, give the message: Good Morning Sir. If the 
//user is female, give the message: Good Morning Ma’am. 


let gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    document.write("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    document.write("Good Morning Ma’am");
} else {
    document.write("Invalid input");
}




//3. Write a program to take input color of road traffic signal 
//from the user & show the message according to this table: 
//Signal color  
//Red 
//Yellow 
//Green 
//Message 
//Must Stop 
//Ready to move 
//Move now


let signalColor = prompt("Enter the color of the traffic signal (Red/Yellow/Green):");

if (signalColor.toLowerCase() === "red") {
    document.write("Must Stop");
}
    else if (signalColor.toLowerCase() === "yellow") {
        document.write("Ready to move");
    }
    else if (signalColor.toLowerCase() === "green") {
        document.write("Move now");
    } else {
        document.write("Invalid color");
    }





    //4. Write a program to take input remaining fuel in car (in 
//litres) from user. If the current fuel is less than 0.25litres, 
//show the message “Please refill the fuel in your car”


let remainingFuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));

if (remainingFuel < 0.25) {
    document.write("Please refill the fuel in your car");
}


//5. Run this script, & check whether alert message would be 
//displayed or not. Record the outputs. 
//a. var a = 4; 
//if (++a === 5){ 
//alert("given condition for variable a is true"); 
//} 
//Page 1 of 4 
//User Input & Conditional Statement | JAVASCRIPT 
//b. var b = 82; 
//if (b++ === 83){ 
//alert("given condition for variable b is true"); 
//} 
//c. var c = 12; 
//if (c++ === 13){ 
//alert("condition 1 is true"); 
//} 
//if (c === 13){ 
//alert("condition 2 is true"); 
//} 
//if (++c < 14){ 
//alert("condition 3 is true"); 
//} 
//if(c === 14){ 
//alert("condition 4 is true"); 
//} 
//d. var materialCost = 20000; 
//var laborCost = 2000; 
//var totalCost = materialCost + laborCost; 
//if (totalCost === laborCost + materialCost){ 
//      alert("The cost equals"); 
//} 
//e. if (true){ 
//alert("True"); 
//} 
//if (false){ 
//alert("False"); 
//} 
//Page 2 of 4 
//User Input & Conditional Statement | JAVASCRIPT 
//f. if("car" < "cat"){ 
//alert("car is smaller than cat"); 
//}




// a.
 a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}


// b.
let b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}


// c.
let c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}


// d.
let materialCost = 20000;
let laborCost = 2000;
 totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}


// e.
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}


// f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}
  




//6. Write a program to take input the marks obtained in three 
//subjects & total marks. Compute & show the resulting 
//percentage on your page. Take percentage & compute 
//grade as per following table: 
//Show the total marks, marks obtained, percentage, grade & 
//remarks like: 


let marksSubject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
let marksSubject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
let marksSubject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
 totalMarks = parseFloat(prompt("Enter total marks:"));



 //7. Guess game: 
//S//tore a secret number (ranging from 1 to 10) in a variable. 
//Prompt user to guess the secret number. 
//a. If user guesses the same number, show “Bingo! Correct 
//answer”. 
//b. If the guessed number +1 is the secret number, show 
//“Close enough to the correct answer”.




let secretNumber = 7;

let guessNumber = Number(prompt("Guess the secret number (1 to 10)"));

if (guessNumber === secretNumber) {
    alert("Bingo! Correct answer");
}

else if (guessNumber + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}



//8. Write a program to check whether the given number is 
//divisible by 3. Show the message to the user if the number 
//is divisible by 3.


 number = Number(prompt("Enter a number:"));

if (number % 3 === 0) {
    alert("The number is divisible by 3.");
} else {
    alert("The number is not divisible by 3.");
}


//9. Write a program that checks whether the given input is an 
//even number or an odd number.


let inputNumber = Number(prompt("Enter a number:"));

if (inputNumber % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}


//10. Write a program that takes temperature as input and 
//shows a message based on following criteria 
//a. T > 40 then “It is too hot outside.” 
//b. T > 30 then “The Weather today is Normal.” 
//c. T > 20 then “Today’s Weather is cool.” 
//  d. T > 10 then “OMG! Today’s weather is so Cool.”

let temperature = Number(prompt("Enter the temperature:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
}


//11.Write a program to create a calculator for +,-,*, / & % 
//using if statements. Take the following input: 
//a. First number 
//b. Second number 
//c. Operation (+, -, *, /, %) 
//Compute & show the calculated result to user. 


 num1 = Number(prompt("Enter first number"));

 num2 = Number(prompt("Enter second number"));

let operator = prompt("Enter operation (+, -, *, /, %)");

 result;

if (operator === "+") {
    result = num1 + num2;
    alert("Addition: " + result);
}

else if (operator === "-") {
    result = num1 - num2;
    alert("Subtraction: " + result);
}

else if (operator === "*") {
    result = num1 * num2;
    alert("Multiplication: " + result);
}

else if (operator === "/") {
    result = num1 / num2;
    alert("Division: " + result);
}

else if (operator === "%") {
    result = num1 % num2;
    alert("Modulus: " + result);
}

else {
    alert("Invalid Operation");
}




//08



//1. Write a program that takes a character (number or string) 
//in a variable & checks whether the given input is a 
//number, uppercase letter or lower case letter. (Hint: ASCII 
//codes:- A=65, Z=90, a=97, z=122). 


let inputChar = prompt("Enter a character:");

let charCode = inputChar.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    alert("The input is a number.");
} else if (charCode >= 65 && charCode <= 90) {
    alert("The input is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
    alert("The input is a lowercase letter.");
} else {
    alert("The input is not a number or a letter.");
}



//2. Write a JavaScript program that accept two integers and 
//display the larger. Also show if the two integers are equal. 


 num1 = Number(prompt("Enter first integer:"));
 num2 = Number(prompt("Enter second integer:"));

if (num1 > num2) {
    alert("The larger number is: " + num1);
} else if (num2 > num1) {
    alert("The larger number is: " + num2);
} else {
    alert("Both numbers are equal.");
}   




//3. Write a program that takes input a number from user & 
//state whether the number is positive, negative or zero. 


 number = Number(prompt("Enter a number:"));

if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}   


//4. Write a program that takes a character (i.e. string of 
//length 1) and returns true if it is a vowel, false otherwise


let char = prompt("Enter a character:");

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert("The character is a vowel.");
} else {
    alert("The character is not a vowel.");
}


//5. Write a program that 
//a. Store correct password in a JS variable. 
//b.  Asks user to enter his/her password 
//c.  Validate the two passwords: 
//i. 
//Check if user has entered password. If not, then 
//give message “ Please enter your password” 
//ii. 
//Check if both passwords are same. If they are 
//same, show message “Correct! The password you 
//entered matches the original password”. Show 
//“Incorrect password” otherwise. 




let correctPassword = "12345";

let userPassword = prompt("Enter your password");

if (userPassword === "") {
    alert("Please enter your password");
}

else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
}

else {
    alert("Incorrect password");
}




//6. This if/else statement does not work. Try to fix it: 
//var greeting; 
var hour = 13; 
if (hour < 18) { 
//greeting = "Good day"; 
} else {
//greeting = "Good evening"; 
}



let greeting;
//let hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

document.write(greeting);





//7. Write a program that takes time as input from user in 24 
//hours clock format like: 1900 = 7pm. Implement the 
//following case using if, else & else if statements

// User se 24-hour format mein input lene ke liye
let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));

// Flowchart ki conditions ke mutabiq if, else if, else statements
if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} 
else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} 
else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} 
else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
} 
else {
    console.log("Invalid time entered!");
}





//09

//1. Declare an empty array using JS literal notation to store 
//student names in future. 


var studentNames = [];
console.log(studentNames);

//2. Declare an empty array using JS object notation to store 
//student names in future. 

var studentNames = [];
console.log(studentNames);

//3. Declare and initialize a strings array.
var studentNames = ["Alice", "Bob", "Charlie"];
console.log(studentNames);



//4.  Declare and initialize a numbers array.
letnumbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);



//5.  Declare and initialize a boolean array. 
let booleanArray = [true, false, true];
console.log(booleanArray);


//6. Declare and initialize a mixed array. 
let mixedArray = ["Alice", 25, true];
console.log(mixedArray);



//7. Declare and Initialize an array and store available 
//education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
//BS, BCOM, MS, M. Phil., PhD). Show the listed 
//qualifications in your browser like:
//qualifications:
//ssc
//hsc
//bcs
//bs    
//bcom
//ms
// m phil
//phd


let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log(qualifications);


//8. Write a program to store 3 student names in an array.Take 
//another array to store score of these three students. 
//Assume that total marks are 500 for each student, display 
//the scores & percentages of students like: 


// score of michael is 320. Percentage: 64%
// score of john is 230. Percentage: 46%
// score of tony is 480. Percentage: 96%


let studentNames = ["Michael", "John", "Tony"];
let scores = [320, 230, 480];
 totalMarks = 500;

for (let i = 0; i < studentNames.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    console.log(`Score of ${studentNames[i]} is ${scores[i]}. Percentage: ${percentage.toFixed(2)}%`);
}




//9. Initialize an array with color names. Display the array 
//elements in your browser. 
//a. Ask the user what color he/she wants to add to the 
//beginning & add that color to the beginning of the array. 
//Display the updated array in your browser. 
//b. Ask the user what color he/she wants to add to the end 
//& add that color to the end of the array. Display the 
//updated array in your browser. 
//c. Add two more color to the beginning of the array. 
//Display the updated array in your browser. 
//d. Delete the first color in the array. Display the updated 
//array in your browser. 
//e. Delete the last color in the array. Display the updated 
//array in your browser. 
//f. Ask the user at which index he/she wants to add a color 
//& color name. Then add the color to desired 
//position/index. . Display the updated array in your 
//browser. 
//g. Ask the user at which index he/she wants to delete 
//color(s) & how many colors he/she wants to delete. Then
//remove the same number of color(s) from user-defined 
//position/index. . Display the updated array in your 
//browser.


// 9. Initialize an array with color names
 colors = ["Red", "Green", "Blue"];

document.write(colors + "<br>");

// a. Add color to the beginning
let color1 = prompt("Which color do you want to add at the beginning?");

colors.unshift(color1);

document.write(colors + "<br>");

// b. Add color to the end
let color2 = prompt("Which color do you want to add at the end?");

colors.push(color2);

document.write(colors + "<br>");

// c. Add two more colors to the beginning
colors.unshift("Yellow", "Orange");

document.write(colors + "<br>");

// d. Delete the first color
colors.shift();

document.write(colors + "<br>");

// e. Delete the last color
colors.pop();

document.write(colors + "<br>");

// f. Add color at user-defined index
let index = +prompt("At which index do you want to add a color?");
let newColor = prompt("Enter color name:");

colors.splice(index, 0, newColor);

document.write(colors + "<br>");

// g. Delete colors from user-defined index
let deleteIndex = +prompt("At which index do you want to delete colors?");
let deleteCount = +prompt("How many colors do you want to delete?");

colors.splice(deleteIndex, deleteCount);

document.write(colors + "<br>");






















//10. Write a program to store student scores in an array & 
//sort the array in ascending order using Array’s sort 
//method.
// score of students.  320, 230,480, 120  
// ordered score of students. 120, 230, 320, 480

let studentScores = [320, 230, 480, 120];
console.log("Scores of students: " + studentScores);   






//11. 
//Write a program to initialize an array with city names. 
//Copy 3 array elements from cities array to selectedCities 
//array.
// cities list:
//karachi, lahore, islamabad, quetta, peshawar
// selected cities list:
//islamabad, quetta



 cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(2, 5); // Copy elements from index 2 to 4
console.log("Selected cities: " + selectedCities);




//12.  Write a program to create a single string from the 
//below mentioned array: 
//var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
//(Use array’s join method)
// Array:
// this, is, my, cat
//string:
// This is my cat


var arr = ["This ", " is ", " my ", " cat"];
result = arr.join("");
console.log("Combined string: " + result);



//13. Create a new array. Store values one by one in such a way 
//that you can access the values in the order in which they 
//were stored. (FIFO-First In First Out)

 students = [];

students.push("Ali");
students.push("Ahmed");
students.push("Naqeeb");

console.log(students);

console.log(students.shift());

console.log(students);




//14. Create a new array. Store values one by one in such a way 
//that you can access the values in reverse order. (Last In
//First Out) 


let lifoArray = [];

lifoArray.push("Ali");
lifoArray.push("Ahmed");
lifoArray.push("Naqeeb");

console.log(lifoArray);

console.log(lifoArray.pop());

console.log(lifoArray);     





//15. Write a program to store phone manufacturers (Apple, 
//Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//Display the following dropdown/select menu in your 
//browser using document.write() method:

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");        


