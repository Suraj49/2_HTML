const path=require('path')

let filePath='D:\\Dev\\2_HTML\\1.txt'

let extensionName=path.extname(filePath)//print extensionName
console.log(extensionName)

let baseName=path.basename(filePath)//print file name
console.log(baseName)

console.log(__dirname)

console.log(__filename)
