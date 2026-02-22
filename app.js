let sales = [
    { item: "Coffee", qty: 5, price: 5000 },
    { item: "Sandwich", qty: 3, price: 8000 }
];

const salesTable = document.getElementById("sales-table");
const form = document.getElementById("sale-form");

function renderSales() {
    // Clear old rows except header
    salesTable.innerHTML = `
        <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
    `;

    let total = 0;

    sales.forEach((s, index) => {
        const row = salesTable.insertRow();
        row.insertCell(0).innerText = s.item;
        row.insertCell(1).innerText = s.qty;
        row.insertCell(2).innerText = s.price;

        total += s.qty * s.price;
    });

    document.getElementById("total-revenue").innerText =
        "Total Revenue: " + total;
}

// Handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const item = document.getElementById("item").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const price = parseInt(document.getElementById("price").value);

    sales.push({ item: item, qty: quantity, price: price });

    form.reset();
    renderSales();
});

// Add total revenue display
const totalDisplay = document.createElement("h2");
totalDisplay.id = "total-revenue";
document.body.appendChild(totalDisplay);

renderSales();
