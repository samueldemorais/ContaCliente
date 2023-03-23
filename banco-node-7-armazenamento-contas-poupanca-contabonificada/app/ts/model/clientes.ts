class Clientes{
    private clientes: Array<Cliente>;

    constructor(){
        this.clientes = [];
    }

    inserir(cliente: Cliente): void{
        this.clientes.push(cliente);
    }

    remover(cpf: string): void{
        let indexConta = this.clientes.findIndex(cliente => cliente.cpf === cpf);
        this.clientes.splice(indexConta, 1);
    }   

    listar(): Array<Cliente> {
        return this.clientes;
    }

    pesquisar(cpf: string) : Cliente {
       return this.clientes.find(cliente => cliente.cpf === cpf);
    }
}