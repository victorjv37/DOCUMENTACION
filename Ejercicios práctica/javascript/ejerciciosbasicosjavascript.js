// Filtrar los numeros pares/PWMBA
// const getEvenNumbers = (numbers) => {
//     const evenNumbers = [] ;

// for (let i=0 ; i<numbers.length ; i++ ) {
//     const number = numbers [i];

//     if ( number % 2 === 0 ) {
//     evenNumbers.push(number);
//     }
// }
// return evenNumbers;
// };
// const evenNumbers = getEvenNumbers ([2, 4, 7, 9, 10]);
// console.log('Los numeros pares son:', evenNumbers );

// CALCULAR MEDIA VJV
// const getAverage = (scores) => {
//     let sum = 0;

//     for (let i = 0 ; i < scores.length ; i++) {
//         const score = scores[i];
//         sum = sum + score;
//     }

//     return sum/scores.length;
// };

// const marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const average = getAverage(marks);
// console.log(`La media de las notas es: ${average}` );

// const myFavoriteHero = 'hulk';
// const x = 50;
// const h = 5;
// const y = 10;
// const z = h + y;

// console.log(myFavoriteHero, x, h, y, z);

// const character = {name: 'Jack Sparrow', age: 10};
// character.age = 25;

// console.log(character);

// firstName = 'Jon';
// lastName = 'Snow';
// age = 24;

// console.log(`Soy ${firstName} ${lastName},tengo ${age} años y me gustan los lobos.`);

// const toy1 = {name: 'Buss myYear', price: 19};
// const toy2 = {name: 'Rallo mcKing', price: 29};
// const toysprice = toy1.price+toy2.price;
// console.log(toysprice);

// let globalBasePrice = 10000;
// const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
// const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
// globalBasePrice = 25000;
// car1.finalPrice = car1.basePrice + globalBasePrice;
// car2.finalPrice = car2.basePrice + globalBasePrice;


// console.log(globalBasePrice,car1.finalPrice,car2.finalPrice);

// //1.1 Multiplica 10 por 5 y muestra el resultado mediante console.

// const x = 5 * 10;
// console.log(x);

// //1.2 Divide 10 por 2 y muestra el resultado en un console.

// const y = 10 / 2;
// console.log(y);

// //1.3 Muestra mediante un console el resto de dividir 15 por 9.

// a = 15 % 9;
// console.log(a);

// //1.4 Usa el correcto operador de asignación que resultará en o = 15,
// //teniendo dos variables p = 10 y j = 5.

// const p = 10; 
// const j = 5;
// const o = p + j ;
// console.log(o);

// //1.5 Usa el correcto operador de asignación que resultará en i = 50,
// //teniendo dos variables c = 10 y m = 5.

// const c = 10; 
// const m = 5;
// const i = c * m;
// console.log(i);ç

// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
// console.log(avengers[0]);

// // 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// // const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// avengers.shift();
// avengers.unshift("IRONMAN");
// console.log(avengers);

// // 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// // const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// console.log(avengers.length);

// // 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// // Muestra en consola el último personaje del array

// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
// rickAndMortyCharacters.push("Morty","Summer");
// console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1]);


// // 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.

// const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
// rickAndMortyCharacters2.pop();
// console.log(rickAndMortyCharacters2[0],rickAndMortyCharacters2[rickAndMortyCharacters2.length-1]);

// // 1.6 Elimina el segundo elemento del array y muestra el array por consola.

// const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
// rickAndMortyCharacters3.splice(1,1);
// console.log(rickAndMortyCharacters3);

// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

// for (let i = 0; i <= 9; i++) {
//     console.log(`Primer console log`,i); 
// };

// // 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// // cuando el resto del numero dividido entre 2 sea 0.


// for (let i = 0; i <= 9; i++) {
//     if(i % 2 === 0){
//         console.log(`Segundo console log`,i);
//     }
// };

// // 1.3 Crea un bucle para conseguir dormir contando ovejas.
// // Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// // Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
// // y cambia el mensaje en la décima vuelta a 'Dormido!'.

// for (let i = 0; i <= 10; i++) {
//     if(i<10){
//         console.log(`Intentando dormir 🐑`);
//     } else if (i === 10){
//         console.log(`Dormido!`)
//     }
// };

// Completa la función que tomando dos números como argumento devuelva el más alto.

// function sum(numberOne , numberTwo) {
//   let suma = 0
//     if (numberOne<numberTwo) {
//     suma = (numberTwo);
//   } else {
//     suma= (numberOne);
//   };
//   console.log(suma);
// }
//  sum(100,20000);

// Completa la función que tomando un array de strings como argumento devuelva el más largo, en
// caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

