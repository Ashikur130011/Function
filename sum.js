const numbers = [87, 45, 32, 45, 67, 85, 57, 68, 94]

function sumArray(numbers){
    let sum = 0;
    for(let i =0; i<numbers.length; i++){
        let number = numbers[i]
        sum = sum + number
    }
    return sum;
 }
const sumNumbers= sumArray(numbers)
console.log(sumNumbers);
//console.log(sumArray([56, 67, 47, 93]));

// for loop
let sum = 0;
for(let i=0; i < numbers.length; i++){
    let number = numbers[i]
    sum = sum + number
    //console.log(sum);
}
//console.log(sum);