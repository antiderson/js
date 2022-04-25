const inputs = document.querySelectorAll('input[type="number"]')

document.getElementById("calcular").addEventListener("click", () => {
   let count = 0
   inputs.forEach((item) => {
      if (item.value < 0) count++
   })
   alert(`Existem ${count} numeros negativos`)
})