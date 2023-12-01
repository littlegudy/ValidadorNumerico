const form = document.querySelector(".flex-form");
const campoA = document.getElementById("campo-a");
const campoB = document.getElementById("campo-b");
const labelSuccess = document.querySelector(".valido");

function nomeFuncao(e) {
  e.preventDefault();

  const valorA = parseFloat(campoA.value);
  const valorB = parseFloat(campoB.value);

  if (!isNaN(valorA) && !isNaN(valorB)) {
    if (valorB > valorA) {
      labelSuccess.innerHTML = "Válido! B é maior que A.";
    } else {
      labelSuccess.innerHTML = "Inválido! A é maior que B.";
    }
  } else {
    labelSuccess.innerHTML = "Por favor, insira valores numéricos válidos.";
  }
}

form.addEventListener("submit", nomeFuncao);
