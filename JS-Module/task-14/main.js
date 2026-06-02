$("#registerBtn").click(function () {
  $("#message").text("Registered with jQuery click handler");
});

$("#hideBtn").click(function () {
  $(".event-card").fadeOut();
});

$("#showBtn").click(function () {
  $(".event-card").fadeIn();
});
