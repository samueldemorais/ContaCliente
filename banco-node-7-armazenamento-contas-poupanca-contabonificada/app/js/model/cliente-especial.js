class ClienteEspecial extends Cliente {
    _dependentes;
    constructor(nome, cpf, conta, dependentes) {
        super(nome, cpf, conta);
        this._dependentes = dependentes;
    }
    get dependentes() {
        return this._dependentes;
    }
    adicionarDependente(dependente) {
        this._dependentes.push(dependente);
    }
    removerDependente(cpf) {
        let indiceDependente = this._dependentes.findIndex(cliente => cliente.cpf === cpf);
        this._dependentes.splice(indiceDependente, 1);
    }
}
