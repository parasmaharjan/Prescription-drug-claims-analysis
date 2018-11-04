// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018",],
    datasets: [{
      label: "Actual",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [25683.42,28946.03,28254.64,25829.13,25467.28,25498.09,19847.28,24842.66,26713.83,27594.32,31407.19,34339.79,37753.14,38557.98,39706.17,22461.88,20804.97,21540.45,22560.47,29903.35,33388.64,33474.86,33476.76,36309.03,41640.9,44153.96,46127.56,21632.86],
    },
    {
      label: "Prediction",
      lineTension: 0.3,
      backgroundColor: "rgba(221,51,255,0.2)",
      borderColor: "rgba(221,51,255,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(221,51,255,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [0,0,0,0,0,24445,23471,23328,25098,31095,31189,34178,33510,38621,41901,23396,20644,21365,22676,29742,33755,32844,37783,32699,41591,46411,35694,28301],
    }
    ],
  },
   // [4710.52,6451.99,7858.9,8185.93,8753.14,9995.92,9008.22,13271.7,16289.71,19940.75,25078.24,29825.98,45209.98,60943.17,61884.24,150195.35,37118.5,24706.47,26026.14,32873.8,37214.96,37165.39,36713.1,45535.96,54122.57,60012.03,62057.25,27901.92],
  
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