// const avengers = ['Hulk', 'SuperVictor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
// function findLongestWord(param) {
//     let avenger = 'z';
//   for (let i=0 ; i<avengers.length ; i++) {
//     let longestavenger = avengers[i];
//     longestavenger.toString;
//     if (avenger.length<longestavenger.length) {
//         avenger = avengers[i];
//     } if (avenger.length===longestavenger.length){
//         avenger = avenger;
//     } if (avenger.length>longestavenger.length) {
//         avenger = avenger;
//     }
//   }
//   console.log(avenger);
// }
// findLongestWord(avengers);

// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los
// números de la matriz. Puedes usar este array para probar tu función:

// const numbers = [ 2, 3, 5, 5, 5, 5];
// function sumAll(param) {
//     let sum = 0;

//     for (let i=0 ; i<numbers.length ; i++) {
//         sum = sum + numbers[i];
//     }
//     console.log(sum);
// }
// sumAll(numbers);

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

// const numbers = [2, 4, 1, 5, 4, 3, 2];
// function average(param) {
//     let sum = 0;
//     let average = 0;

//         for (let i=0 ; i<numbers.length ; i++) {
//             sum = sum + numbers[i];
//         }
//         average = sum / numbers.length;
//         console.log(average);
//     };
//     average(numbers);

// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo
// contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hu'];
// function averageWord(param) {
//     let sum = 0;
//     for (let i=0 ; i<mixedElements.length ; i++) {
//         let element = mixedElements[i];
//         if ( typeof(element) === 'number'){
//             sum = sum + element;
//         } 
//         if (typeof(element) === 'string'){
//             element.toString;
//             sum = sum + element.length;
//         }
//     }
//     console.log(sum)
// }
// averageWord(mixedElements);

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que
// existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

// const duplicated = ['sushi','pizza','burger','potatoe','pasta','ice-cream','pizza','chicken','onion rings','pasta','soda',`soda`];

// const removeDuplicates = (duplicates) => {
//     const repeated = [];
//     const notrepeated = [];

//     duplicates.sort();
//     for (let i = 0; i < duplicates.length; i++) {
//         const element = duplicates[i];
//         if (element === duplicates[i+1]){
//             repeated.push(element);
//         } else {
//             notrepeated.push(element);
//         }
//         } 
//         return notrepeated;
//     } 
// console.log(removeDuplicates(duplicated));

// : Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de
// dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la
// // contra un false. Puedes usar este array para probar tu función:

// const nameFinder = ['Peter','Steve','Tony','Natasha','Clint','Logan','Xavier','Bruce','Peggy','Jessica','Marc'];

// const finderName = (array,value) => {
//     let valueExists = false;
//     for (let i=0; i<array.length; i++){
//         let element = array[i];
//         if(element === value){
//             valueExists = true;
//             console.log(valueExists,i);
//             return  
//         }
//     };
//         console.log(valueExists);
// };
// finderName(nameFinder,'Logan');

// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo
// conforma. Puedes usar este array para probar tu función:

//INTENTO A SOLAS
// const counterWords = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','upgrade','code'];
// function repeatCounter(wordList) {
//     wordList.sort();
//     const repeated = [];
//     for (let i=0; i<wordList.length; i++){
//         const wordToCheck = wordList[i];
//         switch (wordToCheck) {
//             case wordList[0] :
//                 repeated.push(wordToCheck);
//                 break;
//             case wordList[i-1] :
//                 repeated.push(wordToCheck);
//                 break;
//             default :
//                 repeated.splice(0,repeated.length);
//                 console.log(repeated);
//                 repeated.push(wordToCheck);
//                 break;
//         };   //code code code code eat enjoy enjoy repeat sleep sleep
//      };
//      return repeated
// };
// console.log(repeatCounter(counterWords));

// INTENTO DE RESOLUCION CON CURRO, AL FINAL COGIMOS OTRO MÉTODO
// const counterWords = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','upgrade','code'];
// function repeatCounter(wordList) {
//     wordList.sort();
//     let timesThisWordIsRepeated = 0
//     for (let i=0; i<wordList.length; i++){
//         const wordToCheck = wordList[i];
//         switch (wordToCheck) {
//             case wordList[0] :
//             case wordList[i-1] :
//                 timesThisWordIsRepeated++
//                 break;
//             case wordList[wordList.length-1]:
//                 console.log(wordList[i] + '=>' + timesThisWordIsRepeated)
//                 break;
//             default :
//                 console.log(wordList[i-1] + '=>' + timesThisWordIsRepeated)
//                 timesThisWordIsRepeated = 1 
// //         };
// //         // console.log(timesThisWordIsRepeated)
// //      };
// // }; 

// // repeatCounter(counterWords)

