const messagesContainer = document.getElementById('messages-container');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

// Sample pre-loaded messages (replace with your actual data)
const messages = [
  { username: 'User1', timestamp: '2024-05-29 10:00:00', content: 'Hello everyone!' },
  { username: 'User2', timestamp: '2024-05-29 10:10:00', content: 'Hi there!' },
];

// Function to display a message
function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');

  const senderSpan = document.createElement('span');
  senderSpan.classList.add('sender');
  senderSpan.textContent = message.username;
  messageElement.appendChild(senderSpan);

//   const timestampSpan = document.createElement('span');
//   timestampSpan.classList.add('timestamp');
//   timestampSpan.textContent = message.timestamp;
//   messageElement.appendChild(timestampSpan);
const timestampSpan = document.createElement('span');
timestampSpan.classList.add('timestamp');

// Function to get the current time in IST
function getCurrentISTTime() {
  const now = new Date();

  // Get the time difference between UTC and IST (IST is 5.5 hours ahead)
  const timeDifference = 5.5 * 60 * 60 * 1000;

  // Add the time difference to the current date to get the IST date
  const istDate = new Date(now.getTime() + timeDifference);

  // Format the IST date and time according to your desired format
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  const istTime = istDate.toLocaleString('en-IN', options);

  return istTime;
}

// Get the current IST time
const istTime = getCurrentISTTime();

// Set the content of the timestamp span
timestampSpan.textContent = istTime;

messageElement.appendChild(timestampSpan);

  const contentSpan = document.createElement('span');
  contentSpan.classList.add('content');
  contentSpan.textContent = message.content;
  messageElement.appendChild(contentSpan);

  messagesContainer.appendChild(messageElement);
}

// Display pre-loaded messages
messages.forEach(message => displayMessage(message));

// Function to send a new message (replace with your actual logic)
function sendMessage(message) {
  // Simulate sending message to server (replace with actual API call)
  console.log('Sending message:', message);

  // Add new message to the chat UI (assuming successful sending)
  message.username = 'You'; // Assuming you retrieve username from user session
  const currentTimestamp = new Date().toISOString();
  message.timestamp = currentTimestamp;
  displayMessage(message);

  // Clear message input field
  messageInput.value = '';
}

// Handle message form submission
messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const messageContent = messageInput.value.trim();

  if (messageContent) {
    const message = {
      content: messageContent,
    };
    sendMessage(message);
  }
});

