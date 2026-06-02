const eventName = "Community Music Night";
const eventDate = "2026-06-15";
let seats = 30;

const eventInfo = `${eventName} is scheduled on ${eventDate}.`;
document.querySelector("#eventInfo").textContent = eventInfo;
document.querySelector("#seatCount").textContent = seats;

document.querySelector("#registerBtn").addEventListener("click", function () {
  if (seats > 0) {
    seats--;
    document.querySelector("#seatCount").textContent = seats;
  }
});
