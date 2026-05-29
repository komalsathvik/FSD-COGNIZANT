var formChanged = false;

function videoReady() {
    document.getElementById("videoMessage").textContent = "Video ready to play";
}

function markChanged() {
    formChanged = true;
}

window.onbeforeunload = function () {
    if (formChanged) {
        return "You have unfinished form changes.";
    }
};
