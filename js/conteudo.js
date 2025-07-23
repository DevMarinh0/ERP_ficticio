import { saidaFuncionarios } from './saidaFuncionarios.js';
import { solicitacaoSaidaFuncionarios } from './solicitacaoSaidaFuncionarios.js';
import { solicitacaoSaidaVeiculos } from './solicitacaoSaidaVeiculos.js';
import { saidaVeiculos } from './saidaVeiculos.js';
import { liberacaoSaida } from './liberacaoSaida.js';
import { sgmGerenciadorManutencao } from './sgmGerenciadorManutencao.js';
import { dadosCadastroFacas } from './cadastroFacas.js';
import { dadosChaves } from './chaves.js';
import { relatoriosDefeitosProdutos } from './relatoriosDefeitosPRodutos.js';
import { controleAcoes } from './controleAcoes.js';
import { corteVinco } from './corteVinco.js';
import { graficosDefeitos } from './graficosDefeitos.js';

const conteudos = {
    ...saidaFuncionarios,
    ...solicitacaoSaidaFuncionarios,
    ...solicitacaoSaidaVeiculos,
    ...saidaVeiculos,
    ...liberacaoSaida,
    ...sgmGerenciadorManutencao,
    ...dadosCadastroFacas,
    ...dadosChaves,
    ...relatoriosDefeitosProdutos,
    ...controleAcoes,
    ...corteVinco,
    ...graficosDefeitos,
};



document.querySelectorAll('.sidebar .nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const chave = this.getAttribute('data-menu');
        document.getElementById('main-content').innerHTML = conteudos[chave] || `<h1>${chave}</h1><p>Conteúdo em construção.</p>`;

        // Inicializa DataTables se a tabela existir
        if (document.getElementById('tabelaSaidaFuncionarios')) {
            $('#tabelaSaidaFuncionarios').DataTable();
        }
        if (document.getElementById('tabelaSolicitacaoSaidaFuncionarios')) {
            $('#tabelaSolicitacaoSaidaFuncionarios').DataTable();
        }
        if (document.getElementById('tabelaSolicitacaoSaidaVeiculos')) {
            $('#tabelaSolicitacaoSaidaVeiculos').DataTable();
        }
        if (document.getElementById('tabelaSaidaVeiculos')) {
            $('#tabelaSaidaVeiculos').DataTable();
        }
        if (document.getElementById('tabelaLiberacaoSaida')) {
            $('#tabelaLiberacaoSaida').DataTable();
        }
        if (document.getElementById('tabelaSgmGerenciadorManutencao')) {
            $('#tabelaSgmGerenciadorManutencao').DataTable();
        }
        if (document.getElementById('tabelaCadastroFacas')) {
            $('#tabelaCadastroFacas').DataTable();
        }
        if (document.getElementById('tabelaChaves')) {
            $('#tabelaChaves').DataTable();
        }
        if (document.getElementById('tabelaRelatoriosDefeitosProdutos')) {
            $('#tabelaRelatoriosDefeitosProdutos').DataTable();
        }
        if (document.getElementById('tabelaControleAcoes')) {
            $('#tabelaControleAcoes').DataTable();
        }
        if (document.getElementById('tabelaCorteVinco')) {
            $('#tabelaCorteVinco').DataTable();
        }
        if (document.getElementById('tabelaGraficosDefeitos')) {
            $('#tabelaGraficosDefeitos').DataTable();
        }
        // ...existing code...
        if (chave === "graficos-defeitos") {
            const btn = document.getElementById('btnGerarGraficoDefeitos');
            if (btn) {
                btn.addEventListener('click', function () {
                    const tipo = document.getElementById('selectTipoGraficoDefeitos').value;
                    const empresa = document.getElementById('selectEmpresaGraficoDefeitos').value;
                    const ctx = document.getElementById('graficoDefeitos').getContext('2d');

                    // Exemplo de dados diferentes para cada opção
                    let dados = [];
                    let labels = [];
                    let titulo = '';

                    if (empresa === "empresa1") {
                        labels = ["Jan", "Fev", "Mar", "Abr", "Mai"];
                        dados = tipo === "com" ? [12, 19, 3, 5, 2] : [5, 7, 2, 3, 1];
                        titulo = tipo === "com" ? "Empresa 1 - Com Acerto" : "Empresa 1 - Sem Acerto";
                    } else if (empresa === "empresa2") {
                        labels = ["Jan", "Fev", "Mar", "Abr", "Mai"];
                        dados = tipo === "com" ? [8, 15, 6, 9, 4] : [3, 5, 1, 2, 0];
                        titulo = tipo === "com" ? "Empresa 2 - Com Acerto" : "Empresa 2 - Sem Acerto";
                    } else {
                        labels = ["Jan", "Fev", "Mar", "Abr", "Mai"];
                        dados = [0, 0, 0, 0, 0];
                        titulo = "Selecione uma empresa";
                    }

                    // Destroi gráfico anterior se existir
                    if (window.graficoDefeitosInstance) {
                        window.graficoDefeitosInstance.destroy();
                    }

                    window.graficoDefeitosInstance = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: titulo,
                                data: dados,
                                backgroundColor: 'rgba(255, 193, 7, 0.7)',
                                borderColor: 'rgba(255, 193, 7, 1)',
                                borderWidth: 2
                            }]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                legend: { display: true },
                                title: { display: true, text: titulo }
                            },
                            scales: {
                                y: { beginAtZero: true }
                            }
                        }
                    });
                });
            }
        }
    });
});