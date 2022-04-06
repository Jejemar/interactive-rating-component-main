let rating = document.querySelector('.counter-display');
let submit_button = document.querySelector('.submit-button');
var content = document.getElementById('f1_card');
let rating_number = 0;

updateDisplay();

// Button function on click

submit_button.addEventListener("click",()=>{
    
    content.classList.toggle('flip');

    rating_number = document.querySelector(`input[type="radio"][name=rating1]:checked`).value
     
    if (rating_number) {
                
        updateDisplay();
    
    }

}) ;

// Update Display with rating

function updateDisplay(){

    rating.innerHTML = rating_number;
    
};
