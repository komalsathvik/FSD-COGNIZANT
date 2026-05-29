function checkPhone() {
    var phone = document.getElementById("phone").value;
    var phoneMessage = document.getElementById("phoneMessage");

    if (phone.length === 10) {
        phoneMessage.textContent = "Valid phone number";
    } else {
        phoneMessage.textContent = "Enter a 10 digit phone number";
    }
}

function showFee() {
    var eventName = document.getElementById("eventName").value;
    var fee = document.getElementById("fee");

    if (eventName === "Music") {
        fee.textContent = "Fee: Rs. 100";
    } else if (eventName === "Workshop") {
        fee.textContent = "Fee: Rs. 150";
    } else {
        fee.textContent = "Fee: Free";
    }
}

function showConfirmation() {
    document.getElementById("confirmMessage").textContent = "Feedback submitted.";
}

function enlargeImage() {
    document.getElementById("eventImage").classList.toggle("big-image");
}

function countCharacters() {
    var feedback = document.getElementById("feedback").value;
    document.getElementById("charCount").textContent = feedback.length + " characters";
}
