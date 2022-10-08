const socket = io('ws://localhost:8080');
const dev = document.getElementById('dev');
const messages = document.getElementById('messages');
const input = document.getElementById('input');

const name = prompt('Please enter your name:');
exports.username = name;
socket.on('message', (msg) =>{
    let item = document.createElement('li');
    item.innerText = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});


document.querySelector('button').onclick = () =>{
    const content = input.value;
    socket.emit('message', content);
};
