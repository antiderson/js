document.addEventListener("DOMContentLoaded", function (e) {
   document.getElementById("calcular").addEventListener("click", calcular)
   function calcular() {
      var macas = document.getElementById("macas").value
      if (macas < 12) {
         var quant = parseFloat(macas * 1.30)
         document.getElementById("valor").value = `O custo total será de R$: ${quant.toFixed(2)}`
      } else {
         document.getElementById("valor").value = `O custo total será de R$: ${macas * 1}`
      }
   }
});


