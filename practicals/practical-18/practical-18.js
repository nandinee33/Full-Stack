// Selectors

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const small = document.querySelector('small');



// Event Listner

// e tells us that which event is call
form.addEventListener('submit', function(e){
    // stop the default behaviour of submit
    // means data is not refreshing anymore
    e.preventDefault();
    // when data is  submitted we have to check all the inputs
    //s o we make this function to check all the inputs
    checkInput();
});



// Function

function checkInput()
{
    // trim removes the white spaces in the input 
    const usernameValue = username.value.trim() ;
    // console.log(usernameValue)
    const emailValue = email.value.trim() ;
    const password1Value = password1.value.trim() ;
    const password2Value = password2.value.trim() ;


    // if value in the username is empty
    if(usernameValue === '')
    {
        // then showError function is called , which tells that error comes from username with this error message
        showError(username, "Username can not be blank");
    }
    else
    {
        showSuccess(username);
    }


    if(emailValue === '')
    {
        // then showError function is called , which tells that error comes from username with this error message
        showError(email, "email can not be blank");
    }
    else if(isEmailValid(emailValue))
    {
        showError(email,"Email ID is not Valid");
    }
    else
    {
        showSuccess(email);
    }


    if(password1Value === '')
    {
        // then showError function is called , which tells that error comes from username with this error message
        showError(password1, "password can not be blank");
    }
    else
    {
        showSuccess(password1);
    }


    if(password2Value === '')
    {
        // then showError function is called , which tells that error comes from username with this error message
        showError(password2, "password can not be blank");
    }
    else if(password2Value != password1Value)
    {
        showError(password2, "passwords not match");
    }
    else
    {
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
    const  small = formControl.querySelector('small');
    // set msg in small which is come from error
    small.innerHTML = msg;
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
    return /^([a-zA-Z0-9_\.\-\+]+)@([a-zA-Z0-9_\.\-\+]+)\.([a-zA-Z]){2,3})$/.test(email);
}