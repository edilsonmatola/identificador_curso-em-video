function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAnoInserido = document.getElementById("txtano");
  var resultado = document.querySelector("div#result");

  if (fAnoInserido.value.length == 0 || Number(fAnoInserido.value) > ano) {
    alert(`[ERRO] Verifique os dados e tente novamente!`);
  } else {
    var fSexo = document.getElementsByName("radsex");
    var idade = ano - Number(fAnoInserido.value);

    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fSexo[0].checked) {
      genero = "Homem";

      if (idade >= 0 && idade <= 12) {
        // Crianca
        img.setAttribute("src", "./images/foto-bebe-m.png");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "./images/foto-jovem-m.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "./images/foto-adulto-m.png");
      } else {
        // Idoso
        img.setAttribute("src", "./images/foto-idoso-m.png");
      }
    } else if (fSexo[1].checked) {
      genero = "Mulher";

      if (idade >= 0 && idade <= 12) {
        // Crianca
        img.setAttribute("src", "./images/foto-bebe-f.png");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "./images/foto-jovem-f.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "./images/foto-adulto-f.png");
      } else {
        // Idoso
        img.setAttribute("src", "./images/foto-idoso-f.png");
      }
    }
    resultado.innerHTML = `Detectamos o genero ${genero} com ${idade} anos.`;
    resultado.appendChild(img)
  }
}
