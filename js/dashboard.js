// Gráfico de Vendas Mensais (Barra)
const ctxVendas = document.getElementById('graficoVendas').getContext('2d');
new Chart(ctxVendas, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho'],
    datasets: [{
      label: 'Vendas R$',
      data: [4200, 5300, 3800, 6100, 7200, 8400, 5700],
      backgroundColor: '#0d6efd'
    }]
  },
  options: {
    responsive: true,
    mainInAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: 'Vendas por Mês'
      }
    }
  }
});


