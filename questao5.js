function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
    }
    return invertida;
  }
  
  const palavra = "exemplo";
  console.log(inverterString(palavra)); // Saída esperada: "olpmexe"
  