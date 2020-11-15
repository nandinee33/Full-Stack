// Selectors
const time = document.getElementById("time");   // To copy in js => shift + alt + downarrow 
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");




// Event Listners
name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);





// Functions

function showtime()
{
    // this is the constructor which stores today's date, current time , day in today
    let today = new Date();
    // console.log(today); 
    // output =>  Fri Nov 13 2020 10:39:45 GMT+0530 (India Standard Time)

    // so this gives us only hours from today data => 10
    let hour = today.getHours();
    // so this gives us only minutes from today data => 39
    let min = today.getMinutes();
    // so this gives us only seconds from today data => 45
    let sec = today.getSeconds();
    // so this gives us only date from today data (only date vale part ayega)  =>  Fri Nov 13 2020
    let todaydate = today.toDateString();
    

    // AM PM logic ( if hour is greater than 12 than PM else AM)
    const AmPm = hour > 12 ? 'PM' : 'AM';


    // 12 hour time format logic
    // if condition is true return hour%12 and if condition is false(only is case of 12 and 24) then return 12
    hour = hour%12 || 12;

    // output time( final time which is shown on webpage in proper required format)
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span>:</span> ${AmPm}`;

    // output Date
    date.innerHTML = `${todaydate}`;

    // call showtime function after every 1000 mili seconds this makes our clock live
    setTimeout(showtime,1000);

}


// hh:mm:ss AM (required Time format)
function addZero(n)
{
    // n is in string so we convert it into integer
    // if no is in single digit(ie. less than 10) it will add zero before the no 
    return ((parseInt(n, 10) < 10 ? '0' : '') + n);
}


// this function will also automatically call when page is reloaded
function setGreeting()
{
    let today = new Date();
    let hour = today.getHours();

    if(hour<12)
    {
        document.body.style.backgroundImage = 'url("morning.jpg")';
        greeting.innerHTML = 'Good Morning';
    } 
    else if(hour<18)
    {
        document.body.style.backgroundImage = 'url("noon.jpg")';
        greeting.innerHTML = 'Good Afternoon';
    }
    else
    {
        document.body.style.backgroundImage = 'url("night.jpg")';
        greeting.innerHTML = 'Good Evening';
        document.body.style.color = "white";
    }
}



function getName()
{
    // if our local storage is empty
    if(localStorage.getItem('myName')=== null)
    {
        // this msg is shown only when our localstore is not created or empty
        name.innerHTML = "[Enter Name]"
    }
    else
    {
        name.innerHTML = localStorage.getItem('myName');
    }
}





//create a function to store data in local storage
function setName(e){
    // e.type tell us view event we click either keypress or blur
    if(e.type === "keypress"){
        // keycode for enter key is 13
        if(e.keyCode == 13){
            localStorage.setItem('myName', e.target.innerHTML);
            name.blur();
        }
    }
    else {
        localStorage.setItem('myName', e.target.innerHTML);
    }
}


// Function Call
showtime();

setGreeting();

getName();