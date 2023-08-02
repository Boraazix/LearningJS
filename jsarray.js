

//métodos de arrays
let data = ['a', 'b', 'b', 'c'];

console.log(data.concat(['d', 'e', 'f']))
console.log(data.find(function (item) { return item > 'b' }))
console.log(data.findIndex(function (item) { return item > 'b' }))
console.log(data.indexOf('c'))
console.log(data.lastIndexOf('b'))
console.log(data.includes('c'))
console.log(data.pop())
console.log(data.push('c'))
console.log(data.shift())
console.log(data.unshift('a'))
console.log(data.some(function (item) { return item == 'a' }))
console.log(data.every(function (item) { return item >= 'a' }))
console.log(data.slice(1, 3))
console.log(data.slice(-2))
console.log(data.splice(2)); data = ['a', 'b', 'b', 'c'];
console.log(data.map(function (item) { return item + "_" }))
console.log(data.forEach(function (item) { item + "_" }))



console.log(data)