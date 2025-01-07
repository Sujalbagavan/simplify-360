document.addEventListener('DOMContentLoaded', () => {
  const chatBox = document.getElementById('chat-box');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  // Function to append a message to the chat
  const appendMessage = (message, sender) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  };

  // Send user message and get bot response
  const sendMessage = async () => {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    appendMessage(userMessage, 'user');
    userInput.value = '';

    // Call API to get response
    try {
      const botResponse = await getBotResponse(userMessage);
      appendMessage(botResponse, 'bot');
    } catch (error) {
      appendMessage("An error occurred while communicating with the server.", 'bot');
    }
  };

  // Function to get response from Gemini API (Google's generative language model)
  const getBotResponse = async (message) => {
    const apiKey = 'AIzaSyAyBe5GIHq64thg4jaEXiT9DYb_TRrz_qM'; // Replace with your actual API key
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + apiKey;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: message
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (data.candidates && data.candidates.length > 0) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('No response from API');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  // Event listener for send button
  sendBtn.addEventListener('click', sendMessage);

  // Event listener for Enter key
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
});
