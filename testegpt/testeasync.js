// Exercício: Crie uma Promise que resolve com o texto "Sucesso!" depois de 2 segundos.
// Depois use .then() para imprimir o resultado.

// async function success() {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Sucesso!")
//         },2000)
//     })
// }
// (async()=>{
//     const resultado = await success()
//     console.log(resultado)
// })()


// Exercício: Crie uma Promise que rejeita com o texto "Erro!" se o número for < 5
// e resolve com "Número válido" se for >= 5.



// function checaNum(num) {
//   return new Promise((resolve, reject) => {
//     if (num >= 5) {
//       resolve("Número válido");
//     } else {
//       reject("Erro!");
//     }
//   });
// }

// checaNum(10)
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// checaNum(3)
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));



// Exercício: Crie uma função async que espera 3 segundos e depois retorna "Fim".
// Chame a função e mostre o resultado no console.

// function espera3() {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             const mensagem = "FIM"
//             resolve (mensagem)
//         }, 3000)
//     })
// }

// espera3()
// .then((res)=>console.log(res))
// .catch((err)=>console.error(err))


// async function espera3() {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             const mensagem = "fim"
//             resolve(mensagem)
//         },3000)
//     })
// }

// (async()=>{
//     try {
//         const res = await espera3()
//         console.log(res)
//     }catch(err){
//         console.error(err)
//     }
// })()


// Exercício: Crie uma função async que recebe um número.
// Se for par → resolve com "Número par".
// Se for ímpar → lance um erro.
// Use try/catch para capturar.

// async function checaPar(num) {
//   try {
//     if (num % 2 === 0) {
//       return "Esse número é par";
//     } else {
//       throw new Error(`O número ${num} é ímpar`);
//     }
//   } catch (err) {
//     console.error("Erro capturado:", err.message);
//   }
// }

// // Agora só chama direto:
// checaPar(4).then(console.log); // Esse número é par
// checaPar(7).then(console.log); // undefined (porque o erro foi tratado dentro da função)

// Exercício: Crie 3 Promises que resolvem depois de tempos diferentes (1s, 2s, 3s).
// Use Promise.all para mostrar todos os resultados juntos no console.
// const promise1 = new Promise ((res,re)=>{
//     setTimeout(() =>{
//         res("promessa 1 resolvida")
//     },1000)
// })
// const promise2 = new Promise ((res,re)=>{
//     setTimeout(() =>{
//         res("promessa 2 resolvida")
//     },2000)
// })
// const promise3 = new Promise ((res,re)=>{
//     setTimeout(() =>{
//         re("promessa 3 resolvida")
//     },3000)
// })

// Promise.all([promise1,promise2,promise3])
// .then((res) => console.log(res[0],res[1],res[2]))
// .catch((re) => console.error(re))


// Exercício: Use as mesmas 3 Promises do exercício anterior,
// mas agora utilize Promise.race e veja qual termina primeiro.

