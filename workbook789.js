// 7 - calculating Averages;
// 7-1;
var groupOne = 5;
var groupTwo = 8;
var groupThree = 14;
var averagePies = (groupOne + groupTwo + groupThree)/3;
console.log(averagePies); // 9

// 7-2;
var carOne = 50000;
var carTwo = 25000;
var carThree = 60000;
var averageMiles = (carOne + carTwo + carThree)/3;
console.log(averageMiles); // 45000

// 7-3;
var dayOne = 15000;
var dayTwo = 20000;
var dayThree = 10000;
var dayFour = 12000;
var dayFive = 25000;
var averageSteps = (dayOne + dayTwo + dayThree + dayFour + dayFive)/5;
console.log(averageSteps)

// 7-4;
var bagOne = 100;
var bagTwo = 150;
var bagThree = 50;
var bagFour = 75;
var bagFive = 150;
var averageNumberCandies = (bagOne + bagTwo + bagThree + bagFour + bagFive)/5;
console.log(averageNumberCandies); //105

// 7-5;
var laptopsInventoryOne = 40;
var laptopsInventoryTwo = 50;
var laptopsInventoryThree = 65;
var laptopsInventoryFour = 45;
var averageInventory = (laptopsInventoryOne + laptopsInventoryTwo + laptopsInventoryThree + laptopsInventoryFour)/4;
console.log(averageInventory); // 50

// 8 - Incrementing and Decrementing;
// 8-1-1;
var i = 1;
i++;
console.log(i);

// 8-1-2;
var k = 100;
k++;
console.log(k);

// 8-2-0 Decrementing;
// 8-2-1;
var i = 1;
i--;
console.log(i);

// 8-2-2;
var i = 100;
i--;
console.log(i);

// 9 - Data Types;
// 9-1-0 String;
// 9-1-1;
var name = "Samantha";
console.log(name);

// 9-1-2;
var dogName = "Jack";
console.log(dogName);

// 9-1-3;
var bird = "budgie";
console.log(bird);

// 9-1-4;
var electronicsBox = "cpu";
console.log(electronicsBox);

// 9-1-5;
var slogan = "I'm Lovin' it";
console.log(slogan);

// 9-2-0 Numbers - Integers/Whole Numbers;
// 9-2-1-1;
var age = 14;

// 9-2-1-2;
var metres = 100;

// 9-2-1-3;
var a = 12;
var b = 3;
var total = a / b;
console.log(total);

// 9-2-1-4;
var x = 10;
var y = 2;
var total = x / y;
console.log(total);

// 9-2-2-0 Decimal Numbers/Float;
// 9-2-2-2;
var diameter = 2.5;
console.log(diameter);

// 9-2-3-0 Magic Numbers;
// 9-2-3-1;
var PI = 3.14;
var radius = 2;
var area = PI * (radius**2)
console.log(area);

// 9-2-3-2;
var Number_Days_Of_The_Week = 7;
var hoursADay = 5;
var workedNumberWeeks = 3;
var salary = 25.50;
var total = Number_Days_Of_The_Week * hoursADay * workedNumberWeeks * salary;
console.log(total);

// 9-3-0 Boolean;
// 9-3-1;
var proceed = true;

// 9-3-2;
var proceed = false;

// 9-4-0;
var grannySmith = {
    color: "green", 
    originLocation: "australia", 
    originDate: 1868
};
console.log(grannySmith.color);

// 9-4-2;
var germanShepard = {
    weightKilograms: 30,
    color: "tan",
    eyeColor: "brown"
};
console.log(germanShepard.eyeColor);

// 9-4-3;
var person = {
    eyeColour: "brown",
    hairColour: "red",
    age: 30
};
console.log(person.hairColour);

// 9-5-0 Function;
// 9-5-1;
var x = myFunction(1, 3);
function myFunction(a, b) {
    return a * b;
};
console.log(x); // 3

// 9-5-2;
var addition = additionFunction(3, 4);
function additionFunction(a, b) {
    return a + b;
};
console.log(addition); // 7

// 9-5-3;
var subtraction = subtractionFunction(10, 4);
function subtractionFunction(a, b) {
    return a - b;
};
console.log(subtraction); // 6

// 9-5-4;
var divide = divideFunction(12, 4);
function divideFunction(a, b) {
    return  a / b;
};
console.log(divide); // 3

// 9-6-0 No Values;
// 9-6-1-0 Undefined;
var summer;
console.log(summer); // undefined

// 9-6-1-2;
var printer;
console.log(printer);

// 9-6-2-0 Empty Values;
// 9-6-2-1;
var bcit = "";
console.log(bcit); // undefined
