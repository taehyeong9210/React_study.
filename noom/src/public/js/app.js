const messageList = document.querySelector('ul');
const messageForm = document.querySelector('form');

const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener('open', () => {
  console.log('Conneted to Browser');
});

socket.addEventListener('message', (message) => {
  console.log('Just got this :', message.data, 'from the server');
});

socket.addEventListener('close', () => {
  console.log('Disconnected from server');
});

function handleSubmit(e) {
  e.preventDefault();
  const input = messageForm.querySelector('input');
  socket.send(input.value);
  input.value = '';
}

messageForm.addEventListener('submit', handleSubmit);
