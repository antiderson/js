document.addEventListener("DOMContentLoaded", function(e) {
   document.getElementById("calcular").addEventListener("click", calcular)
   function calcular() {
    var custo = document.getElementById("custo").value
    var distribuidor = ((custo * 28) / 100)
    var imposto = ((custo * 45) /100 )
    var soma = ( imposto + distribuidor )
    var media = ( soma + parseFloat(custo))
    
     document.getElementById("media").value = `O custo é R$: ${media}`  
   }
});