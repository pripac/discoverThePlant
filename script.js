
var listaPlantas = ["http://gfb.global.ssl.fastly.net/wp-content/uploads/2016/07/15-Worthy-Benefits-of-Waterleaf-Talinum-triangulare.jpg",
 "https://www.portalsyngenta.com.br/images_v2/glossario-de-alvos-picao-branco%20%285%29.jpg ",
 "https://cnas-re.uog.edu/wp-content/uploads/2015/10/Youngiawhpl.jpg" , 
 "https://static.wixstatic.com/media/dd0291_7d6f08ba10280ec2c0c22ed639fe9b2b.jpg/v1/fill/w_401,h_299,al_c,q_80,usm_0.66_1.00_0.01/dd0291_7d6f08ba10280ec2c0c22ed639fe9b2b.webp"]

function plantar() {
var plantaEscolhida = document.getElementById("planta").value

if (plantaEscolhida == "Beldroega"){document.write("<img src=" + listaPlantas[0] + "><p>" + plantaEscolhida + "</p>")}

else if (plantaEscolhida == "Picão Branco"){document.write("<img src=" + listaPlantas[1] + "><p>" + plantaEscolhida + "</p>")}

else if (plantaEscolhida == "Crepe do Japão"|| plantaEscolhida == "Crepe Japônica"){document.write("<img src=" + listaPlantas[2] + "><p>" + plantaEscolhida + "</p>")}

else if (plantaEscolhida == "Charuto do Rei" ){document.write("<img src=" + listaPlantas[3] + "><p>" + plantaEscolhida + "</p>")}

else {alert("Planta indisponível na base de dados.")
/*
     for (var i = 0; i < listaPlantas.length; i++)
  document.write("<img src=" + listaPlantas[i] + ">" )
  
  PARA APRIMORAR: EXIBIR FICHA COM ALGUMAS CARACTERÍSTICAS, TAIS COMO SE A ESPÉCIE É COMESTIVEL E UMA BREVE DESCRIÇÃO DE ALGUMAS PARTES DA PLANTA PARA FACILITAR A IDENTIFICAÇÃO.*/

}

}