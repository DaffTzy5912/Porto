const input = document.getElementById('commandInput');
const output = document.getElementById('output');

const commands = {
  help: "Available commands: about, projects, contact, clear",
  about: "I'm a developer who builds websites, apps, and tools with passion.",
  projects: "1. Portfolio Website\n2. Chat App\n3. Game JS\nVisit: github.com/YourUsername",
  contact: "Email: your@email.com\nWhatsApp: +62xxxxxx",
  clear: "clear"
};

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const cmd = input.value.trim().toLowerCase();
    handleCommand(cmd);
    input.value = '';
  }
});

function handleCommand(cmd) {
  const newLine = document.createElement('p');
  newLine.innerHTML = `> ${cmd}`;
  output.appendChild(newLine);

  if (commands[cmd]) {
    if (cmd === 'clear') {
      output.innerHTML = '';
    } else {
      const res = document.createElement('p');
      res.innerText = commands[cmd];
      output.appendChild(res);
    }
  } else {
    const res = document.createElement('p');
    res.innerText = `Command not found: ${cmd}`;
    output.appendChild(res);
  }

  window.scrollTo(0, document.body.scrollHeight);
}
