// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
const close = document.getElementsByClassName("close")[0];

const close2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn.addEventListener('click', () => {
    modal.style.display = "block";

})

// When the user clicks on <span> (x), close the modal
close.addEventListener('click', ()=> {
    modal.style.display = "none";
})
close2.addEventListener('click', () =>{
    modal.style.display = 'none'
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event)=>{
    if (event.target == modal) {
        modal.style.display = "none";
      }
})