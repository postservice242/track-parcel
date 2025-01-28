const userInput = document.getElementById("userInput");
const parcelMessage = document.getElementById("parcelMessage")
const errorNote = document.getElementById("errorNote")
const submitButton = document.getElementById("submitButton")
const trackNo = "4861054262";

submitButton.addEventListener("click", function () {
    const input = userInput.value.trim(); // Get the input value and trim white space

    if (input === trackNo) {
        parcelMessage.classList.add("track-poistion-see");
        errorNote.style.display = "none"
    }
    else {
        parcelMessage.classList.remove("track-poistion-see")
        errorNote.style.display = "block"
    }
});

function userUsing(clickedContainer) {
    const imUser = document.querySelectorAll("#imUser");
    imUser.forEach(imUser => imUser.classList.remove("using"));

    clickedContainer.classList.add("using");
    
}
