// 1. Array e loop
// Dado o array:

const nums = [3, 7, 10, 15, 21];

let pares = []

// 👉 Crie uma função que retorna um novo array só com os números pares.

function numPares(arr){
    for (const num of arr) {
        if(num%2 === 0){
            pares.push(num)
        }
    }
    console.log(pares)
}
numPares(nums)

// 2. Desestruturação e spread
// Dado o objeto:

const user = { id: 1, name: "Marcus", age: 30 }

// 👉 Crie uma cópia desse objeto, mas alterando apenas o age para 31, sem modificar o objeto original.

const userCopy = {...user, age:31}
console.log(userCopy)


// 3. Função assíncrona
// 👉 Escreva uma função getData que retorna a string "ok" depois de 1 segundo usando Promise + async/await.

function getData(){
    return new Promise(()=>{
        setTimeout(()=> {
            console.log("ok")
        },1000)
    }) 
}
getData()


// 4. Map/Reduce
// Dado o array:
const products = [
  { name: "Arroz", price: 10 },
  { name: "Feijão", price: 7 },
  { name: "Carne", price: 25 }
];
// 👉 Use reduce para calcular o preço total.
const soma = products.reduce((ac,product) => ac + product.price, 0)
console.log(`O valor total dos produtos é: ${soma}`)

// 5. Classe simples
// 👉 Crie uma classe Person com propriedades name e age, e um método sayHello que imprime "Olá, meu nome é X e tenho Y anos".

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Olá, meu nome é ${this.name} e eu tenho ${this.age} anos`)
    }
}

const marcus = new Person("Marcus", 28)
marcus.sayHello()