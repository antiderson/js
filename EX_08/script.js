document.addEventListener("DOMContentLoaded", function(e) {
   document.getElementById("calcular").addEventListener("click", calcular)
   function calcular() {
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value  
      if( n1 > n2){
         document.getElementById("maior").value = `O maior numero é ${n1}`  
      }else {
         document.getElementById("maior").value = `O maior numero é ${n2}`  
      }
   }
});