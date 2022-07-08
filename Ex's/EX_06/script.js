document.addEventListener("DOMContentLoaded", function(e) {
   document.getElementById("calcular").addEventListener("click", calcular)
   function calcular() {
    var valor = document.getElementById("valor").value
      if (valor > -1) {
         document.getElementById("num").value = `Positivo`
      } else{
         document.getElementById("num").value= `Negativo` 
      }
      
   }
});