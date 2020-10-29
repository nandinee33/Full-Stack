// var a =20;
// var x = "naina";
// console.log(a);
// console.log(x);


// variable without using var
// b = 12;
// console.log(b);


// if we declare a variable and does not initiase it then result is undefined
// var y;
// console.log(y);


var xx = undefined;

// redeclaring a variable in js is not an error but only using var keyword
var xx =50;

// reassignment is also allowed in variable
xx = 99;
console.log(xx);


// another way to showing the result but it will always excute in browser
// one more thing document.write is excute when it is written in html file with internal js then it will show result on browser console
// document.write(a);


// octal literal
// var yy = 010;
// console.log(yy);



// Global Variable
// here p is global variable
// var p = 25; 
// function hello()
// {
//     console.log(p);
// }
// hello();
// console.log(p);





// Local Variable
// here p is local variable
// function hello1()
// {
//     var q = 88; 
//     console.log(q);
// }
// hello1();
// console.log(q);




// if a variable is initiased without using var keyword then that variables becomes global variable
// function hello2()
// {
//     var q = 88; 
//     c = 100;
//     console.log(q);
// }
// hello2();
// console.log(c);




// block Variables
//let is block oriented  and can not access outside the block
// {
//     let r = 13;
//     console.log(r);
// }
// console.log(r);


//in const if a variable once initialised can not be modified
// so we can not reinitialised a constant variable
//  const s = 14;
//  s++;
 



// Let V/s Var
{
    let t = 15;  //block scope
    var u = 16;  // function or global
    console.log(t);  // 15
    console.log(u);  // 16
}
// console.log(t);   // error
console.log(u);     // 16





// javascript hosting

// gives result undefined
// console.log(v);
// var v = 17;
// so hosting is possible only in case of var keyword

// gives error
// console.log(w);
// let w = 18;
