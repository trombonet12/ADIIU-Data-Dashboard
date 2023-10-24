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

});