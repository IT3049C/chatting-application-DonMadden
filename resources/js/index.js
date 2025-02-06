const nameInput = document.getElementById("my-name-input");
const messageInput = document.getElementById("my-message");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat");

function formatmessage(message, myNameInput){
  const time = new Date(message.timestamp);
  const formattedTime = `${time.getHours()}:${time.getMinutes()}`;
}
if (myNameInput === message.sender) {
  return 
  <div class="mine messages">
    <div class="message">
      ${message.text}
    </div>
    <div class="sender-info">
      ${formattedTime}
    </div>
  </div>
  ;
}
else {
  return
  <div class="yours messages">
    <div class="message">
      ${message.text}
    </div>
    <div class="sender-info">
      ${message.sender} ${formattedTime}
    </div>
  </div>
  ;
}
