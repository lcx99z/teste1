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
    src: "fotos/foto8.jpg", alt: "Selfie sorrindo com franja", legenda: "Sorriso que eu amo",
    elogios: [
      "Seu sorriso é o meu lugar favorito do mundo. 😊",
      "Você é doce, meiga e encantadora de um jeito só seu. 🍓"
    ]
  },
  {
    src: "fotos/foto9.jpg", alt: "Selfie em casa", legenda: "Momento em casa",
    elogios: [
      "Mesmo nos dias mais simples, você é cheia de charme.",
      "Seu jeito de ser deixa tudo mais leve e aconchegante."
    ]
  },
  {
    src: "fotos/foto10.jpg", alt: "Foto com luz dourada", legenda: "Luz dourada",
    elogios: [
      
    ]
  }
];