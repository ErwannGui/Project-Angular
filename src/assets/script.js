var time = new Date();
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(time);
console.log(new Date(tomorrow));

$(document).ready(function(){
  $('.datepicker').datepicker({
    defaultDate: time,
    maxDate: tomorrow,
    format: 'dd/mm/yyyy'
  });
  $('.sidenav').sidenav();
  $('#sidenav-1').sidenav({ edge: 'left' });
  $('#custom_nantes_btn').addClass('active transparent');


  $('.nav-content a').each(function () {
    $(this).click(function () {
      cycle_active($(this).attr('id'))
    })
  });

  function cycle_active(id) {
    $('.nav-content a').each(function () {
      if ( $(this).hasClass('active')){
        $(this).removeClass('active transparent')
      }
      $("#"+id).addClass('active transparent')
    })
  }

  var options_line = {
    chart: {
      height: '100%',
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    series: [{
      name: "Nantes",
      data: [130, 111, 95, 81, 49, 32, 39, 61, 130]
    },{
      name: "Rennes",
      data: [150, 131, 84, 68, 49, 31, 45, 74, 150]
    },{
      name: "Angers",
      data: [120, 98, 84, 76, 42, 25, 28, 53, 120]
    }],
    title: {
      text: 'Places restantes pour la journée',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    }
  };

  var chart_line = new ApexCharts(
    document.querySelector("#chart_line"),
    options_line
  );

  chart_line.render();


  var options_bar = {
    chart: {
      height: '100%',
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [{
      name: 'Emplacements voiture',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Emplacements PMR',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Emplacements 2 Roues',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    xaxis: {
      categories: ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1

    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }

  var chart_bar = new ApexCharts(
    document.querySelector("#chart_bar"),
    options_bar
  );

  chart_bar.render();


  var options_donut_1 = {
    chart: {
      height: '100%',
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '10%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,

          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E'],
    series: [76,67,61],
    labels: ['Nantes', 'Rennes', 'Angers'],
    legend: {
      show: true,
      floating: true,
      fontSize: '10vh',
      position: 'right',
      offsetX: 140,
      offsetY: 10,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0
      },
      formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        horizontal: 1,
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }]
  }

  var chart_donut_1 = new ApexCharts(
    document.querySelector("#chart_donut_1"),
    options_donut_1
  );

  chart_donut_1.render();


  var options_donut_2 = {
    chart: {
      height: '100%',
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '10%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,

          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E'],
    series: [65,82,53],
    labels: ['Nantes', 'Rennes', 'Angers'],
    legend: {
      show: true,
      floating: true,
      fontSize: '10vh',
      position: 'right',
      offsetX: 140,
      offsetY: 10,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0
      },
      formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        horizontal: 1,
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }]
  }

  var chart_donut_2 = new ApexCharts(
    document.querySelector("#chart_donut_2"),
    options_donut_2
  );

  chart_donut_2.render();

});



