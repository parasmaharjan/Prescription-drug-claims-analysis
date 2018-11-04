// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart3");
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
      data: [237.9,298.16,334.21,323.23,321.6,332.7,264.57,341.13,372.32,413.64,473.4,524.51,796.98,1132.09,1166.36,6182.43,3041.38,321.22,345.92,474.47,537.42,553.7,547.22,610.96,685.59,728.95,740.96,338.69],
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
      data: [0,0,0,0,0,228.03,26.498,496.16,1292.3,562.95,162.6,971.7,527.39,389.95,2401.2,4572.7,3081.8,390.16,405.07,457.32,544.34,509.68,518.16,441.48,469.67,510.84,1555.5,1350.4],
    }
    ],
  },

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
          max: 8000,
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
