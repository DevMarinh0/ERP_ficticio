export const relatoriosComponentes={
    "relatorio-componentes" :`
        <h1 class="text-center fs-2 fw-bold">Relatório de Componentes</h1>
        <form class="row g-3">
            <div class="col-md-6">
                <label for="relatorio" class="form-label pt-4">Relatório</label>
                <select class="form-select" id="relatorio">
                    <option selected>Selecione um relatório</option>
                    <option value="relatorio1">Relatório 1</option>
                    <option value="relatorio2">Relatório 2</option>
                    <option value="relatorio3">Relatório 3</option>
                    <option value="relatorio4">Relatório 4</option>
                    <option value="relatorio5">Relatório 5</option>
                </select>
            </div>
            <div class="col-md-6 pt-4">
                <label for="componente" class="form-label">Componente</label>
                <input type="text" class="form-control" id="componente">
            </div>
            <div class="row mb-6 pt-4">
                <div class="col-md-6 mb-2">
                    <label for="dataInicio" class="form-label">Periodo Data Inicial</label>
                    <input type="date" class="form-control" id="dataInicio">
                </div>
                <div class="col-md-6 mb-2">
                    <label for="dataFim" class="form-label">Periodo Data Final</label>
                    <input type="date" class="form-control" id="dataFim">
                </div>
            </div>
            <select class="form-select" id="selectPeriodo">
                <option selected>Todos</option>
                <option value="1">Finalizados</option>
                <option value="1">Nao Finalizados</option>
            </select>
            <div class=" text-center">
                <button type="submit" class="btn btn-primary mt-3 btn-lg">Gerar Relatório</button>
            </div>
        </form>
    `
}