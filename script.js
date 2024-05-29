const channelsContainer = document.getElementById('channels-container');
const addChannelButton = document.getElementById('add-channel-button');

// Sample channel data (replace with your data source)
const channels = [
  { name: 'General', description: 'Main channel for all discussions' },
  { name: 'Design', description: 'Talk about design and UI/UX' },
  { name: 'Development', description: 'Discuss code and technical issues' },
];

// Function to create a channel card element
function createChannelCard(channel) {
  const card = document.createElement('div');
  card.classList.add('channel-card');

  const name = document.createElement('h3');
  name.textContent = channel.name;
  card.appendChild(name);

  const description = document.createElement('p');
  description.textContent = channel.description;
  card.appendChild(description);

  const joinButton = document.createElement('button');
  joinButton.classList.add('join-button');
  joinButton.textContent = 'Join';
  card.appendChild(joinButton);

  // Add functionality to join button
  joinButton.addEventListener('click', function() {
    // Redirect to chat.html on join
    window.location.href = "chat.html";
  });

  return card;
}

// Add existing channels to the container
channels.forEach(channel => {
  const card = createChannelCard(channel);
  channelsContainer.appendChild(card);
});

// Functionality for adding a new channel (replace with your logic)
addChannelButton.addEventListener('click', function() {
  // Prompt user for channel name and description
  const name = prompt('Enter channel name:');
  const description = prompt('Enter channel description:');

  if (name && description) {
    // Add the new channel to the data and UI (replace with your logic)
    const newChannel = { name, description };
    const card = createChannelCard(newChannel);
    channelsContainer.appendChild(card);
  }
});

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', function() {
  // Redirect to login page (replace with your login page URL)
  window.location.href = "index.html"; // Change "login.html" to your actual login page
});





