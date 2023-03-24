class ClienteController {
    inputNome;
    inputCpf;
    inputConta;
    clientes;
    constructor() {
        this.inputNome =
            document.querySelector("#nomeC");
        this.inputCpf =
            document.querySelector("#cpfC");
        this.inputConta =
            document.querySelector("#contaC");
        this.clientes = new Clientes();
    }
    inserir() {
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, new Conta(this.inputConta.value));
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.querySelector('#cliente').appendChild(elementoP);
    }
}
