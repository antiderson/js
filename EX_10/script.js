document.addEventListener("DOMContentLoaded", function(e) {
   document.getElementById("calcular").addEventListener("click", calcular)
   function calcular() {
    var base = document.getElementById("base").value
    var altura = document.getElementById("altura").value  
    var area = (parseFloat(base * altura)) 
    
    document.getElementById("area").value = `A area é ${area}`  
   }
});