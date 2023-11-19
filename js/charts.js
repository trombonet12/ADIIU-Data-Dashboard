// ADIUU PRÁCTICA 1
// AUTORES: JOAN LÓPEZ FERRER Y PABLO CABRER REINÉS
// CHARTS

// Se espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {

    // Bloque 1: Gráfico de Pie para Distribución de Géneros
    fetch('/generos')
        .then(response => response.json())
        .then(data => {
            // Crear el gráfico de Highcharts para el contenedor 'container1'
            Highcharts.chart('container1', {
                chart: {
                    type: 'pie',
                    backgroundColor: '#191C24', // Color de fondo del gráfico
                    description: 'Distribution of Genres' // Descripción del gráfico para la accesibilidad
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

    // Bloque 2: Gráfico de Barras para Número de Juegos por Desarrollador (TOP 20)
    fetch('/desarrolladores')
        .then(response => response.json())
        .then(data => {
            // Crear el gráfico de Highcharts para el contenedor 'container2'
            Highcharts.chart('container2', {
                chart: {
                    type: 'bar',
                    backgroundColor: '#191C24', // Color de fondo del gráfico
                    description: 'Number of Games by Developer (TOP 20)' // Descripción del gráfico para accesibilidad
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: data.map(item => item.name),
                    crosshair: true,
                    labels: {
                        style: {
                            color: 'white', // Color del texto de las etiquetas
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
                            color: 'white' // Color del texto de las etiquetas
                        },
                        description: 'Y-axis representing the number of games'
                    }
                },
                series: [{
                    name: 'Numero de juegos',
                    data: data.map(item => item.y),
                    dataLabels: {
                        style: {
                            color: 'white' // Color del texto de las etiquetas
                        }
                    }
                }],
                plotOptions: {
                    series: {
                        dataLabels: {
                            color: 'white' // Color del texto de las etiquetas
                        }
                    }
                }
            });
        });

    // Bloque 3: Gráfico de Dispersión para Cantidad de Desarrolladores por Número de Juegos
    fetch('/cantidad')
        .then(response => response.json())
        .then(data => {
            // Crear el gráfico de Highcharts para el contenedor 'container3'
            Highcharts.chart('container3', {
                chart: {
                    type: 'scatter',
                    backgroundColor: '#191C24', // Color de fondo del gráfico
                    description: 'Scatter Plot of Number of Games by Developer' // Descripción del gráfico para accesibilidad
                },
                title: {
                    text: ''
                },
                xAxis: {
                    tickInterval: 1,
                    labels: {
                        style: {
                            color: 'white' // Color del texto de las etiquetas
                        },
                        description: 'Number of Games'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Cantidad de desarrolladores',
                        style: {
                            color: 'white' // Color del texto de las etiquetas
                        }
                    },
                    labels: {
                        style: {
                            color: 'white' // Color del texto de las etiquetas
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
                                color: 'white' // Color del texto de las etiquetas
                            }
                        }
                    }
                },
                series: [{
                    name: 'Numero de juegos',
                    data: data.map(item => ({ x: item.name, y: item.y })),
                    dataLabels: {
                        style: {
                            color: 'white' // Color del texto de las etiquetas
                        }
                    }
                }]
            });
        });

    // Bloque 4: Gráfico de Pie para Distribución de Tipos
    fetch('/tipo')
        .then(response => response.json())
        .then(data => {
            // Crear el gráfico de Highcharts para el contenedor 'container4'
            Highcharts.chart('container4', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                    backgroundColor: '#191C24', // Color de fondo del gráfico
                    description: 'Distribution of Types' // Descripción del gráfico para accesibilidad
                },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
                    description: 'Hover over a section to view percentage' // Descripción del tooltip para accesibilidad
                },
                accessibility: {
                    point: {
                        valueSuffix: '%' // Sufijo de accesibilidad para porcentajes
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