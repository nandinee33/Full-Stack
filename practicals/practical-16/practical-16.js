// selectors => picking 
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");



// Event Listeners => listener means works on clicking

// we want to create a list when click on todo button
todoButton.onclick = create;
// we want to check or delete our list when we click on that icons
todoList.onclick = checkdelete;


// Functions

function create(e)
{
    if (todoInput.value != ""){

        // Don't send data to the server
        e.preventDefault();


        // creating a div element
        var newDiv = document.createElement("div");
        // making class of div element
        newDiv.classList.add("todo");
        // append this div with todoList
        todoList.appendChild(newDiv);


        // creating a new list element
        var newLi = document.createElement("li");
        // making class of li element
        newLi.classList.add("todo-item");
        // dynamic data in list which is come from input box on clicking the button
        newLi.innerHTML = todoInput.value;
        // attatched this list as a child of newDiv
        newDiv.appendChild(newLi);


        // creating check button
        var checkbtn = document.createElement("button");
        checkbtn.classList.add("check-btn");
        checkbtn.innerHTML = '<i class = "fa fa-check"></i>';
        newDiv.appendChild(checkbtn);


        // creating delete button
        var deletebtn = document.createElement("button");
        deletebtn.classList.add("delete-btn");
        deletebtn.innerHTML = '<i class = "fa fa-trash"></i>';
        newDiv.appendChild(deletebtn);


        // every time it sets the input value empty after pressing enter
        todoInput.value = " ";
    }
    else {
        alert("Input Field Can't Be Blank ,Please give some value");
    }
}



function checkdelete(e)
{
    // tells where we click either button(check or delete) or li
    const item = e.target;

    // if item and classlist values and types are same
    if(item.classList[0]==='delete-btn')
    {
        // find the parent node of that item
        var parent = item.parentNode;
        // to remove the parent element
        parent.remove();
    }

    if (item.classList[0] === "check-btn")
    {
        var parent = item.parentElement;
        // toggle work as both add or remove 
        parent.classList.toggle("completed");
    }
}



