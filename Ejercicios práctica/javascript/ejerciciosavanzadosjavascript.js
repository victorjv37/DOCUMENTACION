// Crea una arrow function que tenga dos parametros a y b y
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
// por consola la suma de los dos parametros.

// const sum = () =>{
//     let a = 10;
//     let b = 5;
//     console.log(a + b);
// };
// sum();

// 1.1 Ejecuta esta función sin pasar ningún parametro

// const sum = () =>{
//     let a = 10;
//     let b = 5;
//     return a + b;
// };
// console.log(sum())

// 1.2 Ejecuta esta función pasando un solo parametro

// const sum = (a) =>{
//     let b = 5;
//     return a + b;
// };
// console.log(sum(10))

// 1.3 Ejecuta esta función pasando dos parametros

// const sum = (a,b) =>{
//     return a + b;
// };
// console.log(sum(10,5))

// 2.1 En base al siguiente javascript, crea variables en base a las propiedades
// del objeto usando object destructuring e imprimelas por consola. Cuidado,
// no hace falta hacer destructuring del array, solo del objeto.

// const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

// const gameTitle = game.title;
// const gameGender = game.gender;
// const gameYear = game.year;

// console.log(gameTitle,gameGender,gameYear)

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

// const fruits = ['Banana', 'Strawberry', 'Orange'];

// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];

// console.log(fruit1,fruit2,fruit3);

// 2.3 En base al siguiente javascript, usa destructuring para crear 2
// variables igualandolo a la función e imprimiendolo por consola.

// const animalFunction = () => {
//     const name = 'Bengal tiger'
//     const race = 'tiger'
//     console.log(name,race);
// };
// animalFunction()

// 2.4 En base al siguiente javascript, usa destructuring para crear las
// variables name y itv con sus respectivos valores. Posteriormente crea
// 3 variables usando igualmente el destructuring para cada uno de los años
// y comprueba que todo esta bien imprimiendolo.

//  const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
//  const name = car.name;
//  const itv = car.itv;
//  const year1 = car.itv[0];
//  const year2 = car.itv[1];
//  const year3 = car.itv[2];
// console.log(name,itv,year1,year2,year3);

// 3.1 Dado el siguiente array, crea una copia usando spread operators.

// const pointsList = [32, 54, 21, 64, 75, 43];
// const pointList2 = pointsList.slice();
// console.log(pointList2);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
// const toyName = toy.name;
// const toyDate = toy.date;
// const toyColor = toy.color;
// const toy2 = {name: toyName, date: toyDate, color:toyColor};
// console.log(toy2);


// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.

// const pointsList = [32, 54, 21, 64, 75, 43];
// const pointsList2 = [54,87,99,65,32];
// const concatedPointlist = pointsList.concat(pointsList2);
// console.log(concatedPointlist);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.

// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
// const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
// const toyName = toy.name;
// const toyDate = toy.date;
// const toyColor = toy.color;
// const toyLights = toyUpdate.lights;
// const toyPower = toyUpdate.power;
// const fusionedToy = {name: toyName, date: toyDate, color: toyColor,lights: toyLights, power: toyPower};
// console.log(fusionedToy);


// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.

// const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
// const newColors = colors.slice();
// newColors.splice(2,1);
// console.log(newColors);

// 4.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().

// const users = [
// {id: 1, name: 'Abel'},
// {id:2, name: 'Julia'},
// {id:3, name: 'Pedro'},
// {id:4, name: 'Amanda'}
// ];
// const usersName = users.map(users => users.name);
// console.log(usersName);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.

// const users = [
// {id: 1, name: 'Abel'},
// {id:2, name: 'Julia'},
// {id:3, name: 'Pedro'},
// {id:4, name: 'Amanda'},
// {id:5, name: 'Amaya'},
// {id:6, name: 'Ecija'}
// ];
// const usersName = users.map(users => users.name)
//     usersName.forEach((name,index) => {
//         if(name.includes('A')){
//             usersName[index] = 'Anacleto'
//             users[index].name = 'Anacleto';
//         }    
//     });
// console.log(users,usersName);   


// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.

