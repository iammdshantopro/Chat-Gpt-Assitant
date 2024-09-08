document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');
    const chatHistory = document.getElementById('chat-history');
    const sendButton = document.getElementById('send-button');
    const userMessage = document.getElementById('user-message');
  
    // Handle login button click
    loginButton.addEventListener('click', function () {
      // Open a new window or tab for ChatGPT login
      chrome.identity.getAuthToken({ interactive: true }, function(token) {
        if (chrome.runtime.lastError || !token) {
          console.error('Failed to get token:', chrome.runtime.lastError);
          return;
        }
  
        // Use token to authenticate the user with ChatGPT
        // You might need to make an API call to validate the token here
  
        // Example of storing the token
        chrome.storage.local.set({ chatgptToken: token }, function() {
          console.log('Token stored.');
          // After successful login, you might want to change UI or state
        });
      });
    });
  
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
  