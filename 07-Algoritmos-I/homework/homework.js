'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factoreo = [1]
  let numero = num
  for (let i = 2; i < num; i++) {
    if (i % 2 === 0 && i !== 2) continue
    while (numero % i === 0) {
      factoreo.push(i)
      numero = numero / i
    }
  }
  return factoreo
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  const duplArray = array.slice()
  for (let i = 0; i < duplArray.length; i++) {
    for (let j = 0; j < duplArray.length; j++) {
      if (duplArray[j] > duplArray[j + 1]) {
        [duplArray[j], duplArray[j + 1]] = [duplArray[j + 1], duplArray[j]]
      }
    }
  }
  return (duplArray)
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let duplArray = array.slice()
  for (let i = 1; i < duplArray.length; i++) {
    for (let j = i; j > 0; j--) {
      if (duplArray[j] < duplArray[j - 1]) {
        [duplArray[j - 1], duplArray[j]] = [duplArray[j], duplArray[j - 1]]
      }
    }
  }
  return duplArray
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let duplArray = array.slice()
  for (let i = 0; i < duplArray.length; i++) {
    let minIndex = i
    for (let j = i; j < duplArray.length; j++) {
      if (duplArray[j] < duplArray[minIndex]) minIndex = j
    }
    [duplArray[minIndex], duplArray[i]] = [duplArray[i], duplArray[minIndex]]
  }
  return duplArray
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
