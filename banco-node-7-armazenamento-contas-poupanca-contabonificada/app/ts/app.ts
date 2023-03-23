let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const c2 = new Conta('2', 100);

const cliente1 = new Cliente('samuel', '123789', c1);
const cliente2 = new Cliente('gabriel', '154321', c2);
console.log(cliente1);
console.log(cliente2);
const clientes = new Clientes();
clientes.inserir(cliente1);
clientes.inserir(cliente2);
console.log(clientes.listar());
console.log(clientes.pesquisar('123789'));
clientes.remover('154321');
console.log(clientes.listar());