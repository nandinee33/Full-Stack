// expression
// var a = 5;






// Function Expression => means function assigned to variable
// Anonymous Function => which does not have name
// so this is anonymous function
var z = function(x)
{
    return (x*x);
};
// how we call anonumous function => by using variable name
console.log(z(7));


// Ques) Function V/s  Function Expression


// Function
function multiply(y)
{
    return(y*y);
}
console.log(multiply(7));







// Arrow Function
// arraow function is also known as anonymous function and it also does not have function keyword and behaves like normal function
var p = (m)=>{return (m*m);};
console.log(p(8));







// self called function
// here we called a balnk function
(function(x){console.log(x)})(5);

(function(name){console.log(name)})("Naina");



