const events = [
  { name: "Jazz Night", category: "Music" },
  { name: "Baking", category: "Workshop" }
];

events.push({ name: "Choir Meetup", category: "Music" });

const musicEvents = events.filter(function (event) {
  return event.category === "Music";
});

const displayCards = events.map(function (event) {
  return `${event.category} on ${event.name}`;
});

musicEvents.forEach(function (event) {
  const item = document.createElement("li");
  item.textContent = event.name;
  document.querySelector("#musicEvents").appendChild(item);
});

displayCards.forEach(function (cardText) {
  const item = document.createElement("li");
  item.textContent = cardText;
  document.querySelector("#displayCards").appendChild(item);
});
