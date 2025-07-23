export const selecao ={
    "selecao": `
        <h1 class="text-center fs-2 fw-bold">Candidatos</h1>
        <div class="text-center">
            <button class="fw-bold btn btn-outline-primary btn-md my-2">Buscar</button>
            <button class="fw-bold btn btn-outline-success btn-md my-2 pl-3">Cadastrar</button>
        </div>
        <div class="row mb-3">
            <div class="col-md-6 mb-2 pt-2">
                <label for="eunaofaçoamenorideiadoquesejaisso" class="form-label"></label>
                <input type="text" class="form-control" id="eunaofaçoamenorideiadoquesejaisso">
            </div>
            <div class="col-md-6 mb-2">
                <label for="dataFim" class="form-label">Buscar</label>
                <select class="form-select" id="selectBuscar">
                    <option selected>Todos</option>
                    <option value="id">ID</option>
                    <option value="data">Data</option>
                    <option value="nome">Nome</option>
                    <option value="cargo">Cargo</option>
                    <option value="situacao">Situação</option>
                </select>
            </div>
        </div>
        <table id="tabelaSolicitacaoSaidaFuncionarios" class="table table-striped display mt-3" style="width:900px;">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>Nome</th>
                    <th>Cargo Pretendido</th>
                    <th>Situação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>21/07/2025</td>
                    <td>João Silva</td>
                    <td>Estagiario em Dev</td>
                    <td>Outros - Especificar</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>22/07/2025</td>
                    <td>Maria Oliveira</td>
                    <td>Analista de Sistemas</td>
                    <td>Aprovado</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>23/07/2025</td>
                    <td>Carlos Pereira</td>
                    <td>Gerente de Projetos</td>
                    <td>Reprovado</td>
                </tr>
            </tbody>
        </table>
    `
}