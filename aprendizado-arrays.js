const nomes = ['Joao', 'Ana', 'Caio', 'Lara'];

nomes.splice(1, 2, 'Rodrigo');
// nomes.push('Rodrigo');

//juntando salas

const salaJS = ['Lucas', 'José'];
const salaPHP = ['Gustavo', 'Gabriel'];

const novaSala = salaJS.concat(salaPHP);

//lista com 2 dimensões
const alunos = ['João', 'Juliana', 'Ana'];
const medias = [10, 6, 8];

const listaDeAlunosEMedias = [alunos, medias];

//procurando aluno e média

function exibeNomeENota(aluno) {
    // const alunos = listaDeAlunosEMedias[0];
    // const medias = listaDeAlunosEMedias[1];

    //é a mesma coisa que em cima - desestruturação de lista
    const [alunos, medias] = listaDeAlunosEMedias;

    if(alunos.includes(aluno)) {


        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

    } else {

    }
}


//for clássico

const numeros = [100, 200, 300];

for (let indice = 0; indice < numeros.length; indice++) {

}

//média com for

const notas = [10, 6, 5];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

let mediaFinal = somaNotas / notas.length;


//média com for of
for(let elemento of notas) {

}

//média com forEach
//element (é um parâmetro da função) está como uma função anônima - ela é uma função callback (é chamada para cada elemento de notas)
notas.forEach((element, index) => {
    
});

//callbacks
nomes.forEach(function(nome, index) {

});

function imprimeNome(nome) {

}

//sem abrir e fechar os parenteses do imprimeNome pq ele entende que eu tô pegando o retorno da função e não tem nenhum retorno
nomes.forEach(imprimeNome);

//map - adicionando pontos em cada uma das notas
//map é apropriado para reescrever arrays em novos arrays
const notasAtualizadas = notas.map((nota, index) => {
    return nota + 1 > 10 ? nota : nota++;
});

//alterando strings com map()

const novosNomes = ['Ana Julia', 'Caio vinicius', 'BIA silva'];
// const nomesPadronizados = nomes.map((nome) => {
//     return nome.toUpperCase();
// });

//mesma coisa em cima
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

//diferença entre forEach e map -> Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função callback retornar algum valor.


//filtrando elementos = reprovados
//caso vc não utilize um parâmetro você pode nomear com underline
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
});

//somando com reduce
const salaCobol = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    //acumulador começa a partir do valor 0 que passei embaixo
    // const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
    //     return acumulador + nota
    // }, 0);
    //o 0 acima funciona como a posição inicial dele

    //mesma coisa de cima
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => acumulador + nota, 0);

    const mediasFinal = somaDasNotas / notasDaSala.length;

    return mediasFinal;
}

//clonando com spread operator -> clonar o array original e adicionar o valor 10


//se eu fizer da forma de baixo ele vai alterar o array original também
const novasNotas = notas;
novasNotas.push(10);

//desempacotar notas -> faz a cópia do array - operador de espalhamento
// const novasNotasSpreadOperator = [...notas];
// novasNotasSpreadOperator.push(10);


//mesma coisa que usar o push(10)
const novasNotasSpreadOperator = [...notas, 10];


//removendo nomes repetidos - set (conjunto)
const nomesNovos = ['Lucas', 'Lucas', 'José'];

//uma das características da classe Set é que não pode ter elementos duplicados
const meuSet = new Set(nomesNovos);
// const nomesAtualizados = [...meuSet];


//mesma coisa que em cima
const nomesAtualizados = [...new Set(nomes)];