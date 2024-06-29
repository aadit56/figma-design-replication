const showButton = document.getElementById("showDialog");
const dialog = document.getElementById("dialog");
const close = document.querySelector('.close-btn')

showButton.addEventListener("click", () => {
    dialog.showModal();
});

close.addEventListener('click', () => {
    dialog.close();
})