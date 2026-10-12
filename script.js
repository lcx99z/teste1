/* =====================================================
   SCRIPT DO FÃ CLUBE
   Tudo que você vai querer editar fica nas 2 seções
   de cima: CONFIGURAÇÕES e FOTOS.
   ===================================================== */

/* ---------- 1) CONFIGURAÇÕES (edite aqui) ---------- */
const CONFIG = {
  // Nome dela (aparece no título e no rodapé)
  nome: "Geovana",

  // Frase embaixo do nome
  frase: "O fã clube para o amor da minha vida (Amém!!!), com um único membro (EU ESPERO NÉ).",

  // Data para contar os "dias de admiração" (formato AAAA-MM-DD)
  dataInicio: "2026-09-09",

  // Carta final
  carta: {
    titulo: "Uma carta para você",
    paragrafos: [
      "Criei esse site pra lembrar você de como é especial.",
      "Seu sorriso, seu jeito e sua companhia deixam meus dias muito melhores.",
      "Obrigado por ser exatamente quem você é."
    ],
    assinatura: "Com amor, seu Homem."
  }
};

/* ---------- 2) FOTOS E ELOGIOS (edite aqui) ----------
   Para ADICIONAR uma foto: copie um bloco { ... }, cole
   no final da lista e troque as informações.
   - src:      caminho da foto (pasta "fotos")
   - alt:      descrição da foto (acessibilidade)
   - legenda:  título que aparece embaixo da foto
   - elogios:  lista de elogios. A cada clique mostra o próximo.
*/
const FOTOS = [
  {
    src: "fotos/foto1.jpg", alt: "Foto na praia", legenda: "Dia de sol e praia",
    elogios: [
      "Seu olhar tem um brilho que nem o sol consegue copiar. ☀️",
      "Você deixa qualquer dia de praia mais bonito só de estar nele. 💗"
    ]
  },
  {
    src: "fotos/foto2.jpg", alt: "Foto ao ar livre com cabelo ao vento", legenda: "Cabelo ao vento",
    elogios: [
      "Seu estilo é único: você transforma qualquer cenário em capa de revista.",
      "Esse batom vermelho com esse olhar? Elegância pura. 🎀"
    ]
  },
  {
    src: "fotos/foto3.jpg", alt: "Selfie no espelho", legenda: "Selfie no espelho",
    elogios: [
      "Até num espelho simples você faz o momento ficar especial. ✨",
      "Seu charme está nos detalhes: o jeito, o sorriso, a vibe. 💖"
    ]
  },
  {
    src: "fotos/foto4.jpg", alt: "Selfie de perto", legenda: "Close fofo",
    elogios: [
      "Você tem o rostinho mais expressivo e carismático que eu conheço.",
      "Sua beleza é natural e encanta de qualquer ângulo. 🌸"
    ]
  },
  {
    src: "fotos/foto5.jpg", alt: "Foto ao entardecer, com o mar ao fundo", legenda: "Entardecer",
    elogios: [
      "Nem o céu mais lindo do mundo rouba a cena quando você está por perto. 🌅",
      "Você tem uma presença que ilumina qualquer lugar. 💫"
    ]
  },
  {
    src: "fotos/foto6.jpg", alt: "Selfie no espelho com look casual", legenda: "Look do dia",
    elogios: [
      "Você mistura simplicidade e personalidade como ninguém.",
      "Confiança é o seu melhor acessório, e você tem de sobra. 💅"
    ]
  },
  {
    src: "fotos/foto7.jpg", alt: "Selfie com trancinhas no cabelo", legenda: "Detalhe das trancinhas",
    elogios: [
      "Até nos detalhes pequenos você mostra criatividade. 🎀",
      "Seu jeitinho fofo e cheio de personalidade conquista qualquer um. 💕"
    ]
  },
  {
    src: "fotos/foto8.jpg", alt: "Selfie sorrindo com franja", legenda: "Sorriso e franja",
    elogios: [
      "Seu sorriso é o meu lugar favorito do mundo. 😊",
      "Você é doce, meiga e encantadora de um jeito só seu. 🍓"
    ]
  },
  {
    src: "fotos/foto9.jpg", alt: "Selfie em casa", legenda: "Momento em casa",
    elogios: [
      "Mesmo nos dias mais simples, você é cheia de charme. 🏡",
      "Seu jeito de ser deixa tudo mais leve e aconchegante. ☁️"
    ]
  },
  {
    src: "fotos/foto10.jpg", alt: "Foto com luz dourada", legenda: "Luz dourada",
    elogios: [
      "A luz dourada fica linda em você, mas a verdade é que você brilha sozinha. 🌟",
      "Tem uma delicadeza nesse olhar que desarma qualquer um. 🌷"
    ]
  }
];

/* =====================================================
   A PARTIR DAQUI É O FUNCIONAMENTO DO SITE.
   Só mexa se quiser mudar o comportamento.
   ===================================================== */

/* ---------- Preenche textos da página ---------- */
document.title = `Fã Clube ${CONFIG.nome} 💖`;
document.getElementById("nome").textContent = CONFIG.nome;
document.getElementById("nomeRodape").textContent = CONFIG.nome;
document.getElementById("frase").textContent = CONFIG.frase;
document.getElementById("ano").textContent = new Date().getFullYear();

