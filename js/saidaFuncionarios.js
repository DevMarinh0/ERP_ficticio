export const saidaFuncionarios = {
    "saida-funcionarios": `
        <h1 class="text-center fs-2 fw-bold">Saída de Funcionários</h1>
        <div class="text-center">
            <button class="fw-bold btn btn-outline-warning btn-md my-2">Atualizar</button>
            <button class="fw-bold btn btn-outline-success btn-md my-2 pl-3">Novo</button>
        </div>
        <div class="row mb-3">
            <div class="col-md-6 mb-2">
                <label for="dataInicio" class="form-label">Data Inicial</label>
                <input type="date" class="form-control" id="dataInicio">
            </div>
            <div class="col-md-6 mb-2">
                <label for="dataFim" class="form-label">Data Final</label>
                <input type="date" class="form-control" id="dataFim">
            </div>
        </div>
        <div class="table-responsive">
        <table id="tabelaSaidaFuncionarios" class="table table-striped display mt-3" style="width:900px;">
            <thead class="table-dark">
                <tr>
                    <th>Foto</th>
                    <th>Matrícula</th>
                    <th>Nome</th>
                    <th>Observação</th>
                    <th>Autorização</th>
                    <th>Saida</th>
                    <th>Retorno</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Foto Funcionario" width="50" height="50"></td>
                    <td>98765</td>
                    <td>Pedro Lima</td>
                    <td>20/07/2025</td>
                    <td>Férias</td>
                    <td>Confirmado</td>
                    <td>21/07/2025</td>
                </tr>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Foto Funcionario" width="50" height="50"></td>
                    <td>54321</td>
                    <td>Ana Paula</td>
                    <td>21/07/2025</td>
                    <td>Consulta médica</td>
                    <td>Pendente</td>
                    <td>22/07/2025</td>
                </tr>
            </tbody>
        </table>
        </div>
    `,
};