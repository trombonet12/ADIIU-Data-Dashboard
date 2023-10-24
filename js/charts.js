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
});