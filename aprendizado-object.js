//nome, idade e cpf são propriedades
const objetoPessoa = {
    nome: 'Gustavo',
    idade: 24,
    cpf: 33123123123
};

//primeiros digitos do cpf -> chamando métodos no meu objeto
clientes.cpf.substring(0, 3);


//adicionado e alterando, sendo uma const não é permitido reatribuir o objeto inteiro, mas é possível manipular ele
objetoPessoa.profissao = 'dev';

//é possível guardar um array ou objeto dentro dele
const cliente = {
    nome: 'Lucas',
    telefones: [11111111, 2222222]
};

//vale lembrar que endereço seria como um objeto já que possui características
cliente.endereco = {
    rua: 'rua 1',
    bairro: 'bairro 1'
};

//um objeto dentro de um array, dessa forma podemos utilizar os métodos do array aqui
cliente.enderecos = [
    {
        rua: 'rua 1',
        bairro: 'bairro 1',
        apartamento: false
    },
    {
        rua: 'rua 2',
        bairro: 'bairro 2',
        apartamento: false
    }
];

cliente.enderecos.push({
    rua: 'rua3',
    bairro: 'bairro3',
    apartamento: true
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);


//funções
cliente.saldo = 200;
cliente.retiraDinheiro = function(valor) {
    if(valor <= this.saldo) this.saldo -= valor;
}

cliente.retiraDinheiro(100);

//for in
for (let key in cliente) {
    let tipo = typeof cliente[key];

    // if(tipo !== 'object' && tipo !== 'function')
    //     return;
}

//métodos de objeto

//retorna um array das chaves de cliente
const chavesDoObjeto = Object.keys(cliente);

if(chavesDoObjeto.includes('enderecos')) console.log('tem endereço');


//sintaxe de espalhamento com objetos e arrays
function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    
}

//vai passar cliente.telefones[0], cliente.telefones[1]
ligaParaCliente(...cliente.telefones);

// const encomenda = {
//     destinatario: cliente.nome,
//     rua: cliente.enderecos[0].rua,
//      bairro: cliente.enderecos[0].bairro
// };


// mesma coisa que em cima
const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
};


//JSON - Javascript Object Notation
//exemplo de JSON - Não existem variáveis - Chaves das propriedades têm aspas duplas (" ") - Restrição de trailing comma (último item não pode ter virgula)
// Funções não são permitidas, precisamos omiti-las do nosso objeto;
// Comentários não são permitidos;
// Suporta apenas tipos primitivos (string, number, boolean, null);
// O undefined também não é permitido;
// Algumas estruturas mais complexas, como datas ou a escrita em Regex, também podem não ser aceitas.
// {
//     "nome": "Joao",
//     "email": "joao@firma.com",
//     "telefone": ["11223344", "11922334453"],
//     "endereco": {
//       "rua": "R. Joseph Climber",
//       "numero": 1337,
//       "apartamento": true,
//       "complemento": "ap 934"
//     }
//   }

const dados = require("./aprendizado-object-json.json");

const clienteEmString = JSON.stringify(dados);
const clienteEmObject = JSON.parse(clienteEmString);

//encontrar um object no array do json
const jsonClientes = require("./aprendizado-object-json-2.json");

function encontrar(lista, chave, valor) {
    //find vai dar um item na lista, se houver no array ele vai retornar true
    return lista.find(
        (item) => item[chave].includes(valor)
    );
}

const encontrado = encontrar(jsonClientes, 'nome', 'Kirby');


//filtrar as pessoas que vivem em ap e não colocaram complemento
function filtrarApartamentosSemComplemento(listaClientes) {
    return listaClientes.filter(
        (cliente) => {
            //hasOwnProperty verifica se ele tem uma propriedade
            return (
                cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento')
            );
        }
    )
}

const filtrados = filtrarApartamentosSemComplemento(jsonClientes);

//ordenando objetos
function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]) 
            return -1;
        if(a[propriedade] > b[propriedade])
            return 1;

        return 0;
    });

    return resultado;
}

const ordernadoNome = ordenar(jsonClientes, 'nome');