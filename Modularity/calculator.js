function sum(a,b){
    console.log('The sum is ',a+b)
}

function sub(a,b){
    console.log('The sub is ',a-b)
}

function mul(a,b){
    console.log('The mul is ',a*b)
}

function div(a,b){
    console.log('The div is ',a/b)
}

// sum(10,10)

// sub(20,10)

// mul(10,5)

// div(50,5)

module.exports={
    Add : sum,
    Sub : sub,
    Mul : mul,
    Div : div
}