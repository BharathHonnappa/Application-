document.getElementById("send-button").addEventListener("click", sendMessage);

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    let chatBox = document.getElementById("chat-box");
    let userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);
    
    document.getElementById("user-input").value = "";

    setTimeout(() => {
        let botMessage = document.createElement("p");
        botMessage.className = "bot-message";
        botMessage.textContent = "Thank you for your message! I'll respond soon.";
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
