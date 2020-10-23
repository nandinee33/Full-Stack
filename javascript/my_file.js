var x  = document.getElementById('container');

// used to print something on to the console
// console.log(x);

// ab hum yaha x ke through content add karenge and styling karenge
x.style.width = "300px";
x.style.height = "200px";
x.style.backgroundColor = "red";
x.style.marginBottom = "20px";
x.style.borderRadius = "8px";
x.style.fontSize = "20px";
x.style.paddingTop = "20px";
x.style.textAlign = "center";
// to add dynamic text
x.innerHTML = "this is Dynamic text";

// to generate event on button
var y = document.getElementById('btn');
// console.log(y);

y.onclick = function()
{
    alert("Hello this is an event");

    // here when we clicl on button it changes the color
    x.style.backgroundColor = "blue";
}