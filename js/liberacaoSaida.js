export const liberacaoSaida = {
    "liberacao-saida": `
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
        <table id="tabelaSaidaVeiculos" class="table table-striped display mt-3" style="width:900px">
            <thead class="table-dark">
                <tr>
                    <th>Foto</th>
                    <th>Funcionario</th>
                    <th>Destino</th>
                    <th>Solicitado</th>
                    <th>Autorizado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Img-logo-impram" width="50px;" height="50px"></td>
                    <td>Jefeerson santos</td>
                    <td>PArticular</td>
                    <td>anderson.silva</td>
                    <td
                        <div class="text-center d-flex flex-column">
                            <button class="fw-bold btn btn-outline-danger btn-sm ">Não Autorizar</button>
                            <button class="fw-bold btn btn-outline-success btn-sm my-2">Autorizar</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Img-logo-impram" width="50px;" height="50px"></td>
                    <td>Jefeerson santos</td>
                    <td>PArticular</td>
                    <td>anderson.silva</td>
                    <td
                        <div class="text-center d-flex flex-column">
                            <button class="fw-bold btn btn-outline-danger btn-sm ">Não Autorizar</button>
                            <button class="fw-bold btn btn-outline-success btn-sm my-2">Autorizar</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Img-logo-impram" width="50px;" height="50px"></td>
                    <td>Jefeerson santos</td>
                    <td>PArticular</td>
                    <td>anderson.silva</td>
                    <td
                        <div class="text-center d-flex flex-column">
                            <button class="fw-bold btn btn-outline-danger btn-sm ">Não Autorizar</button>
                            <button class="fw-bold btn btn-outline-success btn-sm my-2">Autorizar</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Img-logo-impram" width="50px;" height="50px"></td>
                    <td>Jefeerson santos</td>
                    <td>PArticular</td>
                    <td>anderson.silva</td>
                    <td
                        <div class="text-center d-flex flex-column">
                            <button class="fw-bold btn btn-outline-danger btn-sm ">Não Autorizar</button>
                            <button class="fw-bold btn btn-outline-success btn-sm my-2">Autorizar</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Img-logo-impram" width="50px;" height="50px"></td>
                    <td>Jefeerson santos</td>
                    <td>PArticular</td>
                    <td>anderson.silva</td>
                    <td
                        <div class="text-center d-flex flex-column">
                            <button class="fw-bold btn btn-outline-danger btn-sm ">Não Autorizar</button>
                            <button class="fw-bold btn btn-outline-success btn-sm my-2">Autorizar</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Img-logo-impram" width="50px;" height="50px"></td>
                    <td>Jefeerson santos</td>
                    <td>PArticular</td>
                    <td>anderson.silva</td>
                    <td
                        <div class="text-center d-flex flex-column">
                            <button class="fw-bold btn btn-outline-danger btn-sm ">Não Autorizar</button>
                            <button class="fw-bold btn btn-outline-success btn-sm my-2">Autorizar</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><img src="/assets/impram-logo.png" alt="Img-logo-impram" width="50px;" height="50px"></td>
                    <td>Jefeerson santos</td>
                    <td>PArticular</td>
                    <td>anderson.silva</td>
                    <td
                        <div class="text-center d-flex flex-column">
                            <button class="fw-bold btn btn-outline-danger btn-sm ">Não Autorizar</button>
                            <button class="fw-bold btn btn-outline-success btn-sm my-2">Autorizar</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    `
}
