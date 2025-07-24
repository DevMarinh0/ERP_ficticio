export const gpdGerenciadorPd = {
    "gpd-gerenciador-pd": `
        <h1 class="text-center fs-2 fw-bold">GPD Gerenciador de P&D</h1>
        <div class="text-center mb-3">
            <button class="fw-bold btn btn-outline-info btn-md my-2 pl-3">Buscar</button>
            <button class="fw-bold btn btn-outline-success btn-md my-2 pl-3">Novo</button>
            <button class="fw-bold btn btn-outline-warning btn-md my-2">Graficos</button>
        </div>
        <div class="row g-2 mb-3 mt-1 d-flex justify-content-center">
        <div class="col-md-2">
            <input type="number" class="form-control" placeholder="O.S">
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
                <option selected>Cliente</option>
                <option value="1">Empresa1</option>
                <option value="2">Empresa2</option>
                <option value="3">Empresa3</option>
                <option value="4">Empresa4</option>
                <option value="5">Empresa5</option>
            </select>
        </div>
        <div class="col-md-2">
            <select class="form-select">
                <option selected>Ano Inicio</option>
                <option value="1">2021</option>
                <option value="2">2022</option>
                <option value="3">2023</option>
                <option value="4">2024</option>
                <option value="5">2025</option>
            </select>
        </div>
        <div class="col-md-2">
            <select class="form-select">
                <option selected>Ano Final</option>
                <option value="1">2021</option>
                <option value="2">2022</option>
                <option value="3">2023</option>
                <option value="4">2024</option>
                <option value="5">2025</option>
            </select>
        </div>
    </div>     
    `

}