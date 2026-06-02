const events = [];

function addEvent(name, category, seats) {
  events.push({ name, category, seats });
}

function registerUser(eventName) {
  const event = events.find(function (item) {
    return item.name === eventName;
  });

  if (event && event.seats > 0) {
    event.seats--;
    return true;
  }

  return false;
}

function createCategoryTracker(category) {
  let totalRegistrations = 0;

  return function () {
    totalRegistrations++;
    return `${category} registrations: ${totalRegistrations}`;
  };
}

function filterEventsByCategory(category, callback) {
  return events.filter(function (event) {
    return callback(event, category);
  });
}

addEvent("Jazz Evening", "Music", 20);
addEvent("Baking Basics", "Workshop", 15);

const trackMusic = createCategoryTracker("Music");
const output = document.querySelector("#output");
const registrations = document.querySelector("#registrations");

document.querySelector("#filterBtn").addEventListener("click", function () {
  output.innerHTML = "";
  const category = document.querySelector("#category").value;
  const filteredEvents = filterEventsByCategory(category, function (event, selectedCategory) {
    return event.category === selectedCategory;
  });

  filteredEvents.forEach(function (event) {
    const item = document.createElement("li");
    item.textContent = event.name;
    output.appendChild(item);
  });
});

if (registerUser("Jazz Evening")) {
  registrations.textContent = trackMusic();
}
