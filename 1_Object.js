let obj = {}//declere 
let person = {
    name: 'Suraj',
    age: 29,
    phone: 12347583,
    gender: 'male',
    height: '6 feet'
}

let car={
    name : 'Thar',
    brand : 'Mahindra',
    topSpeed : '155 Kmph',
    price : '13.17 lakh',
    color : 'Red',
    is4x4 :'true'
}
let suraj={
    name:'Suraj',
    lastname:'kumar',
    age : 22,
    height : 6,
    address:{
        city:'Muzaffarpur',
        state:'Bihar'
    },

    //sayHi is the key
    sayHi:function(){
        console.log("Hello Suraj")
    }

}
// Dot Notation
console.log("Dot Notation")

console.log(car)
console.log(suraj.name)
console.log(suraj.lastname)
console.log(suraj.address)
console.log(suraj.address.city)

suraj.sayHi()

//Bracket Notation
console.log("Bracket Notation")

console.log(suraj['name'])

// for in loop for objects

for(let key in car){
    console.log('key:' , key , "value:" , car[key])
}

//update in key value
car.is4x4=false
console.log(car.is4x4)

//add new key in object
car.is2x2=false
console.log(car)

//delete key in object
delete car.is2x2
console.log(car)