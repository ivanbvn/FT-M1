'use strict';

function BinarioADecimal(num) {
   let decimalNumber = 0
   for (let i = 0; i < num.length; i++) {
      decimalNumber = decimalNumber + Number(num[num.length - (i + 1)]) * Math.pow(2, i)
   }
   return decimalNumber
}

function DecimalABinario(num) {
   let binaryNumbers = []
   while (num != 0) {
      binaryNumbers.push(num % 2)
      num = Math.floor(num / 2)
   }
   return binaryNumbers.reverse().join('')
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
