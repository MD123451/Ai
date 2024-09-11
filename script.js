document.getElementById("sendButton").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value;
    displayMessage("You: " + userInput);
    generateResponse(userInput);
    document.getElementById("userInput").value = ''; // Clear input
});

function displayMessage(message) {
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.innerHTML += message + "<br>";
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

function generateResponse(input) {
    let response;

    if (input.toLowerCase().includes("hi")) {
        response = "Hello! How can I assist you today?";
    } else if (input.toLowerCase().includes("how are you")) {
        response = "I'm just a program, but thanks for asking!";
    } else {
        response = "Sorry, I don't understand.";
    }

    displayMessage("AI: " + response);
}
