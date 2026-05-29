function findNearbyEvents() {
    var result = document.getElementById("result");

    if (!navigator.geolocation) {
        result.textContent = "Geolocation is not supported.";
        return;
    }

    navigator.geolocation.getCurrentPosition(showPosition, showError, {
        enableHighAccuracy: true,
        timeout: 5000
    });
}

function showPosition(position) {
    document.getElementById("result").textContent =
        "Latitude: " + position.coords.latitude +
        ", Longitude: " + position.coords.longitude;
}

function showError(error) {
    var result = document.getElementById("result");

    if (error.code === error.PERMISSION_DENIED) {
        result.textContent = "Permission denied.";
    } else if (error.code === error.TIMEOUT) {
        result.textContent = "Request timed out.";
    } else {
        result.textContent = "Unable to get location.";
    }
}
