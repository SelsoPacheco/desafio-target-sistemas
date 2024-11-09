function pertenceFibonacci(num) {
    let a = 0;
    let b = 1;
    
    if (num === 0 || num === 1) return true;
  
    while (b < num) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    
    return b === num;
  }
  
  const numero = 21; // Altere para o número que deseja verificar
  if (pertenceFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
  }
  