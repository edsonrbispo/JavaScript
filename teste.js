// 1. Introdução aos Arrays
// Um array em JavaScript é uma estrutura de dados que permite armazenar uma coleção de itens, como números, strings, objetos, entre outros. Arrays são úteis para armazenar listas ordenadas de dados.

// 2. Criando Arrays
// Você pode criar arrays de várias maneiras:


// Usando colchetes
let frutas = ['Maçã', 'Banana', 'Laranja'];

// Usando o construtor Array
let numeros = new Array(1, 2, 3, 4, 5);

// 3. Acessando Itens de um Array
// Os itens de um array são acessados usando índices, que começam em 0.


let primeiro = frutas[0]; // 'Maçã'
let segundo = frutas[1];  // 'Banana'

// 4. Modificando Itens de um Array
// Você pode modificar os itens de um array acessando seus índices.


frutas[1] = 'Manga'; // Agora frutas é ['Maçã', 'Manga', 'Laranja']
// 5. Métodos de Arrays
5.1.push()

// Adiciona um item ao final do array.


frutas.push('Uva'); // ['Maçã', 'Manga', 'Laranja', 'Uva']

// 5.2.pop()
// Remove o último item do array.

frutas.pop(); // ['Maçã', 'Manga', 'Laranja']
// 5.3. shift()
// Remove o primeiro item do array.

frutas.shift(); // ['Manga', 'Laranja']

// 5.4.unshift()
// Adiciona um item no início do array.

frutas.unshift('Morango'); // ['Morango', 'Manga', 'Laranja']
// 5.5. length
// Retorna o número de itens no array.

let tamanho = frutas.length; // 3

// 5.6.splice()
// Adiciona ou remove itens de qualquer posição no array.

// Adiciona 'Kiwi' na posição 1
frutas.splice(1, 0, 'Kiwi'); // ['Morango', 'Kiwi', 'Manga', 'Laranja']

// Remove 1 item na posição 2
frutas.splice(2, 1); // ['Morango', 'Kiwi', 'Laranja']

// 5.7.slice()
// Retorna uma cópia de uma parte do array.

let algumasFrutas = frutas.slice(1, 3); // ['Kiwi', 'Laranja']

// 6. Iterando sobre Arrays
// Você pode iterar sobre os itens de um array usando laços como for, forEach, map, entre outros.

// Usando for
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Usando forEach
frutas.forEach(function(item) {
    console.log(item);
});

// Usando map
let frutasMaiusculas = frutas.map(function(item) {
    return item.toUpperCase();
});
console.log(frutasMaiusculas); // ['MORANGO', 'KIWI', 'LARANJA']

// 7. Exemplo Prático: Gerenciando uma Lista de Compras

let listaDeCompras = [];

// Adicionando itens
listaDeCompras.push('Arroz');
listaDeCompras.push('Feijão');
listaDeCompras.push('Macarrão');

// Removendo o último item
listaDeCompras.pop();

// Adicionando item no início
listaDeCompras.unshift('Leite');

// Iterando e mostrando a lista de compras
listaDeCompras.forEach(function(item) {
    console.log(item);
});