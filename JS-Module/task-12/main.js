const form = document.querySelector("#registrationForm");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const userData = {
    name: form.elements.name.value,
    email: form.elements.email.value
  };

  message.textContent = "Submitting...";

  setTimeout(function () {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Submission failed");
        }
        return response.json();
      })
      .then(function () {
        message.textContent = "Registration submitted successfully";
      })
      .catch(function () {
        message.textContent = "Registration failed";
      });
  }, 1500);
});
