import { saidaFuncionarios } from './saidaFuncionarios.js';
import { solicitacaoSaidaFuncionarios } from './solicitacaoSaidaFuncionarios.js';
import { solicitacaoSaidaVeiculos } from './solicitacaoSaidaVeiculos.js';
import { saidaVeiculos } from './saidaVeiculos.js';

const conteudos  = {
    ...saidaFuncionarios,
    ...solicitacaoSaidaFuncionarios,
    ...solicitacaoSaidaVeiculos,
    ...saidaVeiculos,
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
        if( document.getElementById('tabelaSaidaVeiculos')) {
            $('#tabelaSaidaVeiculos').DataTable();
        }
    });
});