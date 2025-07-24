export const bncSgi = {
    "bnc-sgi": `
        <h1 class="text-center fs-2 fw-bold">BNC SGI</h1>
        <div class="text-center">
            <button class="fw-bold btn btn-outline-info btn-md my-2">Buscar</button>
        </div>
        <div class="row mb-3">
            <div class="col-md-6 mb-2">
                <label for="dataInicio" class="form-label">Data Inicial</label>
                <input type="date" class="form-control" id="dataInicio">
            </div>
            <div class="col-md-6 mb-2">
                <label for="dataFinal" class="form-label">Data Final</label>
                <input type="date" class="form-control" id="dataFinal">
            </div>
        </div>
        <div class="table-responsive">
            <table id="tabelaSolicitacaoSaidaVeiculos" class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Pedido</th>
                        <th>SEQ</th>
                        <th>Cliente</th>
                        <th>Veiculo</th>
                        <th>Motorista</th>
                        <th>Placa</th>
                        <th>Destino</th>
                        <th>Destino</th>
                        <th>Destino</th>
                    </tr>
                </thead>
            </table>
        </div>

    `
}