document.addEventListener("DOMContentLoaded", function (e) {
   document.getElementById("calcular").addEventListener("click", calcular)
   function calcular() {
      var data = new Date();
      var ano = data.getFullYear();
      var nome = document.getElementById("nm").value
      var nascimento = document.getElementById("dtnascimento")
      var ingresso = document.getElementById("dtempresa")
      var idade = ano - Number(nascimento.value)
      var tempoEmpresa = ano - Number(ingresso.value)
      if(tempoEmpresa > idade){
         alert("ERRO, verifique os anos!")
      }
      if (idade > 65 || tempoEmpresa > 30) {
         document.getElementById("resultado").value = `Requer aposentadoria`
      } else if (idade > 60 && tempoEmpresa > 25) {
         document.getElementById("resultado").value = `Requer aposentadoria`
      } else {
         document.getElementById("resultado").value = `Não requer aposentadoria`
      }
   }
});