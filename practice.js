function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

function reverseString(word) {
  return word.split('').reverse().join('');
}

const calculator = {
  add(a,b) {
    return a + b
  },
  subtract(a,b) {
    return a - b
  },
  divide(a, b) {
    return a / b
  },
  multiply(a, b) {
    return a * b
  },
};

function caesarCipher(string, factor) {
    const cipherCode = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return string.split('').map(char=>{
        if(char.match(/[a-z]/)){
            
            if(cipherCode.indexOf(char.toLowerCase()) + factor > cipherCode.length - 1){  
                return cipherCode[cipherCode.indexOf(char.toLowerCase()) + factor - cipherCode.length]
            }
            
            return cipherCode[cipherCode.indexOf(char.toLowerCase()) + factor]
        } else if(char.match(/[A-Z]/)){
            
            if(cipherCode.indexOf(char.toLowerCase()) + factor > cipherCode.length - 1){  
                return cipherCode[cipherCode.indexOf(char.toLowerCase()) + factor - cipherCode.length].toUpperCase()
            }
            
            return cipherCode[cipherCode.indexOf(char.toLowerCase()) + factor].toUpperCase();
        } else {
            return char
        }
    }).join('')
}

function analyzeArray(arr) {
    return {
        average: arr.reduce((sum,x)=>sum+x,0)/arr.length,
        min: Math.min.apply(Math, arr),
        max: Math.max.apply(Math,arr),
        length: arr.length
    }
}

export {
  capitalize, reverseString, calculator, caesarCipher, analyzeArray,
};
