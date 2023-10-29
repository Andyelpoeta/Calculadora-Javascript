 function agregarAlaPantalla(value) {
    document.querySelector('#pantalla').value +=value
 }

 function calcularResultado(){
    const valorPantalla=document.querySelector('#pantalla').value;
    const resultado = eval(valorPantalla);
    
    if (valorPantalla==='') {
        alert('Debes ingresar por lo menos 2 numeros')
    } else {
      document.querySelector('#pantalla').value=resultado
    }
    
 }
function limpiarResultado(){
    document.querySelector('#pantalla').value="";
 }
