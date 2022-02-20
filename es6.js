//let const 

const name = 'afridi'
let name1  = 'afridi'

name1 = 'saad'
console.log(name1);

//template string
const tempString = `my name is ${name}`
console.log(tempString);

//default parameter
function maxNumber(array=[]){
    const max = Math.max(...array)//spred operator
    return max
}

const max = maxNumber([1,2,3,4,5])
console.log(max);

//sprade operator (...)
//arrow function
const square = x => x*x
console.log(square(4));