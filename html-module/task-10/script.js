function calculateTotal() {
    var tickets = 2;
    var price = 100;
    var total = tickets * price;

    console.log("Tickets:", tickets);
    console.log("Price:", price);
    console.log("Total:", total);

    document.getElementById("total").textContent = "Total: Rs. " + total;
}
