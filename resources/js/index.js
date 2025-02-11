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
function fetchMessages() {
  return [
    {
      id: 1,
      text: "This is my message",
      sender: "Don Madden",
      timestamp: 1537410673072
    },
    {
      id: 2,
      text: "This is another message",
      sender: "Dontavious",
      timestamp: 1537410673072
    },
    {
      id: 3,
      text: "This is a message from someone else",
      sender: "Donny Dimes",
      timestamp: 1537410673072
    }
  ];
}

const serverURL = `https://it3049c-chat.fly.dev/messages`;

function fetchMessages() {
  return fetch(serverURL)
    .then(response => response.json());
}

updateMessages();

sendButton.addEventListener("click", function(event) {
  event.preventDefault();
  const sender = nameInput.value;
  const message = myMessage.value;
  sendMessages(sender, message);
  myMessage.value = "";
});