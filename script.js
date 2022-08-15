var carta1 = {
  nome: " Bulbasauro ",
  imagem:
    "http://pm1.narvii.com/6209/56d57c37f505dc164cc429865dce90926020a1a3_00.jpg",
  atributos: {
    ataque: parseInt(Math.random() * 9 + 1),
    defesa: parseInt(Math.random() * 9 + 1),
    magia: parseInt(Math.random() * 9 + 1)
  }
};
var carta2 = {
  nome: " Cavaleiro de Pegasus ",
  imagem:
    "https://s.aficionados.com.br/imagens/cavaleiros-do-zodiaco-seiya-de-pegaso_f.jpg",
  atributos: {
    ataque: parseInt(Math.random() * 9 + 1),
    defesa: parseInt(Math.random() * 9 + 1),
    magia: parseInt(Math.random() * 9 + 1)
  }
};
var carta3 = {
  nome: " Shiryu de dragão ",
  imagem:
    "https://img.elo7.com.br/product/zoom/2B30956/poster-quadro-shiryu-de-dragao-30x42cm-nerd.jpg",
  atributos: {
    ataque: parseInt(Math.random() * 9 + 1),
    defesa: parseInt(Math.random() * 9 + 1),
    magia: parseInt(Math.random() * 9 + 1)
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibeCartaJogador();
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`;
  var opcoesTexto = " ";

  for (var atributo in cartaJogador.atributos) {
    console.log(atributo);
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  var html = "<div id = 'opcoes' class='carta-status'>";

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado");
  var atributoSelecionado = obtemAtributoSelecionado();
  if (atributoSelecionado != undefined) {
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = '<p class = "resultado-final">Você ganhou :) </P>';
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = '<p class = "resultado-final">Você Perdeu :( </P>';
    } else {
      htmlResultado = '<p class = "resultado-final">Empatou :| </P>';
    }
    divResultado.innerHTML = htmlResultado;
    exibeCartaMaquina();
  } else alert("Selecione o atributo");
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`;
  var opcoesTexto = " ";

  for (var atributo in cartaMaquina.atributos) {
    console.log(atributo);
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "<br>";
  }
  var html = "<div id = 'opcoes' class='carta-status'>";
  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}