// //INTENTO SOLO DESPUÉS DE HABLAR CON CURRO,TUVE QUE MIRAR UN PAR DE VECES LA CAPTURA

// const counterWords = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','upgrade','code','a'];
// const repeatCounter = (wordList) => {
// const listToObject = {};
// for (eachWord of wordList){
//     if (listToObject[eachWord]){
//         listToObject[eachWord] ++;
//     }else{
//         listToObject[eachWord] = 1;
//     }
// };
// console.log(listToObject);
// };
// repeatCounter(counterWords);

// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la
// función .includes de javascript.
// const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta','Camiseta de mi abuela', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
// const includeInTheProducts = (theProducts) =>{
//     for (eachProduct of theProducts){
//     if(eachProduct.includes('Camiseta')){
//         console.log(eachProduct);
//     }
//     };
// };
// includeInTheProducts(products);

// Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.
// Puedes usar este array:

// const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
// for (eachPlace of placesToTravel){
//             console.log(eachPlace);
//     };

// Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

// const alien = {
// name: 'Wormuck',
// race: 'Cucusumusu',
// planet: 'Eden',
// weight: '259kg'
// };

// for(eachData in alien){
//     console.log(alien[eachData]);
// }

// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
// Imprime en un console log el array. Puedes usar este array:

// const placesToTravel = [
//     {id: 5, name: 'Japan'},
//     {id: 11, name: 'Venecia'},
//     {id: 23, name: 'Murcia'}, 
//     {id: 40, name: 'Santander'},
//     {id: 44, name : 'Gandia'}
// ];
// const eliminateCertainId = (object) => {
//     for(eachObject in object){
//         if(object[eachObject].id === 11){
//             delete object[eachObject];
//         }else if(object[eachObject].id === 40){
//             delete object[eachObject];
//         }
      
//     //     if(object[eachObject].id === number){
//     //         delete object[eachObject];
//     //         console.log(object);
//     //     }
//      }; console.log(object)
// };
// eliminateCertainId(placesToTravel);

// Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
// Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:
//medio resuelto,preguntar a curro

// const toys = [
// {id: 5, name: 'Buzz MyYear'},
// {id: 11, name: 'Action Woman'},
// {id: 23, name: 'Barbie Man'},
// {id: 40, name: 'El gato con Guantes'},
// {id: 40, name: 'El gato felix'}
// ];
// const eliminateCertainToy = (toyList) =>{
//     for (eachToy of toyList){
//         if(eachToy.name.includes('gato')){
//            delete eachToy.name;
//            delete eachToy.id;
//         };
//     }; 
//     console.log(toyList);
// };
// eliminateCertainToy(toys);

// For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al
// array popularToys. Imprimelo por consola.. Puedes usar este array:

// const toys = [
// {id: 5, name: 'Buzz MyYear', sellCount: 10},
// {id: 11, name: 'Action Woman', sellCount: 24},
// {id: 23, name: 'Barbie Man', sellCount: 15},
// {id: 40, name: 'El gato con Guantes', sellCount: 8},
// {id: 40, name: 'El gato felix', sellCount: 35},
// {id: 41, name: 'El gato joao', sellCount: 105},
// {id: 42, name: 'La bestia', sellCount: 55}
// ];
// const getThePopularToys = (toyList) => {
//     const popularToys = [];
//     for(eachToy of toyList){
//         if(eachToy.sellCount >= 15){
//             popularToys.push(eachToy);
//         };
//     };
//     console.log(popularToys);
// };
// getThePopularToys(toys);

// Usa un bucle y dos condiciones para imprimir por consola el nombre de
// los usuarios que sean menor de edad precedidos del texto
// "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad,
// precedido del texto "Usuarios mayores de edad:".

// const users = [
// { name: "Tony", years: 43 },
// { name: "Peter", years: 18 },
// { name: "Natasha", years: 14 },
// { name: "Bruce", years: 32 },
// { name: "Khamala", years: 16 },
// { name: "Victor", years: 17}
// ];
// const valueTheAge = (userList) => {
//     const minorAgeUsers = [];
//     const mayorAgeUsers = [];
//     let counter = 0;
//     for(eachUser of userList){
//         if(eachUser.years >= 18){
//             mayorAgeUsers.push(eachUser);
//             counter ++;
//             if (counter === userList.length){
//                 console.log('Los usuarios mayores de edad son:')
//                 console.log(mayorAgeUsers);
//                 console.log('Los usuarios menores de edad son:')
//                 console.log(minorAgeUsers);
//                 };
//         }
//         if(eachUser.years < 18){
//             minorAgeUsers.push(eachUser);
//             counter ++;
//             if (counter === userList.length){
//                 console.log('Los usuarios mayores de edad son:')
//                 console.log(mayorAgeUsers);
//                 console.log('Los usuarios menores de edad son:')
//                 console.log(minorAgeUsers);
//                 };
//         }
//     };
// };
// valueTheAge(users);

