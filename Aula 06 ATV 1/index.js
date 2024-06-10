function contarVogais (user){

  let arrayNome = user.split('');
  let quantidade = arrayNome.length
  var cont = 0
  var vogais = 0


  while (quantidade >= cont){
      var letra = arrayNome[cont]
        if (letra == 'a' || letra == 'e' 
        || letra == 'i' || letra == 'o' || letra == 'u'){
          vogais++
          cont++
        } else {
          cont++
        }
  
  }


  return vogais
}

console.log(contarVogais(prompt()))