// ** DIrectories ** //

// Create , Delete , Check , Stats , Cpontent

const fileSystem=require('fs')

//create myDirectory

fileSystem.mkdirSync('myDirectory')
console.log('myDirectory Created')

// //delete myDirectory

fileSystem.rmdirSync('myDirectory')
console.log('myDirectory deleted')

//Check 
// ture or false

let doseExist=fileSystem.existsSync('1.txt')
console.log(doseExist)


//Stats

let Statistics=fileSystem.lstatSync('1.txt')
console.log(Statistics)


console.log('is File ?',Statistics.isFile())

console.log('is Directory ?',Statistics.isDirectory())

//ReadDirSync

let folderPath=  'D:\\Dev\\2_HTML\\myDirectory'
let folderCont=fileSystem.readdirSync(folderPath)
console.log('folder Content -> '+folderCont)