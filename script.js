// Set the user information in session storage after the user logs in
function setUserLoggedIn(username) {
  sessionStorage.setItem('loggedInUser', username);
}

// Get the user information from session storage to reference the logged-in user
function getLoggedInUser() {
  return sessionStorage.getItem('loggedInUser');
}