// waiting for code...

//declaring multiple variables
let price = 49.99,
    itemName = 'merch';
    sentance = `\"Some\" ${itemName}`,
    discount = '15%';

//use them all in function
//showMessage(sentance, discount, price);

//testing typeof
/*console.log('price is a ' + typeof price);
console.log('sentance is a ' + typeof sentance);
console.log('discount is a ' + typeof discount);*/

//testing conditional statements
/*if (price <= 50) {
    showMessage(sentance, discount, price);
}*/

//shorthand if else statement, or "ternary operator" >_<
(price < 50) ? showMessage(sentance, discount, price) : console.log(sentance, discount, price);

//testing for loops
/*for (let i=0; i <= 5; i++) {
    console.log(i);
}*/

//testin while loops
/*let i = 4;
while (i >= 0) {
    console.log(i);
    i--;
}*/

//testing do while loop, garantees block will run at least once
let i = 4;
do {
    console.log(i);
    i--;
} while (i >= 0);

//creating a symbol
let mySymbol = Symbol();

//Creating an object
let person = {
    name: 'Cesar',
    age: 41,
    partTime: false,
    [mySymbol]: 'somethingSecret', //not fully sure what this does..
    
    //creating a method
    showInfo: function(realAge) {
        console.log(this.name + ' is ' + realAge); //use this to grab info with proper scope
    }
};

//changing object values
person.age = 42;
person['name'] = 'Cesar Ojeda';

//printing out object values
//console.log(person.name);
//console.log(person.age);
//console.log(person.partTime);
console.log(person[mySymbol]); //to print out value
person.showInfo(21);

//testing built in objects and their methods with console logs
let now = new Date();
console.log( now.toDateString() );
console.log( Math.random() * 100 );
console.log( person.name.charAt(7) );