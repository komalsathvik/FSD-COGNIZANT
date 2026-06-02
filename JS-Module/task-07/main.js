const events = [
  { name: "Art Fair", seats: 8 },
  { name: "Book Club", seats: 6 }
];

const eventsContainer = document.querySelector("#events");

function renderEvents() {
  eventsContainer.innerHTML = "";

  events.forEach(function (event) {
    const card = document.createElement("article");
    const title = document.createElement("h2");
    const seats = document.createElement("p");
    const registerButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    title.textContent = event.name;
    seats.textContent = `Seats: ${event.seats}`;
    registerButton.textContent = "Register";
    cancelButton.textContent = "Cancel";

    registerButton.addEventListener("click", function () {
      if (event.seats > 0) {
        event.seats--;
        renderEvents();
      }
    });

    cancelButton.addEventListener("click", function () {
      event.seats++;
      renderEvents();
    });

    card.append(title, seats, registerButton, cancelButton);
    eventsContainer.appendChild(card);
  });
}

renderEvents();
