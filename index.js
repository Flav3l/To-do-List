console.log('My code is running');



let inputField = document.querySelector(".userInput");
let SubmitButton = document.querySelector('.submit');
let listItems = document.querySelector('.itemList');
let banana = document.querySelectorAll('li');


let submit = () => {
    if (inputField.value != "") {
    listItems.innerHTML += `<li class="unselected">${inputField.value}</li>`
    inputField.value = "";
    }
}

inputField.addEventListener('keypress', event => {
    if(event.key == 'Enter'){
        submit();
    }
});

SubmitButton.addEventListener('click', submit)



 listItems.addEventListener('click').style.textDecoration = "line-through";
    


