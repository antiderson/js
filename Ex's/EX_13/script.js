document.addEventListener("DOMContentLoaded", function (e) {
   document.getElementById("calcular").addEventListener("click", calcular)
   function calcular() {
      document.getElementById("resultado").innerText = ""
      for (var i = 10; i >= 1; i--)
         document.getElementById("resultado").innerText += ` ${i}
          `
   }
});