//strict mode, must declare variables!
'use strict';

//declaring multiple variables
let price = 49.99,
    itemName = 'merch',
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

//testing changing styles via DOM
const header = document.getElementById('messages');
header.style.color = 'blue';

//testing button interaction
const button = document.getElementById('see-review');

//attaching event listner to button, does something onclick
button.addEventListener('click', function() {
    //console.log('OUCH!!');
    const review = document.getElementById('review');
    
    //this is too simple >_< do it the hard way
    //review.classList.toggle('d-none');

    //step by step, oohh baby...
    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
});

/*
Chapter 9 content 
*/

//creating and initialise an array, verify it's an array and display content
const values = ['a', 'b', 'c'];
console.log(Array.isArray(values));
//console.log(values);

//change content as well
values[2] = "ccc"
//console.log( values[2] );

//add and delete content in array
values.push('cesar', 'is', 'someone');
//console.log( values[3] );
console.log(values);

const cesar = values.slice(3, 6);   // creating new array
values.splice(3, 3, 'dddd');        // deleting values and adding 'dddd'

console.log(values);
console.log(cesar);
console.log( values.indexOf('a') ); // finding the index of an array item

// using it in practice
const containers = document.getElementsByClassName('container');
containers[2].classList.add('d-none');
console.log(containers);

/*
Chapter 10 content - scope an hoisting 
*/

//creating a global object rather than global variables for better management
const app = {
    productId: 12345,
    userName: 'Cesar',
    orderNumber: 6789
}

function showProductId() {
    console.log(app.productId);
}

showProductId();