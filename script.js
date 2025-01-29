const userInput = document.getElementById("userInput");
const parcelMessage = document.getElementById("parcelMessage")
const errorNote = document.getElementById("errorNote")
const errorMsg = document.getElementById("errorMsg");
const submitButton = document.getElementById("submitButton")
const trackNo = "4861054262";

submitButton.addEventListener("click", function () {
    const input = userInput.value.trim(); // Get the input value and trim white space

    if (input == "") {
        errorNote.style.display = "block";
        errorMsg.innerHTML = "please enter tracking number!";
    }
    else if (input === trackNo) {
        parcelMessage.classList.add("track-poistion-see");
        errorNote.style.display = "none"
    }
    else {
        parcelMessage.classList.remove("track-poistion-see")
        errorNote.style.display = "block"
        errorMsg.innerHTML = "Incorrect tracking number! Please try again or contact Agent.";
    }
});

function userUsing(clickedContainer) {
    const imUser = document.querySelectorAll("#imUser");
    imUser.forEach(imUser => imUser.classList.remove("using"));

    clickedContainer.classList.add("using");
    
}
