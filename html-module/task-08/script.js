function savePreference() {
    var eventType = document.getElementById("eventType").value;
    localStorage.setItem("preferredEvent", eventType);
    sessionStorage.setItem("lastSelectedEvent", eventType);
    document.getElementById("message").textContent = "Preference saved.";
}

function loadPreference() {
    var savedEvent = localStorage.getItem("preferredEvent");

    if (savedEvent) {
        document.getElementById("eventType").value = savedEvent;
    }
}

function clearPreferences() {
    localStorage.clear();
    sessionStorage.clear();
    document.getElementById("eventType").value = "Music";
    document.getElementById("message").textContent = "Preferences cleared.";
}
