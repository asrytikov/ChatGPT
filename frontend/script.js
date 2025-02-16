
const chat = document.getElementById('chat');
const input = document.getElementById('message');
const button = document.getElementById('send');
const websocket = new WebSocket('ws://192.168.88.33:81/ws');


button.addEventListener('click', () => {
    if (!input.value == '') {
        addMessage('You: ' + input.value);
        websocket.send(input.value);
    }

});

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        addMessage('You: ' + input.value);
        websocket.send(input.value);
        return false;
    }
});


websocket.onopen = function(event) {
    console.log('Соединение установлено!');
};

websocket.onmessage = function(enet) {
    addMessage('ChatGPT: ' + event.data);
};

function addMessage(text){
    let p = document.createElement('p');
    p.textContent = text;
    chat.appendChild(p);
};



