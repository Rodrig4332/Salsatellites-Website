const modal = document.getElementById('modal')


function openModal(imageSrc) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Close the modal
function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click',(event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});