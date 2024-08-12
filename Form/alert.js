
// When the form is submitted, do this:
document.getElementById('loginForm').onsubmit = function(event) {
  event.preventDefault(); // Stop the form from submitting normally

  // Show a simple success message
  alert("Success");

  // Wait 0.5 seconds, then go to the home page
  setTimeout(function() {
      window.location.href = "../home.html"; // Go to the home page
  }, 500); // 300 milliseconds = 0.3 seconds
};
