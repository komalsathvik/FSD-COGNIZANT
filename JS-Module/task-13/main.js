const form = document.querySelector("#registrationForm");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submission started");

  const payload = {
    name: form.elements.name.value,
    email: form.elements.email.value
  };

  console.log("Payload:", payload);
  debugger;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(function (response) {
      console.log("Network response:", response.status);
      return response.json();
    })
    .then(function (data) {
      console.log("Response data:", data);
      message.textContent = "Check Console and Network tab";
    })
    .catch(function (error) {
      console.error("Submission error:", error);
      message.textContent = "Submission failed";
    });
});
