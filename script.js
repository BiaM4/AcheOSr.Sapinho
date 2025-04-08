let rodada = 1;
let jogoAtivo = true;
let tempoRestante = 60;
let timer;

function iniciarRodada() {
  clearInterval(timer);
  if (rodada > 3) {
    document.getElementById("tempo").innerText = ``;
    document.getElementById("comemoracao").innerText = "🎉 Você venceu!";
    document.getElementById("rodada").innerText = ``
    document.getElementById("resp").innerText = "Parabéns! Você conseguiu achar o Sr.Sapinho nas três rodadas!!";
    document.getElementById("incentivo").innerText = `Quer jogar novamente?`;
    document.getElementById("inicio").style.display = "block";
    document.getElementById("inicio").innerText = `🔄Recomeçar`
    rodada =1;
    jogoAtivo = false;
    return;
  }
  document.getElementById("comemoracao").innerText = "Bem-vindo(a)";
  document.getElementById("tempo").innerText = `⏳ Tempo restante: 60s`;
  tempoRestante = 60;
  jogoAtivo = true;
  document.getElementById("rodada").innerText = `💫Rodada: ${rodada}`
  document.getElementById("resp").innerText = `ebaaa, vamos lá`;
  document.getElementById("incentivo").innerText = `Escolha um dos baldes!`;
  document.getElementById("inicio").innerText = `Começar`
  document.getElementById("inicio").style.display = "none";
  resetarBaldes()

  timer = setInterval(() => {
    tempoRestante--;
    document.getElementById("tempo").innerText = `⏳ Tempo restante: ${tempoRestante}s`;

    if (tempoRestante <= 0) {
      clearInterval(timer);
      jogoAtivo = false;
      document.getElementById("resp").innerText = "Tempo esgotado ⏰ ";
      document.getElementById("comemoracao").innerText = "😵 Fim de jogo!";
      document.getElementById("incentivo").innerText = `Recomece o jogo!`;
      document.getElementById("inicio").style.display = "block";
      document.getElementById("inicio").innerText = `🔄Recomeçar`
    }
  }, 1000);
}

function jogar(botao) {
  if (!jogoAtivo) return;

  clearInterval(timer);

  const jogadaCli = Number(botao.value);
  const jogadaComp = Math.floor(Math.random() * 3) + 1;

  if (jogadaCli === jogadaComp) {
    document.getElementById("comemoracao").innerText = "🎉 Parabens";
    document.getElementById("resp").innerText = `Você achou o sapinho 🐸 `;
    document.getElementById("incentivo").innerText = `Partiu próxima rodada?`;
    document.getElementById("inicio").style.display = "block";
    document.getElementById("inicio").innerText = `Próxima`
    substituirBaldePorSapinho(jogadaCli);
    rodada++;
  } else {
    document.getElementById("resp").innerText = `❌ Você errou! O sapinho estava no ${jogadaComp}º balde`;
    document.getElementById("comemoracao").innerText = "😵 Fim de jogo!";
    document.getElementById("incentivo").innerText = `Recomece o jogo!`;
    document.getElementById("inicio").style.display = "block";
    document.getElementById("inicio").innerText = `🔄Recomeçar`
    substituirBaldePorX(jogadaCli)
    jogoAtivo = false;
    rodada = 1
  }
}

function substituirBaldePorSapinho(id) {
  const botao = document.getElementById(`balde${id}`);
  const img = botao.querySelector("img");
  img.src = "https://i.postimg.cc/h4bgsJHB/sapo-Barriga-1-unscreen.gif";
}

function substituirBaldePorX(id) {
  const botao = document.getElementById(`balde${id}`);
  const img = botao.querySelector("img");
  img.src = "https://i.postimg.cc/xTqWNtVc/sapo-X-unscreen.gif";
}

function resetarBaldes() {
  for (let i = 1; i <= 3; i++) {
    const botao = document.getElementById(`balde${i}`);
    const img = botao.querySelector("img");
    img.src = "https://i.postimg.cc/HswjJPWM/balde-Metal-2.png";
  }
}

