function abc()
{

}
abc.x = 10;
abc.y = 20;

// here function behaving as object
// hamne abc function ke sath further hello function ko bind kr diya h
abc.hello = function()
{
    console.log("hello i am function in a function");
}


console.log(abc.x);
console.log(abc.y);
console.log(abc.hello());