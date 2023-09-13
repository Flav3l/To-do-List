console.log('My code is running');



let inputField = document.querySelector(".userInput");
let submitButton = document.querySelector('.submit');
let listItems = document.querySelector('.itemList');
let deleteButton = document.querySelector('.delete');

let submit = () => {
    if (inputField.value != "") {
        listItems.innerHTML += `<li class="unselected">${inputField.value}<button class="delete">Delete</button></li>`;
        
        document.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => strikeThrough(li));
                li.children[0].addEventListener('click', () => deleteFinished(li)) 
    })
inputField.value = "";
    }
}



inputField.addEventListener('keypress', event => {
    if (event.key == 'Enter') {
        submit();
    }
});



let strikeThrough = (item) => {
    if (!item.style.textDecoration || item.style.textDecoration == 'none')//element is not already selected
    {
        item.style.textDecoration = 'line-through'//select element and apply strikethrough style
    }
    else if (item.style.textDecoration == 'line-through') //element is already selected
    {
        item.style.textDecoration = 'none'//unselect element
    }
}

let deleteFinished = (item) => {
    item.remove();//deletes items with a strikethrough
}

submitButton.addEventListener('click', submit);
deleteButton.addEventListener('click', deleteFinished);