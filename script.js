const btn = document.getElementById('btn')
const colors = ['red', 'blue', 'orange']
const color = document.querySelector('.colorCode')
const colorContainer = document.querySelector('.color-container')

btn.addEventListener('click', function(){
    // console.log('btn Clicked!')
    const randomNo = getRandomNumber();
    colorContainer.style.backgroundColor = colors[randomNo];
    color.textContent = colors[randomNo];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

