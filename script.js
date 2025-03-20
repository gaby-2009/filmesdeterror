
// Efeitos assustadores para o site de terror

// Detecta movimentos do mouse para efeitos assustadores
document.addEventListener('mousemove', function(e) {
  // Chance aleatória de um sussurro ao mover o mouse
  if (Math.random() > 0.997) {
    playRandomWhisper();
  }
});

// Lista de sussurros
const whispers = [
  'https://www.soundjay.com/human/sounds/whisper-1.mp3',
  'https://www.soundjay.com/human/sounds/whisper-2.mp3'
];

// Reproduz um sussurro aleatório
function playRandomWhisper() {
  const audio = new Audio();
  audio.src = whispers[Math.floor(Math.random() * whispers.length)];
  audio.volume = 0.2;
  audio.play();
}

// Adiciona texto assustador que aparece e desaparece
function addSpookyText() {
  const spookyTexts = [
    "Ele está te observando...",
    "Não olhe para trás...",
    "Você ouviu isso?",
    "Não estamos sozinhos aqui...",
    "Cuidado...",
    "Saia enquanto pode..."
    "Não abra a porta...",
    
  ];
  
  setInterval(() => {
    if (Math.random() > 0.95) {
      const text = document.createElement('div');
      text.className = 'spooky-text';
      text.innerHTML = spookyTexts[Math.floor(Math.random() * spookyTexts.length)];
      text.style.position = 'fixed';
      text.style.color = '#ff0000';
      text.style.opacity = '0';
      text.style.fontSize = '20px';
      text.style.fontFamily = 'Creepster, cursive';
      text.style.textShadow = '0 0 10px #800000';
      text.style.zIndex = '9999';
      text.style.left = `${Math.random() * 70 + 10}%`;
      text.style.top = `${Math.random() * 70 + 10}%`;
      text.style.transition = 'opacity 2s';
      
      document.body.appendChild(text);
      
      setTimeout(() => {
        text.style.opacity = '1';
      }, 100);
      
      setTimeout(() => {
        text.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(text);
        }, 2000);
      }, 3000);
    }
  }, 5000);
}

// Inicializa os efeitos assustadores quando a página carrega
window.addEventListener('DOMContentLoaded', () => {
  addSpookyText();
  
  // Adiciona tremor na página ocasionalmente
  setInterval(() => {
    if (Math.random() > 0.95) {
      document.body.classList.add('shake');
      setTimeout(() => {
        document.body.classList.remove('shake');
      }, 300);
    }
  }, 10000);
  
  // Adiciona estilo para o efeito de tremor
  const style = document.createElement('style');
  style.innerHTML = `
    .shake {
      animation: shake 0.3s;
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    .spooky-text {
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);
});