// Usa un for para remplazar todas las comidas que no sean veganas con las frutas
// del array de frutas. Recuerda no usar frutas duplicadas. Finalmente,
// imprime el array resultante.

// const foodSchedule = [
// { name: "Heura", isVegan: true },
// { name: "Salmon", isVegan: false },
// { name: "Tofu", isVegan: true },
// { name: "Burger", isVegan: false },
// { name: "Rice", isVegan: true },
// { name: "Pizza", isVegan: false },
// ];

// const takeTheNonVegan = (foodList) => {
//     const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
//     let counter = 0;
//     for (eachFood in foodList){
//         if(foodList[eachFood].isVegan === false){
//             foodList[eachFood].name = fruits[counter];
//             counter++;
//             foodList[eachFood].isVegan = true;
//         }
//     } console.log(foodList);
// };
// takeTheNonVegan(foodSchedule);

// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias.
// Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos
// y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en
// por consola.

// const movies = [
// { name: "Titan A.E.", durationInMinutes: 130 },
// { name: "Nightmare before Christmas", durationInMinutes: 225 },
// { name: "Inception", durationInMinutes: 65 },
// { name: "The Lord of the Rings", durationInMinutes: 967 },
// { name: "Star Wars: A New Hope", durationInMinutes: 214 },
// { name: "Terminator", durationInMinutes: 140 },
// ];

// const identifyMovieSize = (movieList) =>{
//     const smallMovies = [];
//     const mediumMovies = [];
//     const largeMovies = [];
//     for(eachMovie in movieList){
//         if(movieList[eachMovie].durationInMinutes < 100){
//             smallMovies.push(movieList[eachMovie]);
//         }
//         if(movieList[eachMovie].durationInMinutes > 99 && movieList[eachMovie].durationInMinutes < 200){
//             mediumMovies.push(movieList[eachMovie]);
//         }
//         if(movieList[eachMovie].durationInMinutes > 200){
//             largeMovies.push(movieList[eachMovie]);
//         }
//     }
//     console.log('Peliculas pequeñas');
//     console.log(smallMovies);
//     console.log('Peliculas medianas');
//     console.log(mediumMovies);
//     console.log('Peliculas grandes');
//     console.log(largeMovies);
// };
// identifyMovieSize(movies);

// Usa un bucle para sumar el total de las ventas (sellCount)
// de todos los productos.

// const products = [
// { name: "Funko Dr. Strange", sellCount: 10 },
// { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
// { name: "Sable laser FX", sellCount: 23 },
// { name: "Varita de Voldemort", sellCount: 7 },
// ];

// const sumSellCount = (productList) => {
//     let sellCount = 0;
//     for(eachProduct in productList){
//         sellCount = productList[eachProduct].sellCount + sellCount;
//     }
//     console.log(sellCount);
// };
// sumSellCount(products);

// Usa un bucle para sumar el total de las ventas (sellCount) de todos
// los productos y mostrar por consola la media de ventas.

// const products = [
// { name: "Funko Dr. Strange", sellCount: 10 },
// { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
// { name: "Sable laser FX", sellCount: 23 },
// { name: "Varita de Voldemort", sellCount: 6 },
// ];

// const averageSellCount = (productList) => {
//     let sellCount = 0;
//     let averageCount = 0;
//     for(eachProduct in productList){
//         sellCount = productList[eachProduct].sellCount + sellCount;
//     }
//     averageCount = sellCount / productList.length;
//     console.log(averageCount);
// };
// averageSellCount(products);

// Usa un bucle para recorrer el array de peliculas (products) y añade al
// array goodProducts los que tengan más de 20 ventas (sellCount) y al array
// badProducts los que tengan menos.


// const products = [
// { name: "Funko Dr. Strange", sellCount: 10 },
// { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
// { name: "Sable laser FX", sellCount: 23 },
// { name: "Varita de Voldemort", sellCount: 6 },
// ];
// const identifyBadMovies = (movieList) =>{
//     const goodProducts = [];
//     const badProducts = [];
//     for(eachMovie in movieList){
//         if(movieList[eachMovie].sellCount <= 20){
//             badProducts.push(movieList[eachMovie]);
//         }if(movieList[eachMovie].sellCount > 20){
//             goodProducts.push(movieList[eachMovie]);
//         }
//     }
//     console.log('Peliculas malas');
//     console.log(badProducts);
//     console.log('Peliculas buenas');
//     console.log(goodProducts);
// };
// identifyBadMovies(products);




