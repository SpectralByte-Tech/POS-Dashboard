// Dummy data for demonstration
const sales = [
    { item: "Coffee", qty: 5, price: 5000 },
    { item: "Sandwich", qty: 3, price: 8000 }
];

const inventory = ["Coffee Beans", "Bread", "Cheese", "Milk"];

// Populate sales table
const salesTable = document.getElementById("sales-table");
sales.forEach(s => {
    const row = salesTable.insertRow();
    row.insertCell(0).innerText = s.item;
    row.insertCell(1).innerText = s.qty;
    row.insertCell(2).innerText = s.price;
});

// Populate inventory list
const inventoryList = document.getElementById("inventory-list");
inventory.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    inventoryList.appendChild(li);
});

// Calculate total revenue
let total = 0;
sales.forEach(s => {
    total += s.qty * s.price;
});

const totalDiv = document.createElement("h2");
totalDiv.innerText = "Total Revenue: " + total;
document.body.appendChild(totalDiv);
