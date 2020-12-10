//1) gib nur das ERSTE Element des Arrays zurück
function getFirstElement(array) {
    // console.log(array[0]);
    return array[0]
}

//2) gib alle AUSSER dem letzten Element des Arrays zurück
function getAllButLast(array2) {
    // console.log(array.pop());
    array2.pop()
    return array2
}

//3) gib nur das LETZTE Element des Arrays zurück
function getLastElement(array) {
    return array.pop()
}

//4) gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück
function deleteFirst(array) {
    array.shift()
    return array
}

//5) gib das Element zurück, das an Position n steht (du brauchst einen zweiten Parameter in deiner Funktion), wenn n negativ oder größer als die Länge des Arrays ist gib das letzte Element zurück
const getPosition = (array, position) => {
    return array[position]
}

//6) ein bestimmtes Element komplett aus deinem Array entfernt
const removeItem = (array, rem) => {
    const result = array.filter(ele => ele !== rem)
    return result
}
//otra forma mas corta:
// const removeItem = (array, rem) => {
//     return array.filter(ele => ele !== rem)
// }
// module.exports = removeItem

//otra forma mas larga:
// const removeItem = (array, rem) => {
//     const result = array.filter(ele => {
//             if (ele !== rem) {
//                 return ele
//             }
//         })
//         return result
//     } 
// module.exports = removeItem


//7) gib ein Array zurück, dass nur aus einzigartigen Werten besteht. Entferne die doppelten Elemente!
// => Input: [1,6,9,2,1,6,7,10]
// => Output: [1,6,9,2,7,10]
function deleteDouble(array) {
    return new Set(array)
}


// 8) gib die Summe eines Arrays zurück??
// function getSum(array) {
//     for (i = 0; i < array.lenght; i++){
//     summe += array[i];
//     return res
// }}


//Funktionen ohne ARRAY, aber mit PARAMETER
// 9) die Funktion bekommt zwei Parameter übergeben. Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt
function getRandom(a, b) {
    return Math.floor(Math.random() * b) + a
}
//9B)otra forma: con "lodash": el paquete "lodash" lo usamos en main.js, no en functions.js!! 

//9C)otra forma: 
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// 10)Erstelle eine Funktion, der ein String übergeben wird. Sie soll den ersten Buchstaben in einen Großbuchstaben umwandelt
// function getFirstLetterUp(array){
//     return array.toUpperCase()
// }
// const myUpperArray = array.map(menuItem => menuItem.toUpperCase())

//Ejercicio 2_1: eine Funktion die, mit filter, ein Array mit Objektenfiltert: Sie soll die Städte zurückgeben, die mehr als 100000 Einwohner haben. und eine weitere Funktion, die die Städte zurückgibt, die weniger als 100000 Einwohner haben
//filter erstellt ein neues array!!

//diese ist die längere Version:
// const greaterThan = (array) => {
//     const result = array.filter(ele => {
//         console.log(ele.population > 100000);
//         if (ele.population > 100000) {
//             return ele
//     }    
// })
// return result
// }

const greaterThan = (array) => {
    const result = array.filter(ele => 
        ele.population > 100000) 
            return result
}

const smallerThan = (array) => {
    const result = array.filter(ele => 
        ele.population < 100000) 
            return result
    }


module.exports = {
    getFirstElement,
    getAllButLast,
    getLastElement,
    deleteFirst,
    getPosition,
    removeItem,
    deleteDouble,
    getRandom,
    randomIntFromInterval,
    greaterThan,
    smallerThan
}    


