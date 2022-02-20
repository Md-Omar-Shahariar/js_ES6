const fish  = {id:58, name: 'king hilsa', phone: '0012', price : 90000, dress : 'silver' }

// const phone = fish.phone
// const price = fish.price
// const id  = fish.id
// const dress = fish.dress

const {price , phone , id , dress} = fish
console.log(price , phone , id , dress);


const company = {
    name : 'GP',
    web : {work : 'website development', emlpoyee : '22', farmework : 'react'}
}

const {work , farmework} = company.web

console.log(work, farmework);