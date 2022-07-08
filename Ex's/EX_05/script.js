document.addEventListener("DOMContentLoaded", function(e) {
   document.getElementById("calcular").addEventListener("click", calcular)
   function calcular() {
    var valor = document.getElementById("valor").value
      if (valor > 100) {
         document.getElementById("num").value = `É MAIOR QUE 100!`
      } else{
         document.getElementById("num").value= `NÃO É MAIOR QUE 100!` 
      }
      
   }
});