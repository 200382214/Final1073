/*
  !!!-- INSTRUCTIONS -- !!!
  Follow the steps closely. Marks are for correct syntax and execution.
  DO NOT remove the commenting in the file. Removing the commenting may
  lead to you receiving a grade far lower than you deserved due to the
  automation software missing your answer.
  HINT: The blank lines provided are great measuring tools for the amount of code you need. For example, in Question 1 where it asks you to set the visibility scope; if you are wrapping them in functions then you are making a grave error. The total code for those questions fits on one line.
*/

/*
  !!!-- STUDENT DETAILS --!!!

  FILL IN THE FOLLOWING DETAILS:
  FIRST NAME: Dhvanit
  LAST NAME: Merchant
  STUDENT ID: 200382214
  DATE: 2018-12-11

  !!!-- END OF STUDENT DETAILS --!!!
*/

/* Question 1 - Begin: (12 points) */
// Using the appropriate visibility modifiers,
// a) (3) - Make the following variable globally scoped and equal to an integer value
x = 24;
// b) (3) - Make the following variable functionally scoped and equal to a string value
(function myFunction() {
    var y = "Hey There";
})()
console.log(y);
// c) (3) - Make the following variable block scoped, mutable, and equal to a boolean value
let w = true;
// d) (3) - Make the following variable block scoped, immutable, and equal to an array value
const z = ["Week 1", "Week 2", "Week 3"];
/* Question 1 - End */


/* Question 2 - Begin: (9 points) */
// a) (4) - Create a named function called addStrings that has 2 parameters, a and b

function addStrings(a, b) {

    // b) (4) - Return the sum of the 2 parameters. NOTE: it should equal 31, NOT 526
    return parseInt(a) + parseInt(b);
}

// c) (1) - Call the function with the following arguments
addStrings("5", "26");
/* Question 2 - End */


/* Question 3 - Begin: (12 points) */
// a) (2) - Create an array with 3 names
let names = ["Shaun", "Rich", "Jess"];
// b) (2) - Create an empty array to store a list of values
let upperCaseNames = [];
// c) (5) - Using a for/of loop, iterate through the names array
for (let i = 0; i < names.length; i++) {
    // d) (3) - Make each name uppercase and add it to the empty array you created in step a)

    names[i] = names[i].toUpperCase()
    upperCaseNames.push(names);

}
/* Question 3 - End */


/* Question 4 - Begin: (8 points) */
let theMeanArr = ['Bob',
                 ['Sarah', 'Jim', ['Lucy', 'Sally'], 'Veronica', ['Waldo'], 'Romulo', 'Arsh'],
                 ['Amrit', 'Gokul', ['Humphrey', 'Rodrigo'], 'Emma'],
                 'Esmeralda'];
