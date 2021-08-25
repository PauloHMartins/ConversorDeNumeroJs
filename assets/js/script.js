//captando dados do DOM
let decNumber = document.querySelector('.decimal').value;
let base = '';

//função 

function baseConverter(decNumber, base) {
  let restStack = [],
  rest,
  baseString = '',
  digits = '0123456789ABCDEF';


  while(decNumber > 0) {
    rest = Math.floor(decNumber % base);
    restStack.push(rest)
    decNumber = Math.floor(decNumber / base)
  }

  while (restStack.length > 0 ) {
    baseString += digits[restStack.pop()];

  }

  return baseString;
 
}
 
//Impressão dos dados na tela
function imprimir(valor, base) {
let binario = baseConverter(decNumber, 2);
let hexadecimal = baseConverter(decNumber, 16);
let octal = baseConverter(decNumber, 8);
document.querySelector('.binary').value = binario.toString();
document.querySelector('.hex').value = hexadecimal.toString();
document.querySelector('.octa').value = octal.toString();
};

//botao limpar
let btn = document.querySelector('.limpar');
btn.addEventListener("click", () => {
 location.reload();
 
})


 


 