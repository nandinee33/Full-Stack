// mode will be changed from "Sloppy" to "Strict"

// "use strict";   
// d =100;
// console.log(d);


//but if we use var keyword error will not come
// "use strict";  
// var e =200;
// console.log(e);


// octal literals are also not allowed in strict mode
// "use strict";
// var yy = 010;
// console.log(yy);



// becoz here we run it in strict mode so we can not run any code without using var keyword
// "use strict";
// function hello2()
// {
//     var q = 88; 
//     c = 100;
//     console.log(q);
// }
// hello2();
// console.log(c);




// Ques) if we want a variable which is declared inside a function and we want to access it from outside the function then what we will do??
// Ans) By using window object
// but is can only run on browser console

"use strict";
function hello3()
{
    window.m = 22;

}
hello3();
console.log(m);


