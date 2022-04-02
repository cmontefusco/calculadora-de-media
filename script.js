function calcularMedia(botao) {
  let notaProva1 = parseFloat(document.getElementById("notaProva1").value);
  let notaProva2 = parseFloat(document.getElementById("notaProva2").value);
  let notaProva3 = parseFloat(document.getElementById("notaProva3").value);
  let notaProva4 = parseFloat(document.getElementById("notaProva4").value);

  notaFinal = (notaProva1 + notaProva2 + notaProva3 + notaProva4) / 4;
  document.getElementById("mediaFinal").innerHTML =
    "Sua média final é " + notaFinal;
}
