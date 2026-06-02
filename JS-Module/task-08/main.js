const events = [
  { name: "Jazz Night", category: "Music", seats: 10 },
  { name: "Baking Workshop", category: "Workshop", seats: 5 }
];

const eventList = document.querySelector("#eventList");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

function renderEvents() {
  eventList.innerHTML = "";
  const category = categoryFilter.value;
  const searchText = searchInput.value.toLowerCase();

  events
    .filter(function (event) {
      return category === "All" || event.category === category;
    })
    .filter(function (event) {
      return event.name.toLowerCase().includes(searchText);
    })
    .forEach(function (event) {
      const item = document.createElement("li");
      const button = document.createElement("button");

      button.textContent = "Register";
      button.onclick = function () {
        if (event.seats > 0) {
          event.seats--;
          renderEvents();
        }
      };

      item.textContent = `${event.name} - ${event.seats} seats `;
      item.appendChild(button);
      eventList.appendChild(item);
    });
}

categoryFilter.onchange = renderEvents;
searchInput.addEventListener("keydown", function () {
  setTimeout(renderEvents, 0);
});

renderEvents();