// const cities = [
// {isVisited:true, name: 'Tokyo'},
// {isVisited:false, name: 'Madagascar'},
// {isVisited:true, name: 'Amsterdam'},
// {isVisited:false, name: 'Seul'},
// {isVisited:true, name: 'Soli'}
// ];
// const citiesVisited = cities.map(cities => cities.name)
//     citiesVisited.forEach((name, index) => {
//         if(cities[index].isVisited){
//             citiesVisited[index] = `${name} (Visitado)`
//         }
//     });
// console.log(citiesVisited);

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18

// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
// const agesFiltered = ages.filter(age => age>18);
// console.log(agesFiltered);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.

// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
// const agesFiltered = ages.filter(age => age % 2 === 0);
// console.log(agesFiltered);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.

// const streamers = [
// {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];
// const streamerFavGame = streamers.filter(streamer => streamer.gameMorePlayed === "League of Legends");    
// console.log(streamerFavGame);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.

// const streamers = [
// {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];
// const streamerNameFiltered = streamers.filter(streamer => streamer.name.includes('u'));    
// console.log(streamerNameFiltered);


// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.


// const streamers = [
//     {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
//     {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
//     {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
//     {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
//     ];   
// const streamerNameFiltered = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends'));  
// streamerNameFiltered.forEach((streamer) => {
//     if(streamer.age > 35){
//         console.log(`{ name: '${streamer.name}', age: ${streamer.age}, gameMorePlayed: '${streamer.gameMorePlayed.toUpperCase()}' }`);
//     }else{
//         console.log(`{ name: '${streamer.name}', age: ${streamer.age}, gameMorePlayed: '${streamer.gameMorePlayed}' }`);
//     }
// });


// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

// const streamers = [
// {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];
// <!doctype html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
// <meta http-equiv="X-UA-Compatible" content="ie=edge">
// <title>Document</title>
// </head>
// <body>
// <input type="text" data-function="toFilterStreamers"/>
// </body>
// </html>

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.

// const streamers = [
// {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];
// <!doctype html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
// <meta http-equiv="X-UA-Compatible" content="ie=edge">
// <title>Document</title>
// </head>
// <body>
// <input type="text" data-function="toFilterStreamers"/>
// <button data-function="toShowFilterStreamers">Filter</button>
// </body>
// // </html>

// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.

// const numbers = [32, 21, 63, 95, 100, 67, 43];
// const numberFinded = numbers.find(number => number === 100);
// console.log(numberFinded);

// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

// const movies = [
// {title: 'Madagascar', stars: 4.5, date: 2015},
// {title: 'Origen', stars: 5, date: 2010},
// {title: 'Your Name', stars: 5, date: 2016}
// ];
// const movieFinded = movies.find(movies => movies.date === 2010);
// console.log(movieFinded);

// 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre
// 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa
// spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación
// lo queremos meter en la propiedad .mutation del objeto fusionado.

// const aliens = [
// {name: 'Zalamero', planet: 'Eden', age: 4029},
// {name: 'Paktu', planet: 'Andromeda', age: 32},
// {name: 'Cucushumushu', planet: 'Marte', age: 503021}
// ];
// const mutations = [
// {name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
// {name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
// {name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
// ];
// const alienFinded = aliens.find(aliens => aliens.name === 'Cucushumushu');
// const mutationFinded = mutations.find(mutation => mutation.name === 'Porompompero');
// alienFinded.mutation = mutationFinded;
// console.log(alienFinded);

// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
// los alumnos usando la función .reduce().

// const exams = [
// {name: 'Yuyu Cabeza Crack', score: 5},
// {name: 'Maria Aranda Jimenez', score: 1},
// {name: 'Cristóbal Martínez Lorenzo', score: 6},
// {name: 'Mercedez Regrera Brito', score: 7},
// {name: 'Pamela Anderson', score: 3},
// {name: 'Enrique Perez Lijó', score: 6},
// {name: 'Pedro Benitez Pacheco', score: 8},
// {name: 'Ayumi Hamasaki', score: 4},
// {name: 'Robert Kiyosaki', score: 3},
// {name: 'Keanu Reeves', score: 10}
// ];
// const examsSum = exams.reduce(function (accumulator, exams) {
//     return accumulator + exams.score},0);
// console.log(examsSum);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
// alumnos que esten aprobados usando la función .reduce().

