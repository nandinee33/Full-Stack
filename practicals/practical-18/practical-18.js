// Selectors

const form = document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password1= document.getElementById('password1');
const password2= document.getElementById('password2');
const small= document.querySelector('small');



// Event Listner

//form submission
// e tells us that which event is call
form.addEventListener('submit', function(e){
    // stop the default behaviour of submit
    // means data is not refreshing anymore
    //to stop submission
    e.preventDefault();
    // when data is  submitted we have to check all the inputs
    //s o we make this function to check all the inputs
    checkInput();
});



// Function

function checkInput()
{
    // trim removes the white spaces in the input 
    const usernameValue = username.value.trim();
    // console.log(usernameValue)
    
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();


   
    // -----------------Username-----------------
    // if value in the username is empty
    if(usernameValue===''){
        // then showError function is called , which tells that error comes from username with this error message
        showError(username, "Username can't be blank");
    }
    else if(!isUsernameValid(usernameValue))
    {
        showError(username, "Username can have small letters and underscores only");
    }
    else {
        showSuccess(username);
    }



    //-----------------email-----------------
    if(emailValue==='')
    {
        showError(email, "Email Id can't be blank");
    }
    else if(!isEmailValid(emailValue))
    {
        showError(email, "Email Id is inavalid");
    }
    else{
        showSuccess(email);
    }


    // ---------------password--------------
    if(password1Value===''){
        showError(password1, "Password can't be blank");
    }
    else {
        showSuccess(password1);
    }


    //--------------conferm password------------
    if(password2Value===''){
        showError(password2, "Re-enter password");
    }
    else if(password2Value != password1Value)
    {
        showError(password2, "Password not matched!")
    }
    else {
        showSuccess(password2);
    }
}



function showError(input, msg)
{
    // parent node of input
    const formControl = input.parentNode;
    // add a new class of formControl
    formControl.className = 'form-control error';
    // formControl ke andar hme small ko select krna h 
    const small= formControl.querySelector('small');
    // set msg in small which is come from error
    small.innerHTML= msg;
}



function showSuccess(input)
{
    // parent node of input
    const formControl = input.parentNode;
    // add a new class of formControl
    formControl.className = 'form-control success';
}



function isEmailValid(email)
{
    // email validation regex
    return /^([a-zA-Z0-9_\.\-\+]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isUsernameValid(username)
{
    // username validation regex
    return /^[a-z_]+$/.test(username);
}