function largestNumber(ages){
    let element = 12;
    for(let i = 0; i < ages.length; i++){
        let age = ages[i]
        if(age < element){
            element=age
        }
    }
    return element
}
const ages=[12, -7, 3, 16, -32, 55, 43]
let largestAge = largestNumber(ages)
console.log(largestAge);