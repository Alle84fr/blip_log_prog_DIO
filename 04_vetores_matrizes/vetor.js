// Documentação oficial do js é no site https://developer.mozilla.org/en-US/docs/Web/JavaScript
// para ver array/vetor/estrutur de dados armazenado em coleção, está em References - array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// ou usar o site https://www.w3schools.com/js/default.asp
// array - https://www.w3schools.com/js/js_arrays.asp

// variável guarda apenas um dado em sua memória
let pokemon = "pikachu"

// coleção, lista,dict...

// lista [] coclchetes vazio, lista vazia
let pokemons = []

// criando lista já com dados
// indice 0 = item 1 = p
// indice 6 = tem 7 = u
let pokemns = ["p", "i", "k", "a", "c", "h", "u"]

//pegar um intem da lista - íncide, que inicia com zero
console.log(pokemns[0])
console.log(pokemns[1])
console.log(pokemns[4])
console.log(pokemns[6])

//mostrar otda lista
console.log(pokemns)

//método .shift() -> method removes the first item of an array(vetor), changes the original array
pokemns.shift()
console.log(".shift() - removeu o p da lista")
console.log(pokemns)

//método .pop() -> removes the last element from array (vetor, coleção)
pokemns.pop()
console.log(".pop() - removeu o u da lista")
console.log(pokemns)

//método .push() ->method adds new items to the end of an array, change de length of the array, return the new length
pokemns.push("add to end")
console.log(pokemns)

//método .reverse() -> method reverses the order of the elements in an array, overwrites the original array
num = [1, 5.2, 13.87, 19]
num.reverse()
console.log(".inverte()")
console.log(num)

//método .slice() -> removes returns selected elements in a new array, does not change the original array
// o 5 não entra, irá mostrar índice 2, 3 e 4
console.log(".pop() - removeu o u da lista")
console.log(pokemns.slice(2, 4))

//método .splice() -> method adds and/or removes array elements, overwrites the original array
// (index, count, item1...itemN)
// Index = position to add or remove items, aqui é o ponto de onde iniciará adicão ou subtração
// count = opcional, number of items to be removed, n° de itens que serão deletados a partir do index
// item = opcional = te new elements to be added, caso queira por um novo valor
console.log(".splice() - adicona ou/e remove item")
console.log(pokemns)
pokemns.splice(2, 2, "sem tirar")
console.log(pokemns)
pokemns.splice(2, 2, "tirando do 2")
console.log(pokemns)

//