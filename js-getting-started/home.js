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