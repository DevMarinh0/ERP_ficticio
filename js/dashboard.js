window.onload = function () {
    const ctx1 = document.getElementById('chartExemplo1').getContext('2d');
    const ctx2 = document.getElementById('chartExemplo2').getContext('2d');
    const ctx3 = document.getElementById('chartExemplo3').getContext('2d');
    const ctx4 = document.getElementById('chartExemplo4').getContext('2d');
    const ctx5 = document.getElementById('chartExemplo5').getContext('2d');
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
    new Chart(ctx3, {
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
    new Chart(ctx4, {
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
    new Chart(ctx5, {
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
}