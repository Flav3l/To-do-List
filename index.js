console.log('My code is running');

var currentItem = "";

let inputField = document.querySelector(".userInput");
let SubmitButton = document.querySelector('.submit');

let submit = () => {
    if (currentItem != "") {
     var item;
     var listItems = document.querySelector('.itemList')
     item.appendChild(document.createTextNode(currentItem))
     listItems.appendChild(item); 
    }
 }
 

    inputField.addEventListener('keypress', event => {
    if(event.key == 'Enter'){
         submit();
        console.log('enter was pressed')
    }    else {
        currentItem = document.querySelector('.userInput').value
        console.log(currentItem)
    }
});


console.log()



