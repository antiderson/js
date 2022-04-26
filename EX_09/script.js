document.addEventListener("DOMContentLoaded", function (e) {
   document.getElementById("calcular").addEventListener("click", calcular)
   function calcular() {
      var time1 = document.getElementById("time1").value
      var gol1 = document.getElementById("gol1").value
      var time2 = document.getElementById("time2").value
      var gol2 = document.getElementById("gol2").value
      if (gol1 > gol2) {
         document.getElementById("vencedor").value = `O time vencedor é o ${time1}`
      } else if (gol2 > gol1) {
         document.getElementById("vencedor").value = `O time vencedor é o ${time2}`
      } else if (gol1 == gol2) {
         document.getElementById("vencedor").value = `Empate!`
      }
   }
});