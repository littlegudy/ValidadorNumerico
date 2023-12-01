const form = document.querySelector(".flex-form");
const campoA = document.getElementById("campo-a");
const campoB = document.getElementById("campo-b");
const labelSuccess = document.querySelector(".valido");

function nomeFuncao(e) {
  e.preventDefault();

  if (campoB.value > campoA.value) {
    labelSuccess.innerHTML = "Válido! B é maior que A.";
  } else {
    labelSuccess.innerHTML = "Inváido! A é maior que B";
  }
}

form.addEventListener("submit", nomeFuncao);
