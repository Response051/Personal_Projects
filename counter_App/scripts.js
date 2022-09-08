// 1. create a variable that initialize to 0
// 2. create a function that when called will increase the initialized variable as well as store it.
// 3. create another funtion that will save the varible when clicked
// 4. Add necessary DoMs with the htmls

let count = 0;
let saved = document.getElementById("saved-el")
function increase() {
    count +=  1
    document.getElementById("counter-el").innerText = count;
    
};
function save() {
    countED = count + "-";
    saved.innerText += countED;
    
}
