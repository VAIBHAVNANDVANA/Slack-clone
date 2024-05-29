// Get sign-in and sign-up buttons
const signInButton = document.getElementById('sign-in-button');
const signUpButton = document.getElementById('sign-up-button');

// Sign-in button click handler (replace with your actual sign-in logic)
signInButton.addEventListener('click', function() {
  console.log('User signed in');

  // Redirect to channel.html on successful sign-in (optional)
  window.location.href = "channel.html";  // Uncomment if needed
});

// Sign-up button click handler (replace with your actual sign-up logic)
signUpButton.addEventListener('click', function() {
  console.log('User signed up');

  // Redirect to channel.html on successful sign-up
  window.location.href = "channel.html";  // Uncomment this line
});
