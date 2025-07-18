window.onload = function() {
    const ctx = document.getElementById('chartExemplo').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Vermelho', 'Azul', 'Amarelo', 'Verde', 'Roxo', 'Laranja'],
            datasets: [{
                label: 'Exemplo Dados',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'red',
                    'blue',
                    'yellow',
                    'green',
                    'purple',
                    'orange'
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
};