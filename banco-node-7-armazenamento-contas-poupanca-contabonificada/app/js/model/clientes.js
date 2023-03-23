class Clientes {
    clientes;
    constructor() {
        this.clientes = [];
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        let indexConta = this.clientes.findIndex(cliente => cliente.cpf === cpf);
        this.clientes.splice(indexConta, 1);
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
}
