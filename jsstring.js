
// métodos de strings
let name ="Russell";
let num = 8;

console.log(name.charAt(0))
console.log(name.charCodeAt(0))
console.log(name.concat(" Edward"))
console.log(name.endsWith('l'))
console.log(name.startsWith('R'))
console.log(String.fromCharCode(82))
console.log(name.includes('uss'))
console.log(name.indexOf('s'))
console.log(name.lastIndexOf('s'))
console.log(name.match(/sse/))
console.log(name.repeat(2))
console.log(name.replace('s', 'z'))
console.log(name.search('se'))
console.log(name.slice(3, 6))
console.log(name.substring(3, 6))
console.log(name.substr(3, 3))
console.log(name.split('se'))
console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(num.toString())
console.log(("     " + name + "   ").trim() + ".")
console.log(name.toLocaleLowerCase())