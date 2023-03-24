class ClienteEspecial extends Cliente {
    private _dependentes: Array<Cliente>;
    
    constructor(nome: string, cpf: string, conta: Conta, dependentes: Array<Cliente>){
        super(nome, cpf, conta);
        this._dependentes = dependentes;
    }

    get dependentes(){
        return this._dependentes;
    }

    adicionarDependente(dependente: Cliente){
        this._dependentes.push(dependente);
    }

    removerDependente(cpf: string){
        let indiceDependente = this._dependentes.findIndex(cliente => cliente.cpf === cpf);
        this._dependentes.splice(indiceDependente, 1);
    }
}