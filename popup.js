document.addEventListener('DOMContentLoaded', function () {
  const settingsIcon = document.getElementById('settings-icon');
  const apiKeySection = document.getElementById('api-key-section');
  const apiKeyInput = document.getElementById('api-key-input');
  const apiKeySubmit = document.getElementById('api-key-submit');
  const apiStatusMessage = document.getElementById('api-status-message');
  const chatHistory = document.getElementById('chat-history');
  const sendButton = document.getElementById('send-button');
  const userMessage = document.getElementById('user-message');

  // Show or hide the API key input field when clicking the settings icon
  settingsIcon.addEventListener('click', function () {
    apiKeySection.style.display = apiKeySection.style.display === 'none' ? 'flex' : 'none';
    apiStatusMessage.textContent = ''; // Clear any previous status messages
  });

  // Handle API key submission
  apiKeySubmit.addEventListener('click', function () {
    const apiKey = apiKeyInput.value.trim();

    if (apiKey) {
      validateApiKey(apiKey)
        .then(isValid => {
          if (isValid) {
            apiStatusMessage.textContent = 'API Key is valid!';
            apiStatusMessage.style.color = '#00ff00'; // Green for success
            apiKeySection.style.display = 'none'; // Hide the API input section
          } else {
            apiStatusMessage.textContent = 'Invalid API Key. Try again.';
            apiStatusMessage.style.color = '#ff5555'; // Red for error
            apiKeySection.style.display = 'flex'; // Show the input field again
          }
        })
        .catch(() => {
          apiStatusMessage.textContent = 'An error occurred. Try again.';
          apiStatusMessage.style.color = '#ff5555'; // Red for error
          apiKeySection.style.display = 'flex'; // Show the input field again
        });
    }
  });

  // Simulated API key validation (replace this with actual API key validation)
  function validateApiKey(apiKey) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate API key validation. Replace this with real API call logic.
        const isValid = apiKey === 'your-correct-api-key'; // Example valid API key
        resolve(isValid);
      }, 1000);
    });
  }

  // Add event listener to send button
  sendButton.addEventListener('click', function () {
    const userMessageText = userMessage.value;

    if (userMessageText.trim()) {
      // Append user's message to chat history
      const messageDiv = document.createElement('div');
      messageDiv.innerText = `You: ${userMessageText}`;
      chatHistory.appendChild(messageDiv);

      // Clear the input field
      userMessage.value = '';

      // Scroll chat history to the bottom
      chatHistory.scrollTop = chatHistory.scrollHeight;

      // Simulate a response (you would replace this with actual API call)
      setTimeout(() => {
        const responseDiv = document.createElement('div');
        responseDiv.innerText = 'ChatGPT: This is a simulated response.';
        chatHistory.appendChild(responseDiv);

        // Scroll chat history to the bottom again
        chatHistory.scrollTop = chatHistory.scrollHeight;
      }, 1000);
    }
  });
});
