export const reposicaoFacas = {
    "reposicao-facas": `
        <h1 class="text-center fs-2 fw-bold">Reposição de Facas</h1>
        <div class="text-center">
            <button class="fw-bold btn btn-outline-info btn-md my-2">Buscar</button>
        </div>
        <div class="row g-2 mb-3 mt-1 d-flex justify-content-center">
        <div class="col-md-2">
            <input type="text" class="form-control" placeholder="IM">
        </div>
        <div class="col-md-2">
            <select class="form-select">
            <label for="statusSelect" class="form-label">Cliente</label>
                <option selected>Status</option>
                <option value="1">Aberta</option>
                <option value="2">Todos</option>
                <option value="3">Cancelada</option>
                <option value="4">Encerrada</option>
                <option value="5">Em espera</option>
            </select>
        </div>
    `
}