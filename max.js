function compareNumber(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return num1
    }
    else if(num2> num1 && num2> num3){
        return num2
    }
    else{
        return num3
    }
}

const bigNumber= compareNumber(645,642,1454)
console.log("Biggest Number is:",bigNumber);