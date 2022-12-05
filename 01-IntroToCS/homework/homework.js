'use strict';

function BinarioADecimal(num) {
   let decimalNumber = 0
   for (let i = 0; i < num.length; i++) {
      decimalNumber = decimalNumber + Number(num[num.length - (i + 1)]) * Math.pow(2, i)
   }
   return decimalNumber
}

function DecimalABinario(num) {
   let result = num
   let binaryNumbers = []
   while (result != 0) {
      binaryNumbers.push(result % 2)
      result = Math.floor(result / 2)
      console.log(result)
   }
   return binaryNumbers.reverse().join('')
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
