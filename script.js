const display = document.querySelector('.counter-display');
const decrement = document.querySelector('.decrement');
const increment = document.querySelector('.increment');
const resetBtn = document.querySelector('.reset')

let count = 0

decrement.addEventListener('click', () => {
    if(count <= 0){
        count = 0
    } else if(count <= 10){
        display.style.color = 'red'
        count--
       updateCounter()
    } 
     else{
        count--
       updateCounter()
    }   
})

increment.addEventListener('click', () => {
    if(count >= 20){
        
        count = 20
    } else if( count >= 10){
        display.style.color = 'blue'
        count++
        updateCounter()
    }else{
        count++
       updateCounter()
    }
    
})

resetBtn.addEventListener('click', () => {
    resetCounter()
})

display.innerHTML = count

function updateCounter(){
    display.innerHTML = count
}

// reset counter
function resetCounter(){
    count = 0
    display.innerHTML = count
}
