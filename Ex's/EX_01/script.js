document.addEventListener("DOMContentLoaded", function(e) {
   document.getElementById("calcular").addEventListener("click", calcular)
   function calcular() {
    var salario = document.getElementById("salario").value
    var reajuste = document.getElementById("reajuste").value  
    var resultado = ((parseFloat(salario * reajuste)) / 100 ) + parseFloat(salario)
    
    document.getElementById("resultado").value = `Novo Salario é R$: ${resultado}`  
   }
});