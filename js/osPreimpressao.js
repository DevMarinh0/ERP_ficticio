export const osPreimpressao = {
    "os-pre-impressao": `
    <h1 class="text-center fs-2 fw-bold">OSs Pré-Impressão</h1>
    <div class="text-center">
        <button class="fw-bold btn btn-outline-info btn-md my-2 pl-3">Buscar</button>
        <button class="fw-bold btn btn-outline-success btn-md my-2 pl-3">Novo</button>
        <button class="fw-bold btn btn-outline-warning btn-md my-2 pl-3">Graficos</button>
    </div>
    
    <div class="row g-2 mb-3 mt-1 d-flex justify-content-center">
        <div class="col-md-3">
            <input type="text" class="form-control" placeholder="Produto/Cliente" id="inputProdutoCliente>
        </div>
        <div class="col-md-3">
            <select class="form-select">
                <option selected>Status</option>
                <option value="1">Aberta</option>
                <option value="2">Todos</option>
                <option value="3">Cancelada</option>
                <option value="4">Encerrada</option>
                <option value="5">Em espera</option>
            </select>
        </div>
        <div class="col-md-3">
            <select class="form-select">
                <option selected>Clientes</option>
                <option value="1">Empresa1</option>
                <option value="2">Empresa2</option>
                <option value="3">Empresa3</option>
                <option value="4">Empresa4</option>
            </select>
        </div>
    </div>

    </div>    
    `
}