// const examsScore = exams.map(exams => exams.score);
// const examsProved = examsScore.filter(exam => exam >= 5);
// const examsSum = examsProved.reduce(function (accumulator, examsProved) {
// return accumulator + examsProved},0);
// console.log(examsSum);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

// const examsAverage = exams.reduce(function (accumulator, exam) {
//     return accumulator + exam.score / exams.length},0);
// console.log(examsAverage);

// 6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
// .filter() y usa .reduce() para conseguir la media de sus .score.
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
// array .gender.

// const videogames = [
// {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
// {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
// {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
// {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
// {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
// {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
// ];
// const videogamesFiltered = videogames.filter(games => games.genders.includes('RPG'));
// const videogamesReduced = videogamesFiltered.reduce(function (accumulator, game){
//     return accumulator + game.score / videogamesFiltered.length},0);
// console.log(videogamesReduced);

// Dado el siguiente javascript usa forof para recorrer el array de películas,
// genera un nuevo array con las categorías de las películas e imprime por
// consola el array de categorías. Ten en cuenta que las categorías no deberían
// repetirse.
// Para filtrar las categorías puedes ayudarte de la función .includes().

// const movies = [
// {
// title: "Bracula: Condemor II",
// duration: 192,
// categories: ["comedia", "aventura"],
// },
// {
// title: "Spider-Man: No Way Home",
// duration: 122,
// categories: ["aventura", "acción"],
// },
// {
// title: "The Voices",
// duration: 223,
// categories: ["comedia", "thriller"],
// },
// {
// title: "Shrek",
// duration: 111,
// categories: ["comedia", "aventura", "animación"],
// }];

// const categorieBefore = [];
// for (movie of movies) {
//     categorieBefore.push(movie.categories);
// };
// const categories = [];
//         for(categorie of categorieBefore) {
//            for (item of categorie){
//             categories.push(item);
//            }
//         }
// const categoriesShowed = [];
// categories.forEach((categorie) => {
//     if(categoriesShowed.includes(categorie)){
//     }else{
//         categoriesShowed.push(categorie);
//     }
// });
// console.log(categoriesShowed);

// Dado el siguiente javascript usa forof y forin para hacer la media del
// volumen de todos los sonidos favoritos que tienen los usuarios.

// const users = [
// {
// name: "Alberto",
// favoritesSounds: {
// waves: { format: "mp3", volume: 50 },
// rain: { format: "ogg", volume: 60 },
// firecamp: { format: "mp3", volume: 80 },
// },
// },
// {
// name: "Antonio",
// favoritesSounds: {
// waves: { format: "mp3", volume: 30 },
// shower: { format: "ogg", volume: 55 },
// train: { format: "mp3", volume: 60 },
// },
// },
// {
// name: "Pedro",
// favoritesSounds: {
// shower: { format: "mp3", volume: 50 },
// train: { format: "ogg", volume: 60 },
// firecamp: { format: "mp3", volume: 80 },
// },
// },
// {
// name: "Cristina",
// favoritesSounds: {
// waves: { format: "mp3", volume: 67 },
// wind: { format: "ogg", volume: 35 },
// firecamp: { format: "mp3", volume: 60 },
// },
// },
// ];

// const soundsVolumes = [];
// const theFavoriteSounds = users.map(user => user.favoritesSounds);
// for (sounds of theFavoriteSounds){
//     soundsVolumes.push(sounds.waves);
//     soundsVolumes.push(sounds.rain);
//     soundsVolumes.push(sounds.firecamp);
//     soundsVolumes.push(sounds.shower);
//     soundsVolumes.push(sounds.train);
//     soundsVolumes.push(sounds.wind);
// };
// const volumesFiltered = soundsVolumes.filter(function(sound) {
//     return sound !== undefined;
// });
// const soundsVolumes2 = volumesFiltered.map(volume => volume.volume);
// let accumulator = 0;
// let volumeAverage = 0;
// soundsVolumes2.forEach((volume,index) => {
//     accumulator = volume + accumulator;
// });
// volumeAverage = accumulator / soundsVolumes2.length;
// console.log(volumeAverage);

