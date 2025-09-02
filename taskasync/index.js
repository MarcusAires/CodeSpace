// 🕐 Treino JS – 1 hora
// Bloco 1 – Funções puras e escopo (20 min)



// Crie uma função filtraPares que:

// Receba um array de números.

// Retorne um novo array apenas com os pares.

// Não use variáveis externas.

const filtraPares = (arr) => {
        let pares = []
        for (const num of arr) {
            if(num % 2 === 0){
                pares.push(num)
            }
        }

    console.log(pares)
}

// Crie uma função somaArray que:

// Receba um array de números.

// Retorne a soma total usando for loop.

// Não altere o array original.
const sum = (vetor) => {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor [i]
    }
    console.log(soma)
}

// Reescreva uma função incrementaIdade que:

// Receba um objeto {name, age}.

// Retorne uma cópia do objeto com age incrementado em 1.

// Não modifique o objeto original.

// 💡 Dica: Pense sempre no retorno da função, não em efeitos colaterais.

const person = {
    name: "Duda",
    age: 25
}

const incrementaIdade = (person) =>{
    return {...person, age: person.age + 1} 
}

console.log(incrementaIdade(person))



// Bloco 2 – Async/Await e Promises (25 min)

// Crie uma função espera que:

// Receba um número de segundos.

// Retorne uma Promise que resolve depois desse tempo com a mensagem "terminou".

const espera = (segundos) => {
    return new promise(resolve=>{
        setTimeout(()=>resolve("terminou"), segundos * 1000)
    }) 
}



// Crie uma função main (async) que:

// Chame espera(2) usando await.

// Ao receber o resultado, faça console.log da mensagem.

async function main() {
    const resultado = await espera(2);
    console.log(resultado); // imprime "terminou" depois de 2 segundos
}

main();


// Extra: crie uma função buscarUsuario que:

// Simule uma chamada a uma API usando Promise e setTimeout.

// Depois de 1,5s, retorne {id:1, nome:"Marcus"}.

// Consuma essa função com async/await e imprima o resultado.

// 💡 Dica: Sempre use resolve/reject dentro da Promise e await para pegar o resultado.

function buscarUsuario() {
    return new Promise(resolve => {
        setTimeout(() => resolve({id:1, nome:"Marcus"}), 1500);
    });
}

async function pegaUsuario() {
    const usuario = await buscarUsuario();
    console.log(usuario); // {id:1, nome:"Marcus"}
}

pegaUsuario();


// Bloco 3 – Boas práticas JS (15 min)

// Refatore o loop abaixo para for…of e usando função pura:

// let resultado = [];
// for (let i=0; i<nums.length; i++){
//     if(nums[i]%2===0) resultado.push(nums[i])
// }

let resultado = []

const filtPars = (nums) =>{
for (const num of nums) {
    if(num%2 === 0) resultado.push(num)
}
return resultado
}


// Crie uma classe Produto com:

// nome e preco como propriedades.

// Método desconto(percentual) que retorna novo objeto com o preço descontado, sem alterar o original.


class Produto {
    constructor(nome,preço){
        this.nome = nome,
        this.preço = preço
    }
    desconto(percentual){
        return new Produto(this.nome, this.preço*(1-percentual/100))
    }
}

// Extra: use map ou reduce pra criar um array de nomes de produtos a partir de um array de objetos {nome, preco}.