///ARRAY

let arrtest = ['hello', 50, 5.56841, true, false, null, undefined]
console.log(arrtest)


let num = [10, 20, 30, 40, 50, 60]
console.log(num)

console.log('----------------------------')
//Accessing the elements of array

console.log(num[2])//index 2
console.log(num[0]) //index 0
console.log(num[1]) //index 1
console.log(num[5]) //index 5

console.log('----------------------------')
//using loop
for(let i=0;i<6;i++){
    console.log(num[i])
}

console.log('----------------------------')

num[2]=500//update value in index 2
console.log(num)
console.log('----------------------------')


num[6]=700//add new value
console.log(num)

console.log("---------------------------")

//Array Methods
//pop methods-this is remove last element of the array

let removedElement=num.pop()
console.log(removedElement)

console.log('----------------------------')

//push methods-this is add the element at the last of the array

num.push(5000)
console.log(num)

console.log('----------------------------')

//shift and unshift
//shift-removes (0th index) array from starting of the array

num.shift()
console.log(num)

console.log("---------------------------")

//unshift adds(0th index) the elements at the starting of the array

num.unshift(5457)
console.log(num)

console.log("---------------------------")

//length of array

console.log('length of the array is',num.length)

console.log("---------------------------")

//2D Array .....

let matrix=[
    [1,2,3],
    [3,4,5],
    [6,7,8]
]
console.log(matrix[2][1])
console.log(matrix[1][1])
console.log(matrix[0][0])
console.log(matrix[1][2])

console.log("---------------------------")

console.log(matrix)

console.log("---------------------------")