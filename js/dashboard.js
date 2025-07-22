window.onload = function () {
    const ctx1 = document.getElementById('chartExemplo1').getContext('2d');
    const ctx2 = document.getElementById('chartExemplo2').getContext('2d');
    const ctx3 = document.getElementById('chartExemplo3').getContext('2d');
    const ctx4 = document.getElementById('chartExemplo4').getContext('2d');
    const ctx5 = document.getElementById('chartExemplo5').getContext('2d');
    const ctx6 = document.getElementById('chartExemplo6').getContext('2d');
    const ctx7 = document.getElementById('chartExemplo7').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Ciano', 'Verde', 'Magenta', 'Amarelo', 'Preto'],
            datasets: [{
                label: 'Exemplo Dados',
                data: [10, 9, 8, 7, 6,],
                backgroundColor: [
                    'cyan',
                    'green',
                    'magenta',
                    'yellow',
                    'black'
                ],

                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    new Chart(ctx2, {
        type: 'bubble',
        data: {
            labels: ['Ciano', 'Verde', 'Magenta', 'Amarelo', 'Preto'],
            datasets: [{
                label: 'Exemplo Dados',
                data: [{
                    x: 10,
                    y: 9,
                    r: 5
                }, {
                    x: 8,
                    y: 7,
                    r: 6
                }, {
                    x: 6,
                    y: 5,
                    r: 7
                }, {
                    x: 4,
                    y: 3,
                    r: 8
                }, {
                    x: 2,
                    y: 1,
                    r: 9
                }],
                backgroundColor: [
                    'cyan',
                    'green',
                    'magenta',
                    'yellow',
                    'black'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    new Chart(ctx3, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Exemplo Dados',
                data: [{
                    x: -10,
                    y: 0
                }, {
                    x: 0,
                    y: 10
                }, {
                    x: 10,
                    y: -10
                }, {
                    x: 0,
                    y: -10
                }, {
                    x: -10,
                    y: -10
                }],
                backgroundColor: [
                    'cyan',
                    'green',
                    'magenta',
                    'yellow',
                    'black'
                ],

                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                }
            }
        }
    });


    new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
            datasets: [{
                label: 'Exemplo Dados',
                data: [10, 9, 8, 7, 6,],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(ctx5, {
        type: 'polarArea',
        data: {
            labels: ['Ciano', 'Verde', 'Magenta', 'Amarelo', 'Preto'],
            datasets: [{
                label: 'Exemplo Dados',
                data: [10, 9, 8, 7, 6,],
                backgroundColor: [
                    'cyan',
                    'green',
                    'magenta',
                    'yellow',
                    'black'
                ],

                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    new Chart(ctx6, {
        type: 'radar',
        data: {
            labels: [
                'Eating',
                'Drinking',
                'Sleeping',
                'Designing',
                'Coding',
                'Cycling',
                'Running'],
            datasets: [{
                label: 'Exemplo Dados',
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                spointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: 'Exemplo Dados 2',
                data: [28, 48, 40, 19, 96, 27, 100],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                spointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        },
        options: {
            elememts: {
                line: {
                    borderWidth: 3
                }
            },
        }
    });
    new Chart(ctx7, {
        type: 'polarArea',
        data: {
            labels: ['Ciano', 'Verde', 'Magenta', 'Amarelo', 'Preto'],
            datasets: [{
                label: 'Exemplo Dados',
                data: [10, 9, 8, 7, 6,],
                backgroundColor: [
                    'cyan',
                    'green',
                    'magenta',
                    'yellow',
                    'black'
                ],

                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}