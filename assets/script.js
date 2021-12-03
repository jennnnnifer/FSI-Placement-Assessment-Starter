// My Name
let yourName = "Jennifer Harms" // 
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Cookie Variables
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let cookieTotal = 0 // Total

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

// Gingerbread
let gbAdd = document.querySelector('#add-gb')
let gbMinus = document.querySelector('#minus-gb')

gbAdd.addEventListener('click', function(){
    gb += 1;
    cookieTotal += 1;
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = cookieTotal;
})

gbMinus.addEventListener('click', function(){
    if (gb > 0) {
        gb -= 1;
        cookieTotal -= 1;
    }   
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = cookieTotal;
})

// Chocolate Chip
let ccAdd = document.querySelector('#add-cc')
let ccMinus = document.querySelector('#minus-cc')

ccAdd.addEventListener('click', function(){
    cc += 1;
    cookieTotal += 1;
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = cookieTotal;
})

ccMinus.addEventListener('click', function(){
    if (cc > 0) {
        cc -= 1;
        cookieTotal -= 1;
    }   
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = cookieTotal;
})

// Sugar Sprinkle
let sugarAdd = document.querySelector('#add-sugar')
let sugarMinus = document.querySelector('#minus-sugar')

sugarAdd.addEventListener('click', function(){
    sugar+= 1;
    cookieTotal += 1;
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = cookieTotal;
})

sugarMinus.addEventListener('click', function(){
    if (sugar > 0) {
        sugar -= 1;
        cookieTotal -= 1;
        }   
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = cookieTotal;
})