// Using the appropriate index combination, console log the following names:
// a) (2) - Veronica
console.log(theMeanArr[1][3]);
// b) (2) - Gokul
console.log(theMeanArr[2][1]);
// b) (2) - Esmeralda
console.log(theMeanArr[3]);
// d) (2) - Romulo
console.log([3];
        /* Question 4 - End */


        /* Question 5 - Begin: (6 points) */
        let things = ['ball', 'frisbee', 'boomerang', 'pogo stick'];
        // Using the appropriate array methods:
        // a) (3) - Remove and store the first thing from the array into the following variable
        let thing1 = things.shift();
        // b) (3) - Remove and store the last thing from the array into the following variable
        let thing2 = things.pop();
        /* Question 5 - End */


        /* Question 6 - Begin: (25 points) */
        let colours = ['#3498db', '#e74c3c', '#e67e22', '#f1c40f'];
        // a) (4) - Select and store the question 6 element from the index.html file into a variable with the correct visibility scope (remember, it's passed by reference which means it doesn't need to be mutable)
        var question6 = document.querySelector('#question6');
        // b) (3) - Using JavaScript, create a new 'button' element and store it in a variable
        const button = document.createElement('button');
        // c) (3) - Change the text property on the button to read 'click me'
        button.textContent = 'click me';

        // d) (4) - Add an event listener to the button and pass the event to the callback
        button.onclick = function () {
            // e) (3) - Select a random colour and store it in variable
            // https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
            let randomColour = colours[Math.floor(Math.random) * colours.length];
            // f) (5) - Change the background colour of the button to the random colour using the event target to access the element
            button.body.style.backgroundColor = randomColour;
        };
        // g) (3) - Append the button to the question 6 element
        document.getElementById('question6').append(button);

        /* Question 6 - End */


        /* Question 7 - Begin: (17 points) */
        // a) (3) - Create a literal object called Dave
        let Dave = {
            // b) (2) - Add properties and values for first name and last name

            firstName: "Dhvanit",
            lastName: "Mechant",
            // c) (4) - Add a property for birth date that has the value of a new date object with the date "1978-12-22"

            birthDate: "1978-12-22",
            toHTML: function (selector) {
                let div = document.createElement('div');
                div.textContent = this.bio();
                document.querySelector(selector).append(div);
            },
            // d) (6) - Add a new property, on the Dave object, called "bio" that has the following value:
            // "My name is {firstName} {lastName} and my birth date is {birthDate}." NOTE: Replace the values using string interpolation. Don't forget the important object context when attempting to access the properties.
            bio: function () {
                console.log(this);
                return `My name is ${Dave.firstName} ${Dave.lastName} and my birth date is ${Dave.birthDate}.`;
            }
        }
        // e) (2) - Console log Dave's bio
        console.log(Dave.bio());

        /* Question 7 - End */


        /* Question 8 - Begin: (18 points) */
        // Walking the DOM using CSS selectors:
        // a) (4) - Select the span that contains the text "my span friend" and store it in a variable with the correct visibility scope
        let span = document.querySelector('p span');
        // b) (4) - Select the second li tag in the unordered list under question 8 and store it with the correct visibility scope
        let secondL = document.querySelector('ul li:nth-of-type(2)');
        // Walking the DOM using the current selected element scope:
        // c) (2) - Select and store the question 8 element with the correct visibility scope
        let question8 = document.getElementById('question8');
        // d) (4) - Using the question 8 element you stored, select and store the ul element with the correct visibility scope
        let ul = question8.querySelector('ul');
        // e) (4) - Using the ul element you stored, select and store ALL the li elements with the correct visibility scope
        let lis = ul.querySelector('li');
        /* Question 8 - End */


        /* Question 9 - Begin: (29 points) */
        // a) (5) - Write an object constructor for the object 'Cube' that takes the following 3 arguments: height, width, and length
        function Cube(height, width, length) {


            // b) (6) - Assign the arguments to 3 properties called height, width, and length
            this.height = height;
            this.width = width;
            this.length = length;

        }

        // c) (4) - Create a new prototypal method that adds the function "calculateCube"
        Cube.prototype.calculateCube = function () {
            // d) (6) - Return the following calculation: height * width * length
            return parseFloat(height) * parseFloat(width) * parseFloat(length);
            // NOTE: Remember you must use the current object's context when accessing these properties for this to work

        }
        // e) (6) - Instantiate a new cube object called "notASquare" with the dimensions 5x5x5
        let notASquare = new Cube("5", "5", "5"); console.log(notASquare.calculateCube);
        // f) (2) - Console log the value of calculateCube

        /* Question 9 - End */


        /* Question 10 - Begin: (19 points) */
        // a) (3) - Create a new object literal called Animal
        let Animal = {
            // b) (3) - Create an 'init' property with a function definition as a value. The function will take one parameter called 'species'
            init: function (species) {
                // c) (3) - Assign the species argument to a species property
                this.species = species;
            },
            // d) (3) - Create a new property called 'eat' and assign it a function definition with one parameter called 'food'
            eat: function (food) {
                // e) (2) - return the following string using string interpolation to fill in the appropriate values:
                // This {species} eats {food}.
                return `This ${this.species} eats ${this.food}`
            },
            // f) (3) - Create a new property called 'move' and assign it a function definition with a parameter called 'callback'
            move: function () {
                // g) (2) - Execute/Call/Invoke the callback as a function call

            }
        }
        /* Question 10 - End */


        /* Question 11 - Begin: (12 points) */
        // a) (3) - Using the appropriate Object method, create a new Animal object and assign it to the variable 'Dog'
        const Dog = Object.create(Animal);
        // b) (3) - Initialize the Dogs object with the argument 'Dog'
        Dog.init("Dog");
        /* Question 11 - End */


        /* Question 12 - Begin: (6 points) */
        // a) (3) - Using the appropriate Object method, create a new Dog object and assign it to the variable 'GoldenRetriever'
        const GoldenRetriever = Object.create('Dog');
        // b) (3) - Console log the result of calling the eat method on the GoldenRetriever object. You can pass the method any argument you choose. I used 'everything' ;)
        console.log(GoldenRetriever.type);
        /* Question 12 - End */


        /* Question 13 - Begin: (12 points) */
        // b) (4) - Override the 'eat' method by declaring a new 'eat' property on the GoldenRetriever object and assigning it a new function definition with no parameters
        {
            // c) (2) - Return the following string: "I love all food!"

        }
        // b) (3) - Console log the result of calling the eat method on the Budgie object

        /* Question 13 - End */


        /* Question 14 - Begin: (6 points) */
        // a) (4) - Call the 'move' method on the GoldenRetriever object, passing an anonymous function as a callback
        {
            move.call()
            // b) (2) - Console log the following string: "Hey, I'm walkin' 'ere!!!"
            console.log("Hey, I'm walkin' 'ere!!!");
        }

        /* Question 14 - End */


        /* Question 15 - Begin */


        // a) (5) - Write an object constructor for the object Person that takes the following 4 arguments: name, height, weight, and age
        function Person(name, height, weight, age) {
            // b) (8) - Assign the arguments to 4 properties called name, height, weight, and age
            this.name = name;
            this.height = height;
            this.weight = weight;
            this.age = age;

        }
        /* Question 15 - End */

        /* Question 16 - Begin: (20 points) */
        // a) (5) - Write an object constructor for the object Employee that takes the 4 arguments used for the Person object and a new argument called 'career'
        let Employee(name, height, weight, age, career) {
            // b) (2) - Assign the career argument to a property called 'career'
            this.career = career;
            // c) (7) - Inherit Person by instantiating it correctly
            Person.call(this, name, height, weight, age);

        }
        // d) (6) - Complete the inheritance by assigning the Person prototype to the Employee prototype
        Employee.prototype = Object.create(Person.prototype);

        /* Question 16 - End */


        /* Question 17 - Begin: (14 points) */
        // a) (4) - Create a new prototypal method on the Employee constructor that adds the function "details" and has the parameters 'property' and 'selector'
        function Employee() {
            // b) (4) - Using the property argument, select the property from the object and assign it to a variable called 'prop'. Hint: Because 'property' will be a string, you will need to use the [index] syntax to select it on the object. The dot syntax will not work.

            // c) (4) - Select and store the appropriate HTML element using the selector argument in a variable called 'element'

            // d) (2) - Assign the 'prop' value to the 'element's text property

        }
        /* Question 17 - End */


        /* Question 18 - Begin: (23 points) */
        let plumber = new Employee("bob", 178, 78, 27, "plumber")
        // a) (8) - Instantiate a new Employee with the following details:
        // name: Bob
        // height: 178
        // weight: 78
        // age: 27
        // career: plumber
        // and assign it to a variable named 'plumber'

        // b) (15) - Using the Employee details method, pass the correct property name and selector string to fill in the table under #question19 in the index.html. Make sure you call the method on 'plumber' or you'll get 'undefined' and not receive the marks.
        let name = document.querySelector('#question19 #name'); name.textContent = plumber.name;
        let height = document.querySelector('#question19 #height'); height.textContent = plumber.height;
        let weight = document.querySelector('#question19 #weight'); weight.textContent = plumber.weight;
        let age = document.querySelector('#question19 #age'); age.textContent = plumber.age;
        let career = document.querySelector('#question19 #career'); career.textContent = plumber.textContent;


        /* Question 18 - End */


        /* Question 19 - Begin: (10 points) */
        const requestURL = "https://gcsmckinnon.netlify.com/week-12/json-apis/data.json";
        // a) (2) - Fetch the above URL
        fetch(requestURL);
        // b) (6) - Return the response as JSON
        .then(function (response) {
            return response.json();
        })
        // c) (2) - Pass in the dataFetch definition
        .then(dataFetch);

        function dataFetch(data) {
            console.log(data);
        }
        /* Question 19 - End */


        /* Question 20 - Begin: (14 points) */
        products.forEach(product =>
            // a) (5) - Loop through all the products using a for each loop
            {
                // b) (9) - Console log each product's sku, name, height, length, and width in the following format:
                // `{name}::{sku} - {height}cm x {length}cm x {width}cm, {weight}kg`
                console.log(`${product["name"]}::${product["sku"]} - ${product["height"]}cm x ${product["length"]}cm x ${product["width"]}cm, ${product["weight"]}kg`);
            })

        /* Question 20 - End */
