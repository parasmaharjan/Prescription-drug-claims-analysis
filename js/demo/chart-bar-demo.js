// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["LISINOPRIL", "QUETIAPINE", "RISPERIDON", "GABAPENTIN", "OLANZAPINE", "AMOXICILLI", "HYDROCODON", "ALPRAZOLAM", "METOPROLOL", "AMLODIPINE"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(179, 0, 179,1)",
      borderColor: "rgba(179, 0, 179,1)",
      data: [1518, 1155, 1102, 1086, 1054, 1028, 1003, 946, 938, 909],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'Medicine'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 1500,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
