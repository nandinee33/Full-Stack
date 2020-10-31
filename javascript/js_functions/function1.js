// function defination or Declaration
function myfun()
{
    console.log("this is function");
}

// function calling
// we can call a function as many times as we want
myfun();
myfun();






// Adding Parameters to Functions
function myfun1(fname , lname)
{
    console.log("My name is " + fname + " " + lname);
}
myfun1("Nandinee" ,"Gupta");
myfun1("Pankaj");
myfun1();
myfun1("Kalpana" ,"Gupta" , "Mohan");






// Default agruments  => used when we have two parameters but we only send one parameter then there default argument is used
function myfun2(fname , lname = "Name not mentioned")
{
    console.log("My name is " + fname + " " + lname);
}

// default argument work here
myfun2("Pankaj");   
myfun2("Naina", "Kapoor");
myfun2("Kalpana" ,"Gupta" , "Mohan");







// Return values from the function
function myfun3(x, y)
{
    return x + y;
}
console.log(myfun3(10, -2));







// Function will recieve multiple values
function myfun4()
// blank means it can recieve multiple no of values
// now i want main jitne bhi no. bheju the function will add all the no.
{
    var sum =0;
    //here we use a object that is called arguments
    for(i= 0; i< arguments.length; i++)
    {
        sum = sum + arguments[i];
    }
    return sum;
}
// here we call the function and assign it in a variable
var a = myfun4(10, -2);
var b = myfun4(10, -2, 6, 12);
var c = myfun4(10, -2, 6, 12, 56);
var d = myfun4(10);
// print the result
console.log(a + " " + b + " " + c + " " + d);



