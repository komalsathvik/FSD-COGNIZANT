function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const event = new Event("Health Camp", "2026-06-18", 25);
const details = document.querySelector("#details");

Object.entries(event).forEach(function ([key, value]) {
  const item = document.createElement("li");
  item.textContent = `${key}: ${value}`;
  details.appendChild(item);
});

document.querySelector("#availability").textContent = event.checkAvailability()
  ? "Seats are available"
  : "No seats available";
