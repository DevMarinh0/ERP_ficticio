export const relatorioManutencao = {
    //tem que ser a mesma chave do data -menu no index.html
    "relatorio-manutencao": `
        <h1 class="text-center fs-2 fw-bold">Relatório de Manutenção Corretiva e Preventiva</h1>
        <div class="text-center pt-4">
            <label for="empresaRelatoriosManutencaoEmpresa" class="form-label">Empresa</label>
            <div class="mb-3 d-flex justify-content-center">
                <select class="form-select mb-3" id="empresaRelatoriosManutencaoEmpresa" style="">
                    <option value="impram">IMPRAM</option>
                    <option value="nova-pagina">NOVA PAGINA</option>
                    <option value="nova-pagina-minas">NOVA PAGINA - MINAS</option>
                    <option value="nova-pagina-bahia">NOVA PAGINA - BAHIA</option>
                </select>
            </div>
            <label for="empresaRelatoriosManutencaoTipo" class="form-label">Relatoiro</label>
            <div class="mb-3 d-flex justify-content-center">
                <select class="form-select mb-3" id="empresaRelatoriosManutencaoTipo" style="">
                    <option value="todas">Todas as Ordens em Serviço</option>
                    <option value="ordem-aberto">Ordem em Aberto</option>
                    <option value="ordem-fechado">Ordens Fechadas</option>
                    <option value="pecas-compradas-efetuadas">Peças Compradas Efetuadas</option>
                    <option value="pecas-compradas-consumidas">Peças Compradas Consumidas - Por data de consumo</option>
                    <option value="pecas-requisicao-eletronica-sem-os">Peças requisição eletronica sem OS</option>
                </select>
            </div>
            <div class="row mb-3">
                <div class="col-md-6 mb-2">
                    <label for="dataInicio" class="form-label">Periodo Data Inicial</label>
                    <input type="date" class="form-control" id="dataInicio">
                </div>
                <div class="col-md-6 mb-2">
                    <label for="dataFim" class="form-label">Periodo Data Final</label>
                    <input type="date" class="form-control" id="dataFim">
                </div>
            </div>
            <div class=" text-center pb-5">
                <button type="submit" class="btn btn-primary mt-3 btn-lg">Emitir Relatorio</button>
            </div>
            <h1 class="text-center fs-2 fw-bold">Emissão do Gráfico</h1>
            <div class="row mb-3">
                <div class="col-md-6 mb-2">
                    <label for="dataInicio" class="form-label">Periodo Data Inicial</label>
                    <input type="date" class="form-control" id="dataInicio">
                </div>
                <div class="col-md-6 mb-2">
                    <label for="dataFim" class="form-label">Periodo Data Final</label>
                    <input type="date" class="form-control" id="dataFim">
                </div>
            </div>
            <div class=" text-center pb-5">
                <button type="submit" class="btn btn-warning mt-3 btn-lg">Emitir Graficos</button>
            </div>
        </div>
    `
}