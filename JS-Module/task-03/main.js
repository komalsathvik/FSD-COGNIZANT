const events = [
  { name: "Food Festival", date: "2026-06-20", seats: 12 },
  { name: "Past Art Meet", date: "2024-04-10", seats: 10 },
  { name: "Full Coding Bootcamp", date: "2026-06-25", seats: 0 }
];

const today = new Date();
const eventList = document.querySelector("#eventList");
const message = document.querySelector("#message");

events.forEach(function (event) {
  if (new Date(event.date) >= today && event.seats > 0) {
    const item = document.createElement("li");
    item.textContent = `${event.name} - ${event.seats} seats`;
    eventList.appendChild(item);
  }
});

function register(eventName) {
  try {
    const event = events.find(function (item) {
      return item.name === eventName;
    });

    if (!event || event.seats <= 0) {
      throw new Error("Registration unavailable");
    }

    event.seats--;
    message.textContent = `Registered for ${event.name}`;
  } catch (error) {
    message.textContent = error.message;
  }
}

register("Food Festival");
