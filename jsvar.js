
let num = 1;
console.log(num);
num++;
console.log(num);
num += 2;
console.log(num);
num *= 2;
console.log(num);
console.log(typeof num);

const name = "Russell";
const nick = "Boraazix";
console.log(name, nick);

// concatenar

const cidade = "Montes Claros";
const estado = "MG";
const endereco = cidade + "-" + estado
console.log(endereco);


const welcome = 'Seja bem vindo, ';
let text = welcome + name;
console.log(text);

const letters = ['a', 'b', 'c'];
console.log(letters.join('-'));

//lenght

text = "Ola amigos";
let tamanho = text.length;
console.log(text, tamanho);

let quintaletra = text[4];
console.log(quintaletra)

// array

let data = [1, 2, 3];
data.push(4);
console.log(data);
data.pop();
console.log(data);
data.shift();
console.log(data);
data.unshift(1);
console.log(data);
data.splice(1, 1);
console.log(data);

// function

function sayName() {
    console.log(name);
}
sayName();

function bomDia(nom) {
    console.log("Bom dia, " + nom + "!")
}
bomDia(name);

function sum(a, b) {
    console.log(a + b)
}
sum(1, 5);

function sum2(a, b) {
    return a + b;
    // nada
    // aqui
    // será
    // executado
}

console.log(sum2(1, 5));

//condicionais

//  if

/*
if(condicao) {

    && E
    || OU
    == IGUAL O VALOR
    === IGUAL ATÉ O TIPO
    !== DIFERENTE ATÉ O TIPO
    != DIFERENTE O VALOR
    > MAIOR QUE
    < MENOR QUE
    >= MAIOR OU IGUAL
    <= MENOR OU IGUAL

} else {

}

ternario = condição ? sim : senão;

1, 'a' é true
0, '', null, undefined é false

*/

//object

let movie = {
    'nome': 'seu zé',
    'ano': 1996
}
console.log(movie);
delete movie.ano;
console.log(movie);

console.log(movie.hasOwnProperty('nome'))

// do while

//faz antes de conferir a condição
let x = 10;
do {
    x++;
    console.log(x)
} while (x < 13)
// -- 11
// -- 12
// -- 13

// "foreach" 
// for of

for (item of data) {
    console.log(item)
}

// for in
for (indice in movie) {
    console.log(movie[indice])
}
