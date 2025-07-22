export const sgmGerenciadorManutencao = {
    "sgm-gerenciamento-manutencao": `
    <h1 class="text-center fs-2 fw-bold">SGM Gerenciador Manutenção</h1>
        <div class="text-center">
            <button class="fw-bold btn btn-outline-primary btn-md my-2">Buscar</button>
            <button class="fw-bold btn btn-outline-success btn-md my-2 pl-3">Novo</button>
        </div>
    <div class="row g-2 mb-3 mt-1">
        <div class="col-md-2">
            <input type="number" class="form-control" placeholder="NRO O.S.">
        </div>
        <div class="col-md-2">
            <select class="form-select">
                <option selected>Status</option>
                <option value="1">Aberta</option>
                <option value="2">Todos</option>
                <option value="3">Cancelada</option>
                <option value="4">Encerrada</option>
                <option value="5">Em espera</option>
            </select>
        </div>
        <div class="col-md-2">
            <select class="form-select">
                <option selected>Ordem</option>
                <option value="1">ID</option>
                <option value="2">Data</option>
                <option value="3">Setor</option>
                <option value="4">Staus</option>
            </select>
        </div>
        <div class="col-md-2">
            <select class="form-select">
                <option selected>Máquina</option>
                <option value="1">Pendente</option>
                <option value="2">Em Andamento</option>
                <option value="3">Concluído</option>
            </select>
        </div>
        <div class="col-md-2">
            <select class="form-select">
                <option selected>Filial</option>
                <option value="1">Todas</option>
                <option value="2">Nova Pagina</option>
                <option value="3">Nova Pagina - Minas</option>
                <optins value="4">Nova Pagina - Bahia</option>
                <option value="5">IMPRAM</option>
            </select>
        </div>
        <div class="col-md-2">
            <select class="form-select">
                <option selected>Problema</option>
                <option value="1">Todos</option>
                <option value="2">Corretiva</option>
                <option value="3">Segurança</option>
                <option value="4">Preventiva</option>
                <option value="5">Planejada</option>
                <option value="6">Melhoria</option>
                <option value="3">Preventiva Automatica</option>
                <option value="3">Segurança</option>
            </select>
        </div>
    </div>     
    `
}