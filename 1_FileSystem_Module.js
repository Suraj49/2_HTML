//file System



//File

const fileSystem=require('fs')

//1 Reading Writing Updating and Deleting in a File


//Read file use .readFileSync
let content =fileSystem.readFileSync('1.txt')
console.log('File data --> '+content)

//Writing to a file 
let writeContent =fileSystem.writeFileSync('2.txt','Hello im file 2')
console.log('File written')
