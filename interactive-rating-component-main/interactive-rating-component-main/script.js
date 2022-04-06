// rate = document.querySelector(`input[type="radio"][name=rating1]:checked`).value



// document.getElementById("submit").addEventListener("click", function(){
//     console.log(rate)
//    });

let rating = document.querySelector('.counter-display');
let submit_button = document.querySelector('.submit-button');
var content = document.getElementById('f1_card');
let rating_number = 0;

updateDisplay();

submit_button.addEventListener("click",()=>{
    // location.replace("./backofacard.html");
    content.classList.toggle('flip');
    rating_number = document.querySelector(`input[type="radio"][name=rating1]:checked`).value
     

    if (rating_number) {
        
        
        updateDisplay();
    
    }

}) ;


function updateDisplay(){
    rating.innerHTML = rating_number;
};
