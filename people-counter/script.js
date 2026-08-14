
let count = 0 ;

let saveEl = document.getElementById("save-el");

let countElement = document.getElementById('count-element')

function increment() {

    count ++;
    countElement.textContent = count
    
}
function decrement() {

    count --;
    countElement.textContent = count
    
}
function save() {

    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countElement.textContent = count;
    
}



