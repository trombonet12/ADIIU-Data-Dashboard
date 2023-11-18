document.addEventListener('DOMContentLoaded', function () {
    fetch('/generos')
        .then(response => response.json())
        .then(data => {
            // Create the Highcharts chart
            Highcharts.chart('container1', {
                chart: {
                    type: 'pie',
                    backgroundColor: '#191C24',
                    description: 'Distribution of Genres'
                },
                title: {
                    text: ''
                },
                yAxis: {
                    title: {
                        text: 'Count'
                    }
                },
                series: [{
                    name: 'Genres',
                    data: data
                }]
            });
        });

        fetch('/desarrolladores')
        .then(response => response.json())
        .then(data => {
            // Create the Highcharts chart
            Highcharts.chart('container2', {
                chart: {
                    type: 'bar',
                    backgroundColor: '#191C24',
                    description: 'Number of Games by Developer (TOP 20)'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: data.map(item => item.name),
                    crosshair: true,
                    labels: {
                        style: {
                            color: 'white',
                            fontSize: '9px'
                        },
                        description: 'Developer Names'
                    }
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    labels: {
                        style: {
                            color: 'white' 
                        },
                        description: 'Y-axis representing the number of games'
                    }
                },
                series: [{
                    name: 'Numero de juegos',
                    data: data.map(item => item.y),
                    dataLabels: {
                        style: {
                            color: 'white' //No se quiere cambiar de color :(
                        }
                    }
                }],
                plotOptions: {
                    series: {
                        dataLabels: {
                            color: 'white' 
                        }
                    }
                }
            });
        });


        fetch('/cantidad')
        .then(response => response.json())
        .then(data => {
            // Create the Highcharts chart
            Highcharts.chart('container3', {
                chart: {
                    type: 'scatter',
                    backgroundColor: '#191C24',
                    description: 'Scatter Plot of Number of Games by Developer'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    tickInterval: 1,
                    labels: {
                        style: {
                            color: 'white'
                        },
                        description: 'Number of Games'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Cantidad de desarrolladores',
                        style: {
                            color: 'white' 
                        }
                    },
                    labels: {
                        style: {
                            color: 'white'
                        },
                        description: 'Y-axis representing the number of developers'
                    }
                },
                plotOptions: {
                    scatter: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.y}',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                },
                series: [{
                    name: 'Numero de juegos',
                    data: data.map(item => ({ x: item.name, y: item.y })),
                    dataLabels: {
                        style: {
                            color: 'white' //No se quiere cambiar de color :(
                        }
                    }
                }]
            });
        });

    fetch('/tipo')
        .then(response => response.json())
        .then(data => {

            Highcharts.chart('container4', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                    backgroundColor: '#191C24',
                    description: 'Distribution of Types'
                },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
                    description: 'Hover over a section to view percentage'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        },
                        innerSize: '50%'
                    }
                },
                series: [{
                    name: 'Tipo',
                    colorByPoint: true,
                    data: data
                }]
            });
        });

});