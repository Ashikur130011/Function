function smallNumber(num1, num2, num3){
    let small = Math.min(num1, num2, num3);
    return small
}
let smallestNum= smallNumber(667, 887, 342)
console.log("Small Number is: ", smallestNum);