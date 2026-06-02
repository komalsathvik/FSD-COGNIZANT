const events = [
  { name: "Yoga Morning", date: "2026-06-12", category: "Wellness" },
  { name: "Guitar Basics", date: "2026-06-14", category: "Music" }
];

function formatEvent(event, prefix = "Event") {
  const { name, date, category } = event;
  return `${prefix}: ${name} (${category}) on ${date}`;
}

const clonedEvents = [...events];
const filteredEvents = clonedEvents.filter(function ({ category }) {
  return category === "Music";
});

filteredEvents.forEach(function (event) {
  const item = document.createElement("li");
  item.textContent = formatEvent(event);
  document.querySelector("#events").appendChild(item);
});
