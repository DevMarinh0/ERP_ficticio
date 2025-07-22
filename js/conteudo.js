import { saidaFuncionarios } from './saidaFuncionarios.js';
import { solicitacaoSaidaFuncionarios } from './solicitacaoSaidaFuncionarios.js';
import { solicitacaoSaidaVeiculos } from './solicitacaoSaidaVeiculos.js';
import { saidaVeiculos } from './saidaVeiculos.js';
import { liberacaoSaida } from './liberacaoSaida.js';
import { sgmGerenciadorManutencao } from './sgmGerenciadorManutencao.js';
import { dadosCadastroFacas } from './cadastroFacas.js';
import { dadosChaves } from './chaves.js';

const conteudos = {
    ...saidaFuncionarios,
    ...solicitacaoSaidaFuncionarios,
    ...solicitacaoSaidaVeiculos,
    ...saidaVeiculos,
    ...liberacaoSaida,
    ...sgmGerenciadorManutencao,
    ...dadosCadastroFacas,
    ...dadosChaves,
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
    });
});