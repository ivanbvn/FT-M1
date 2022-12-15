'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array
  let pivot = Math.floor(Math.random() * array.length)
  let max = []
  let min = []
  let equals = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[pivot]) {
      max.push(array[i])
    } else if (array[i] < array[pivot]) {
      min.push(array[i])
    } else {
      equals.push(array[i])
    }
  }
  return quickSort(min).concat(equals).concat(quickSort(max))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array
  let mitad = Math.floor(array.length / 2)
  let left = array.slice(0, mitad)
  let right = array.slice(mitad)
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(leftArray, rightArray) {
  let leftIndex = 0
  let rightIndex = 0
  let array = []

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      array.push(leftArray[leftIndex])
      leftIndex++
    } else {
      array.push(rightArray[rightIndex])
      rightIndex++
    }
  }

  return array.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
