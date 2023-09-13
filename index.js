console.log('My code is running');

let inputField = document.querySelector(".userInput");

inputField.addEventListener('keypress', event => {
    if(event.key == 'Enter'){
        console.log("enter key pressed");
    }
});

// var enterPress =  () => {
    
// }
// console.log(enterPress())

var currentItem = "";
