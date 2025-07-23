export const graficosDefeitos = {
    "graficos-defeitos": `
        <h1 class="text-center fs-2 fw-bold">Gráficos de Defeitos</h1>
        <div class="text-center">
            <button id="btnGerarGraficoDefeitos" class="fw-bold btn btn-outline-warning btn-md my-2">Gerar Gráfico</button>
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
        <div class="row mb-3">
            <div class="col-md-6 mb-2">
                <select class="form-select" id="selectTipoGraficoDefeitos">
                    <option value="">Escolha</option>
                    <option value="com">Com acerto e Mostragem</option>
                    <option value="sem">Sem acerto e Mostragem</option>
                </select>
            </div>
            <div class="col-md-6 mb-2">
                <select class="form-select" id="selectEmpresaGraficoDefeitos">
                    <option value="">Cliente</option>
                    <option value="empresa1">Empresa 1</option>
                    <option value="empresa2">Empresa 2</option>
                    <option value="empresa3">Empresa 3</option>
                    <!-- ... -->
                </select>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
                <canvas id="graficoDefeitos"></canvas>
            </div>
        </div>
    `
}