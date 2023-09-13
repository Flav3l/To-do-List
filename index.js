console.log('My code is running');



let inputField = document.querySelector(".userInput");
let SubmitButton = document.querySelector('.submit');
let listItems = document.querySelector('.itemList');


let submit = () => {
    if (inputField.value != "") {
    listItems.innerHTML += `<li>${inputField.value}</li>`
    inputField.value = "";
    }
}

inputField.addEventListener('keypress', event => {
    if(event.key == 'Enter'){
        submit();
    }
});

SubmitButton.addEventListener('click', submit)

let banana = document.querySelector('li');

let strikeThrough = (item) => {
item.style.textDecoration = 'line-through';
}

banana.addEventListener('click', strikeThrough);