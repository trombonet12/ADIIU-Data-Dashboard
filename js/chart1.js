document.addEventListener('DOMContentLoaded', function () {
    fetch('/data')
    .then(response => response.json())
    .then(data => {
        // Create the Highcharts chart
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Game Genres'
            },
            xAxis: {
                type: 'category'
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

});