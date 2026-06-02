const eventList = document.querySelector("#eventList");
const loading = document.querySelector("#loading");

function renderEvents(events) {
  eventList.innerHTML = "";
  events.forEach(function (event) {
    const item = document.createElement("li");
    item.textContent = `${event.name} - ${event.category}`;
    eventList.appendChild(item);
  });
}

document.querySelector("#thenBtn").addEventListener("click", function () {
  loading.hidden = false;

  fetch("events.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (events) {
      renderEvents(events);
    })
    .catch(function () {
      eventList.textContent = "Unable to load events";
    })
    .finally(function () {
      loading.hidden = true;
    });
});

document.querySelector("#asyncBtn").addEventListener("click", async function () {
  loading.hidden = false;

  try {
    const response = await fetch("events.json");
    const events = await response.json();
    renderEvents(events);
  } catch (error) {
    eventList.textContent = "Unable to load events";
  } finally {
    loading.hidden = true;
  }
});
