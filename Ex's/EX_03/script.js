document.addEventListener("DOMContentLoaded", function(e) {
   document.getElementById("calcular").addEventListener("click", calcular)
   function calcular() {
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value  
    var n3 = document.getElementById("n3").value  
    var somas = (parseFloat((n1 * 2) + (n2 * 3) + (n3 * 5)))
    var media = (parseFloat( somas / 10))
    
     document.getElementById("media").value = `A média final é ${media}`  
   }
});