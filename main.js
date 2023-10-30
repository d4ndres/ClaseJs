let numero1 = 137
const numero2 = 0
/*
True                / falsos
cualquier numero    / 0
"hola a todo"       / ""
true                / false
------             / undefined
------             / Null
*/

// for( let i = 0; i < 100; i++ )
// {
//     console.log( i );
// }

// Ciclos
// let i = 0;
// while( i < 10 )
// {
//     if( i == 50)
//     {
//         break;
//     }
    
//     if ( i == 5 )
//     {
//         i++;
//         continue;
//     }
    
//     console.log( i );
//     i++;
// }

// const frutas = ['manzana', 'naranja', 'plátano', 'fresa', 'kiwi', 'mango', 'piña', 'sandía', 'uva', 'papaya'];

// for( let fruta of frutas )
// {
//     console.log( fruta );
// }

var personas = [
    {
        nombre: "Juan",
        edad: 25,
        genero: "Masculino",
        ciudad: "Madrid"
    },
    {
        nombre: "María",
        edad: 30,
        genero: "Femenino",
        ciudad: "Barcelona"
    },
    {
        nombre: "Carlos",
        edad: 40,
        genero: "Masculino",
        ciudad: "Valencia"
    },
    {
        nombre: "Laura",
        edad: 22,
        genero: "Femenino",
        ciudad: "Sevilla"
    },
    {
        nombre: "Pedro",
        edad: 35,
        genero: "Masculino",
        ciudad: "Bilbao"
    },
    {
        nombre: "Ana",
        edad: 28,
        genero: "Femenino",
        ciudad: "Málaga"
    },
    {
        nombre: "Sergio",
        edad: 29,
        genero: "Masculino",
        ciudad: "Zaragoza"
    },
    {
        nombre: "Elena",
        edad: 27,
        genero: "Femenino",
        ciudad: "Granada"
    },
    {
        nombre: "Luis",
        edad: 32,
        genero: "Masculino",
        ciudad: "Murcia"
    },
    {
        nombre: "Isabel",
        edad: 26,
        genero: "Femenino",
        ciudad: "Alicante"
    }
];

const frutas = [
    { 
        nombre: 'manzana', 
        color: 'rojo', 
        sabor: 'dulce', 
        precio: 1.5 
    },
    { nombre: 'naranja', color: 'naranja', sabor: 'ácido', precio: 0.8 },
    { nombre: 'plátano', color: 'amarillo', sabor: 'dulce', precio: 0.5 },
    { nombre: 'fresa', color: 'rojo', sabor: 'dulce', precio: 2.0 },
    { nombre: 'kiwi', color: 'verde', sabor: 'ácido', precio: 1.2 },
    { nombre: 'mango', color: 'amarillo', sabor: 'dulce', precio: 2.5 },
    { nombre: 'piña', color: 'amarillo', sabor: 'dulce', precio: 1.8 },
    { nombre: 'sandía', color: 'verde', sabor: 'dulce', precio: 3.0 },
    { nombre: 'uva', color: 'morado', sabor: 'dulce', precio: 2.2 },
    { nombre: 'papaya', color: 'naranja', sabor: 'dulce', precio: 1.0 }
];

for ( let posicion = 0; posicion < frutas.length; posicion++ )
{
    console.log( personas[posicion].nombre, " le gusta ", frutas[posicion].nombre );
}