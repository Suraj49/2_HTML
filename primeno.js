var flag=true
var num=13;
for(var i=2;i*i<=num;i++){
    if (num%i==0){
        flag=false
        break
    }
}
    if(flag==true){
        console.log("Prime")
    }
    else{
        console.log("not prime")
    }