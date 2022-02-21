function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]))
const {x, y, z} = {x: 1, y1: 2, z: 3} 
console.log(y);
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2!=0);

console.log(output);

function* b (){
    yield 20
    yield 30
}

const c = b()
console.log(c.next());
console.log(c.next());

