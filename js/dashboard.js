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

    //inserindo exemplos para ver se vai funcionar(Funcionou)
    const conteudosSolicitacaoSaidaFuncionarios = {
        "solicitacao-saida-funcionarios": `
        <h1 class="text-center fs-2 fw-bold">Solicitação Saída Funcionários</h1>
        <div class="text-center">
            <button class="fw-bold btn btn-outline-warning btn-md my-2">Atualizar</button>
            <button class="fw-bold btn btn-outline-success btn-md my-2 pl-3">Novo</button>
        </div>
        <table id="tabelaSaidaFunc" class="table table-dark table-striped display" style="width:900px">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Matrícula</th>
                    <th>Nome</th>
                    <th>Destino</th>
                    <th>Data</th>
                    <th>Autorização</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Foto Funcionario" width="50" height="50"></td>
                    <td>2352</td>
                    <td>João Silva</td>
                    <td>Setor A <br></td> 
                    <td>18/07/2025</td>
                    <td>Aprovado</td>
                </tr>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Foto Funcionario" width="50" height="50"></td>
                    <td>123123</td>
                    <td>Maria Souza</td>
                    <td>Setor B</td>
                    <td>18/07/2025</td>
                    <td>Pendente</td>
                </tr>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Foto Funcionario" width="50" height="50"></td>
                    <td>12312</td>
                    <td>João Silva</td>
                    <td>Setor A</td>
                    <td>18/07/2025</td>
                    <td>Aprovado</td>
                </tr>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Foto Funcionario" width="50" height="50"></td>
                    <td>324234</td>
                    <td>Maria Souza</td>
                    <td>Setor B</td>
                    <td>18/07/2025</td>
                    <td>Pendente</td>
                </tr>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Foto Funcionario" width="50" height="50"></td>
                    <td>2342342</td>
                    <td>João Silva</td>
                    <td>Setor A</td>
                    <td>18/07/2025</td>
                    <td>Aprovado</td>
                </tr>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Foto Funcionario" width="50" height="50"></td>
                    <td>67890</td>
                    <td>Maria Souza</td>
                    <td>Setor B</td>
                    <td>18/07/2025</td>
                    <td>Pendente</td>
                </tr>
            </tbody>
        </table>
        `,
        "Saída de Funcionários": `
            <h1 class="text-center fs-1 fw-bold">Saída de Funcionários</h1>
            <p>Conteúdo relacionado à saída de funcionários.</p>
        `,
        // Adicione outros conteúdos conforme necessário
    };

    document.querySelectorAll('.sidebar .nav-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const chave = this.getAttribute('data-menu');
            document.getElementById('main-content').innerHTML = conteudosSolicitacaoSaidaFuncionarios[chave] || `<h1>${chave}</h1><p>Conteúdo em construção.</p>`;

            // Inicializa DataTables se a tabela existir
            if (document.getElementById('tabelaSaidaFunc')) {
                $(document).ready(function () {
                    $('#tabelaSaidaFunc').DataTable();
                });
            }
        });
    });
};