// Dado el mismo javascript usa forof y forin para saber cuantas veces ha
// sido cada sonido agregado por los usuarios a favorito.
// Para ello recorre la lista de usuarios y usa forin para recoger el nombre
// de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada
// vez que ese sonido se repita como favorito en cada usuario.
// Este ejercicio es un poco complicado con los conocimientos actuales pero...a
// la vez un buen reto y oportunidad para comprender que hay muchas formas de
// hacer las cosas en javascript.

// const soundsCounted = [];
// const theFavoriteSounds = users.map(user => user.favoritesSounds);
// for (item of theFavoriteSounds){
//     for (sound in item){
//         soundsCounted.push(sound)
//     }
// };
// soundsCounted.sort();
// const finalSounds = {};

// for (eachSound of soundsCounted){
//     if (finalSounds[eachSound]){
//         finalSounds[eachSound] ++;
//     }else{
//         finalSounds[eachSound] = 1;
//     }};

// console.log(finalSounds);

// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el
// texto pasado coincida
// Haz varios ejemplos y compruebalos.
// Sugerencia de función:

// const mainCharacters = [
// "Luke",
// "Leia",
// "Han Solo",
// "Chewbacca",
// "Rey",
// "Anakin",
// "Obi-Wan",
// ];

// function findArrayIndex(array, text) {
//     for (character of array){
//         if (character.includes(text)){
//             const characterIndexOf = array.indexOf(character);
//             return characterIndexOf
//         }
//     }
// }
// findArrayIndex(mainCharacters, 'Rey')

// Usando la función anterior beneficiate de poder conocer el indice del array
// para crear una función llamada removeItem que pasandole un array y un texto
// como parametros (los mismos parametros que en el anterior ejercicio) llame a
// la función anteriormente creada findArrayIndex y obten el indice para
// posteriormente usar la función de javascript .splice() para eliminar el
// elemento del array.
// Finalmente retorna el array.
// De nuevo haz varios ejemplos para practicar y comprueba que funcionan
// correctamente.

// function removeItem(array, text) {
//     const characterIndex = findArrayIndex(array, text);
//         array.splice(characterIndex,1)
//     console.log(array);
// }
// removeItem(mainCharacters, 'Anakin')

// Crea una función llamada rollDice() que reciba como parametro el numero de caras
// que queramos que tenga el dado que deberá simular el codigo dentro de la función.
// Como hemos dicho, que la función use el parametro para simular una tirada de dado
// y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te
// preocupes! Busca información sobre la función de javascript Math.random()

// function rollDice(faces) {
//     return Math.floor(Math.random() * faces + 1);
// }
// console.log(rollDice(12))

// Crea una función llamada swap que reciba un array y dos parametros que sean
// indices del array. La función deberá intercambiar la posición de los valores de
// los indices que hayamos enviado como parametro. Retorna el array resultante.
// Sugerencia de array:

// const fantasticFour = [
// "La antorcha humana",
// "Mr. Fantástico",
// "La mujer invisible",
// "La cosa",
// ];

// function swap(array, index1, index2) {
//     const arraySliced = array.slice();
//     array.splice(index1, 1, array[index2]);
//     array.splice(index2, 1, arraySliced[index1]);
//     return array
// }
// console.log(swap(fantasticFour,1,2))

// Dado el siguiente javascript filtra los videojuegos por gender = 'Aventura'
// usando .filter() y usa .reduce() para conseguir la media de sus .score.
// La función .find() también podría ayudarte para el contrar el genero 'Aventura'
// en el array .gender.

// const videogames = [
// {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
// {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
// {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
// {name: 'Super Mario Odissey', genders: ['Plataforma'], score: 8.5},
// {name: 'Diablo III', genders: ['RPG', 'Aventura'], score: 7.5},
// {name: 'Shadow of the Colossus', genders: ['Aventura', 'El mejor videojuego'], score: 10},
// ]

// const videogamesFiltered = videogames.filter(videogame => videogame.genders.includes('Aventura'));
// const videogamesMaped = videogamesFiltered.map(videogames => videogames.score);
// const videogamesReduced = videogamesMaped.reduce(function (accumulator, game){
//     return accumulator + game / videogamesMaped.length},0);
// console.log(videogamesReduced)