/* Carta */
document.getElementById("cartaTitulo").textContent = CONFIG.carta.titulo;
document.getElementById("cartaAssinatura").textContent = CONFIG.carta.assinatura;
const cartaTexto = document.getElementById("cartaTexto");
CONFIG.carta.paragrafos.forEach(texto => {
  const p = document.createElement("p");
  p.textContent = texto;
  cartaTexto.appendChild(p);
});

/* ---------- Contador de dias (com animação) ---------- */
const diasTotal = Math.max(
  0,
  Math.floor((Date.now() - new Date(CONFIG.dataInicio + "T00:00:00")) / 86400000)
);
animarNumero(document.getElementById("contadorDias"), diasTotal);

function animarNumero(elemento, final) {
  const duracao = 1400;
  const inicio = performance.now();
  function passo(agora) {
    const progresso = Math.min((agora - inicio) / duracao, 1);
    elemento.textContent = Math.round(final * progresso);
    if (progresso < 1) requestAnimationFrame(passo);
  }
  requestAnimationFrame(passo);
}

/* ---------- Galeria ---------- */
const grade = document.getElementById("grade");
const contadorElogios = document.getElementById("contadorElogios");
const elogiosDescobertos = new Set(); // guarda quais elogios já foram vistos

FOTOS.forEach((foto, i) => {
  const cartao = document.createElement("article");
  cartao.className = "cartao";
  cartao.style.transitionDelay = `${(i % 3) * 80}ms`; // entrada escalonada

  cartao.innerHTML = `
    <div class="moldura" role="button" tabindex="0" aria-label="Ampliar foto: ${foto.legenda}">
      <img src="${foto.src}" alt="${foto.alt}" loading="lazy">
    </div>
    <div class="cartao__corpo">
      <h3 class="cartao__titulo">${foto.legenda}</h3>
      <button class="btn-elogio" type="button">💖 Clique para um elogio</button>
      <div class="elogio" aria-live="polite"><p></p></div>
    </div>
  `;

  const moldura = cartao.querySelector(".moldura");
  const img = cartao.querySelector("img");
  const botao = cartao.querySelector(".btn-elogio");
  const caixa = cartao.querySelector(".elogio");
  const texto = caixa.querySelector("p");

  // Se a foto não carregar, mostra o aviso rosa
  img.addEventListener("error", () => {
    moldura.classList.add("sem-foto");
    img.style.display = "none";
  });

  // Ampliar a foto
  moldura.addEventListener("click", () => abrirLightbox(foto.src, foto.alt));
  moldura.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrirLightbox(foto.src, foto.alt); }
  });

  // Mostrar elogio (a cada clique vem o próximo da lista)
  let indice = -1;
  botao.addEventListener("click", () => {
    indice = (indice + 1) % foto.elogios.length;
    texto.textContent = foto.elogios[indice];

    // reinicia a animação do texto
    texto.style.animation = "none";
    void texto.offsetWidth;
    texto.style.animation = "";

    caixa.classList.add("aberto");
    botao.textContent = "💗 Mais um elogio";

    // atualiza o contador
    elogiosDescobertos.add(`${i}-${indice}`);
    contadorElogios.textContent = elogiosDescobertos.size;

    soltarCoracoes(botao);
  });

  grade.appendChild(cartao);
});

/* ---------- Corações ao clicar ---------- */
function soltarCoracoes(elemento) {
  const caixa = elemento.getBoundingClientRect();
  const x = caixa.left + caixa.width / 2;
  const y = caixa.top + caixa.height / 2;
  const emojis = ["💗", "💖", "🎀", "🤍"];

  for (let n = 0; n < 7; n++) {
    const c = document.createElement("span");
    c.className = "coracao-voando";
    c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    c.style.left = `${x + (Math.random() * 60 - 30)}px`;
    c.style.top = `${y}px`;
    c.style.setProperty("--dx", `${Math.random() * 80 - 40}px`);
    c.style.animationDelay = `${n * 40}ms`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 1200);
  }
}

/* ---------- Animação de entrada ao rolar a página ---------- */
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".cartao").forEach(c => observador.observe(c));

/* ---------- Ampliar foto (lightbox) ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function abrirLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add("aberto");
  lightbox.setAttribute("aria-hidden", "false");
}
function fecharLightbox() {
  lightbox.classList.remove("aberto");
  lightbox.setAttribute("aria-hidden", "true");
}
lightbox.addEventListener("click", fecharLightbox);
document.getElementById("lightboxFechar").addEventListener("click", fecharLightbox);
document.addEventListener("keydown", e => { if (e.key === "Escape") fecharLightbox(); });

/* ---------- Corações e laços flutuando no fundo ---------- */
const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduzirMovimento) {
  const fundo = document.getElementById("fundo");
  const itens = ["💗", "🎀", "🤍", "💖"];
  const QUANTIDADE = 14; // quantos itens flutuando (diminua se achar muito)

  for (let i = 0; i < QUANTIDADE; i++) {
    const s = document.createElement("span");
    s.textContent = itens[i % itens.length];
    s.style.left = `${Math.random() * 100}%`;
    s.style.fontSize = `${14 + Math.random() * 16}px`;
    s.style.animationDuration = `${14 + Math.random() * 16}s`;
    s.style.animationDelay = `${-Math.random() * 20}s`;
    fundo.appendChild(s);
  }
}