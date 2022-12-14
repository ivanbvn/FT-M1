'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  
   RECORRIDO POR ORDEN
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
      -post order: izquierda, derecha, nodo
      -pre order: nodo, izquierda, derecha
      -in order: izquierda, nodo, derecha

   RECORRIDO POR NIVEL
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value
   this.left = null
   this.right = null
   // this.length = value ? 1 : 0
}

BinarySearchTree.prototype.insert = function (value) {
   if (value < this.value) {
      // Es menor
      if (this.left) {
         // Si hay alguien a la izquierda
         this.left.insert(value)
      } else {
         // Si no hay alguien a la izquierda
         this.left = new BinarySearchTree(value)
      }
   } else {
      // Es mayor
      if (this.right) {
         // Si hay alguien a la derecha
         this.right.insert(value)
      } else {
         // Si no hay alguien a la derecha
         this.right = new BinarySearchTree(value)
      }
   }
   // this.length++
}

BinarySearchTree.prototype.contains = function (value) {
   if (this.value === value) return true
   if (value < this.value) {
      // es menor
      if (this.left) return this.left.contains(value)
   } else {
      // es mayor
      if (this.right) return this.right.contains(value)
   }
   return false
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   switch (order) {
      case 'post-order':
         this.left?.depthFirstForEach(cb, order)
         this.right?.depthFirstForEach(cb, order)
         cb(this.value)
         break;

      case 'pre-order':
         cb(this.value)
         this.left?.depthFirstForEach(cb, order)
         this.right?.depthFirstForEach(cb, order)
         break

      default:
         this.left?.depthFirstForEach(cb, order)
         cb(this.value)
         this.right?.depthFirstForEach(cb, order)
         break;
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
   cb(this.value)
   if (this.left) array.push(this.left)
   if (this.right) array.push(this.right)
   if (array.length) array.shift().breadthFirstForEach(cb, array)
}

BinarySearchTree.prototype.size = function () {
   // return this.length
   if (!this.left && !this.right) return 1

   // Si existe solo un hijo
   if (!this.left) return 1 + this.right.size()
   if (!this.right) return 1 + this.left.size()

   // Si ambos hijos existen
   if (this.left && this.right) return 1 + this.left.size() + this.right.size()
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
