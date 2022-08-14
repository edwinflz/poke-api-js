// console.log(fetch('https://pokeapi.co/api/v2/pokemon/1'));

// const doTask = (iterations) =>
//   new Promise((resolve, reject) => {
//     const numbers = [];
//     for (let i = 0; i < iterations; i++) {
//       const number = 1 + Math.floor(Math.random() * 6);
//       console.log(number, 'number');
//       numbers.push(number);
//       if (number === 6) {
//         reject({
//           error: true,
//           message: 'Se ha sacado un 6',
//         });
//       }
//     }
//     resolve({
//       error: false,
//       value: numbers,
//     });
//   });

const doTask = (iterations) =>
  new Promise((resolve, reject) => {
    if (iterations === 1) {
        resolve('Exito');
    }
   reject('Error');
});




  doTask(2)
  .then(resultado => console.log(resultado, 'resultado'))
  .catch(error => console.log(error, 'error'));