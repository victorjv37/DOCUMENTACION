// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
// console.log(document.querySelector('.showme'));
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
// console.log(document.querySelector('#pillado'));
// 1.3 Usa querySelector para mostrar por consola todos los p
// console.log(document.querySelectorAll('p'));
// 1.4 Usa querySelector para mostrar por consola todos los elementos con
// la clase.pokemon
// console.log(document.querySelectorAll('.pokemon'));
// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".
// console.log(document.querySelectorAll('span[data-function="testMe"]'));
// ?????????????????????????????
// // 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// // data-function="testMe".
// console.log(document.querySelector('span[data-function="testMe"]:nth-child(3n)'));
// ?????????????????????????????

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
// let div1 = document.createElement('div');
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
// const body = document.querySelector('body');
// let p = document.createElement('p');
// body.append(div1);
// div1.appendChild(p);
// p.innerHTML = 'soy un parrafo'
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// loop con javascript.
// for(let i = 0; i < 6; i++){
// let p = document.createElement('p');
// document.body.append(p);
// }
// 2.4 Inserta dinamicamente con javascript en un html una p con el
// texto 'Soy dinámico!'.
// const dinamicHtml = document.createElement('p');
// document.body.append(dinamicHtml);
// dinamicHtml.innerText = 'soy dinamico!!'
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
// const h2 = document.querySelector('h2.fn-insert-here');
// h2.innerText = 'Wubba Lubba dub dub';
// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
// const appListMaker = (appList1) => {
//     const appList = document.createElement('ul');
//     document.body.append(appList);
//     for (app of appList1){
//         let appLi = document.createElement('li');
//         appList.appendChild(appLi);
//         appLi.innerText = app;
//     }
// };
// appListMaker(apps);
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
// const remove = document.querySelectorAll('.fn-remove-me');
// const elementRemover = (remove) => {
//     for (element of remove){
//         element.remove();
//     }
// };
// elementRemover(remove);
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.
// const firstDiv = document.querySelector('div');
// const middleP = document.createElement('p');
// middleP.innerText = 'Voy en medio!!'
// firstDiv.append(middleP);
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// .fn-insert-here
// const allDiv = document.querySelectorAll('div.fn-insert-here');
// for (div of allDiv){
//     let p = document.createElement('p');
//     div.appendChild(p);
//     p.innerText = 'Voy dentro!!'
// }

// 3.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
// const appListMaker = (appList1) => {
//     const appList = document.createElement('ul');
//     document.body.append(appList);
//     for (app of appList1){
//         let appLi = document.createElement('li');
//         appList.appendChild(appLi);
//         appLi.innerText = app;
//     }
// };
// appListMaker(countries);
// 3.2 Elimina el elemento que tenga la clase .fn-remove-me.
// const remove = document.querySelectorAll('.fn-remove-me');
// const elementRemover = (remove) => {
//     for (element of remove){
//         element.remove();
//     }
// };
// elementRemover(remove);
// 3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
// const appListMaker = (appList1) => {
// const appList = document.createElement('ul');
// const div = document.querySelector('div');
// div.appendChild(appList);
//     for (app of appList1){
//         let appLi = document.createElement('li');
//         appList.appendChild(appLi);
//         appLi.innerText = app;
//         appLi.setAttribute('data-function', 'printHere')
//     }
// };
//     appListMaker(cars);

// 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
// {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];

// const getDivTemplate = (appTitle, appImg) => {
//     return `<div class='trash'>
//     <h4>${appTitle}</h4>
//     <img src='${appImg}'></img>
//     <button>DELETE</button>
//     </div>`;
// };

// const div1 = document.querySelector('div');

// for (let i = 0; i < countries.length; i++) {
//     const country = countries[i];

//     div1.innerHTML += getDivTemplate(
//     country.title,
//     country.imgUrl
//    );
// };

// 3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

// const parent = document.querySelector("div");
// const child = document.querySelector(".trash");
// const throwawayNode = parent.removeChild(child);

// 3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.


// const deleteButton = (event) =>{
//     const divSelected = event.target.parentNode;
//     divSelected.classList.add('truetrash');
//     console.log(divSelected);
//     const parent = document.querySelector("div.trash");
//     const child = document.querySelector(".truetrash");
//     child.parentNode.removeChild(child);
// };

// const allButtons = document.querySelectorAll('div > button');

// for (button of allButtons){
//     button.addEventListener('click', deleteButton);
// };

// 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

// const theButton = document.createElement('button');
// theButton.setAttribute('id','btnToClick');
// document.body.appendChild(theButton);

// const clickEvent = (event) =>{
// console.log(event);
// };

// theButton.addEventListener('click', clickEvent);

// 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

// let inputValue = '';

// const onInputChanged = (event) =>{
// inputValue = event.target.value;
// console.log(inputValue);
// };

// const inputFocused = document.querySelector('input.focus');
// inputFocused.addEventListener('focus', onInputChanged)

// 4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

// let inputValue = '';

// const onInputChanged = (event) =>{
// inputValue = event.target.value;
// console.log(inputValue);
// };

// const inputFocused = document.querySelector('input.focus');
// inputFocused.addEventListener('input', onInputChanged)

