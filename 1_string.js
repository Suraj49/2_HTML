let str = 'suraj kumar'

console.log(str)//print 
console.log('--------------------')
//length proprty
console.log(str.length)
console.log('--------------------')
//methods

//Extration Method
//slice method
//slice(start , end+1)

let slicedstr = str.slice(0, 5)
console.log(slicedstr)
let slicestrend = str.slice(6)
console.log(slicestrend)
console.log('--------------------')
//subString method
let subString = str.substr(3, 5)
console.log(subString)
console.log('--------------------')
//Replacing method

let sayhello = 'hello Suraj'
console.log(sayhello)
console.log('--------------------')
let saybye = sayhello.replace('hello', 'bye')
console.log(saybye)
console.log('--------------------')
//Upper Lowercase method 
let hello = 'Hello JavaScript'
let upper = hello.toUpperCase()
console.log(upper)
console.log('--------------------')
let lower = hello.toLowerCase()
console.log(lower)
console.log('--------------------')
//concatenation (Concat method)
let str1 = 'Hello'
let str2 = 'Suraj'
let concatenation = str1.concat(" Bhai ", str2)
console.log(concatenation)
console.log('--------------------')
//Trim method used to remove whitespace

let whitespaceStr = '        Suraj Kumar         '
let trimText = whitespaceStr.trim()
console.log(trimText)
console.log('--------------------')

