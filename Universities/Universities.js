// Chart
new Chart(document.getElementById("chart"), {
  type: "bar",
  data: {
    labels: ["Qatar", "Hamad", "Texas", "Georgetown", "Carnegie"],
    datasets: [{
      data: [92, 91, 90, 89, 87],
      backgroundColor: "#1A7BA7",
      borderRadius: 8
    }]
  },
  options: {
    plugins: { legend: { display: false }},
    scales: { y: { beginAtZero: true }}
  }
});

// Table
const data = [
  ["Qatar University","connected","Dr. Sarah Al-Thani",98,"2 hours ago"],
  ["Hamad Bin Khalifa University","connected","Prof. James Wilson",94,"5 hours ago"],
  ["Texas A&M University at Qatar","connected","Eng. Maryam Ali",91,"1 day ago"],
  ["Georgetown University in Qatar","connected","Dr. Robert Smith",89,"4 days ago"],
  ["Carnegie Mellon University in Qatar","pending","Michael Chen",85,"3 days ago"],
  ["Northwestern University in Qatar","inactive","Laila Hassan",72,"1 week ago"]
];

const tbody = document.getElementById("table-body");

data.forEach(row => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${row[0]}</td>
    <td><span class="status ${row[1]}">${row[1]}</span></td>
    <td>${row[2]}</td>
    <td>
      ${row[3]}%
      <div class="progress"><div style="width:${row[3]}%"></div></div>
    </td>
    <td>${row[4]}</td>
    <td style="color:#1A7BA7;cursor:pointer;font-weight:500">View Details →</td>
  `;

  tbody.appendChild(tr);
});