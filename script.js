const chatbot = document.getElementById('chatbot');
const toggle = document.getElementById('chatbot-toggle');
const input = document.getElementById('chat-input');
const messages = document.querySelector('.messages');

toggle.addEventListener('click', (e) => {
  e.preventDefault();
  chatbot.classList.toggle('hidden');
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value.trim() !== "") {
    const userMsg = document.createElement('p');
    userMsg.innerHTML = `<strong>Toi:</strong> ${input.value}`;
    messages.appendChild(userMsg);

    // Réponse simple du bot
    const botMsg = document.createElement('p');
    botMsg.innerHTML = `<strong>Bot:</strong> Je te conseille la RTX 4070 pour un excellent rapport perf/prix 🔥`;
    messages.appendChild(botMsg);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  }
});
