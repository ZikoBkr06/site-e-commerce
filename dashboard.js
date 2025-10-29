// Example: Replace with real API call
const orders = [
  { id: 1, customer: "Alice", product: "T-shirt", status: "pending", date: "2025-10-28" },
  { id: 2, customer: "Bob", product: "Hoodie", status: "shipped", date: "2025-10-27" },
];

function renderTable(data) {
  const tbody = document.querySelector("#ordersTable tbody");
  tbody.innerHTML = "";
  data.forEach(order => {
    const row = `<tr>
      <td>${order.id}</td>
      <td>${order.customer}</td>
      <td>${order.product}</td>
      <td>${order.status}</td>
      <td>${order.date}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = orders.filter(o =>
    o.customer.toLowerCase().includes(query) ||
    o.product.toLowerCase().includes(query)
  );
  renderTable(filtered);
});

document.getElementById("statusFilter").addEventListener("change", function () {
  const status = this.value;
  const filtered = status ? orders.filter(o => o.status === status) : orders;
  renderTable(filtered);
});

renderTable(orders);