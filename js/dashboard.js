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
    plugins: {
      title: {
        display: true,
        text: 'Vendas por Mês'
      }
    }
  }
});

// Gráfico de Fluxo de Caixa (Pizza)
const ctxCaixa = document.getElementById('graficoCaixa').getContext('2d');
new Chart(ctxCaixa, {
  type: 'pie',
  data: {
    labels: ['Entradas', 'Saídas'],
    datasets: [{
      label: 'Fluxo de Caixa',
      data: [8500, 3100],
      backgroundColor: ['#198754', '#dc3545']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Fluxo de Caixa Atual'
      }
    }
  }
});

const ctxPizza = document.getElementById('graficoProdutosVendidos').getContext('2d');
  new Chart(ctxPizza, {
    type: 'pie',
    data: {
      labels: ['Notebook', 'Teclado', 'Monitor', 'Mouse'],
      datasets: [{
        data: [35, 25, 20, 20],
        backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545']
      }]
    }
  });
