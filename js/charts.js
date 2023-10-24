document.addEventListener('DOMContentLoaded', function () {
    fetch('/generos')
        .then(response => response.json())
        .then(data => {
            // Create the Highcharts chart
            Highcharts.chart('container1', {
                chart: {
                    type: 'pie'
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
                    type: 'bar'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: data.map(item => item.name),
                    crosshair: true,
                    labels: {
                        style: {
                            fontSize: '8px'
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: ''
                    }
                },
                series: [{
                    name: 'Numero de juegos',
                    data: data.map(item => item.y)
                }]
            });
        });

    fetch('/cantidad')
        .then(response => response.json())
        .then(data => {
            // Create the Highcharts chart
            Highcharts.chart('container3', {
                chart: {
                    type: 'scatter'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    tickInterval: 1,
                },
                yAxis: {
                    title: {
                        text: 'Cantidad de desarrolladores'
                    }
                },
                plotOptions: {
                    scatter: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.y}',
                            style: {
                                color: 'black'
                            }
                        }
                    }
                },
                series: [{
                    name: 'Numero de juegos',
                    data: data.map(item => ({ x: item.name, y: item.y }))
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
                    type: 'pie'
                },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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