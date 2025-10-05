// Funções assíncronas

// setTimeout(() => {
//     console.log("setTimeout");
// }, 2000);

// console.log("console global");

const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("promise resolvida!");
        }, 2000);

    });

console.log(data); // await de alto nível

// (async function main() {
//     const data = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("promise resolvida!");
//         }, 2000);

//     });

//     console.log(data);
// })();