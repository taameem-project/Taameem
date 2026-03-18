// Doughnut
new Chart(document.getElementById("donut"), {
  type: "doughnut",
  data: {
    labels: ["Completed","Pending","Failed"],
    datasets: [{
      data: [68,22,10],
      backgroundColor:["#1A7BA7","#078CAC","#505168"],
      borderWidth:0
    }]
  },
  options:{
    cutout:"70%",
    plugins:{legend:{display:false}}
  }
});

// Line
new Chart(document.getElementById("line"), {
  type:"line",
  data:{
    labels:["Jan","Feb","Mar","Apr","May","Jun"],
    datasets:[
      {data:[15,20,25,18,28,32],borderColor:"#1A7BA7",tension:.4},
      {data:[12,18,23,17,25,30],borderColor:"#078CAC",tension:.4}
    ]
  },
  options:{
    plugins:{legend:{position:'top'}},
    scales:{y:{beginAtZero:true}}
  }
});

// Bar
new Chart(document.getElementById("bar"), {
  type:"bar",
  data:{
    labels:["Qatar","HBKU","Texas A&M","Georgetown","CMU","Northwestern"],
    datasets:[{
      data:[98,94,91,89,85,82],
      backgroundColor:"#1A7BA7",
      borderRadius:6
    }]
  },
  options:{indexAxis:'y'}
});