class Cliente {
    _nome;
    _cpf;
    _conta;
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(novoCpf) {
        this.cpf = novoCpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(NovaConta) {
        this._conta = NovaConta;
    }
    toString() {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}
        - Conta: ${this._conta}`;
    }
}
