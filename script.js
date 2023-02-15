const medidaEmMetros = parseFloat(prompt("Qual a medida em metros?"));

const converter = prompt(
  "Qual unidade de medida esse valor deve ser convertido?\n" +
    "1.milímetro (mm)\n " +
    "2.centímetro (cm)\n " +
    "3.decímetro (dm) \n" +
    "4.decâmetro (dam) \n " +
    "5.hectômetro (hm) \n" +
    "6.quilômetro (km)"
);

switch (converter) {
  case "1":
    alert("Resultado" + medidaEmMetros * 1000);
    break;
  case "2":
    alert("Resultado" + medidaEmMetros * 100);
    break;
  case "3":
    alert("Resultado" + medidaEmMetros * 10);
    break;
  case "4":
    alert("Resultado" + medidaEmMetros / 10);
    break;
  case "5":
    alert("Resultado" + medidaEmMetros / 100);
    break;
  case "6":
    alert("Resultado" + medidaEmMetros / 1000);
    break;
  default:
    alert("Opção inválida");
}
