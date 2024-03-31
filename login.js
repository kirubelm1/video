document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Example validation (replace with your own logic)
    if (username === "" || password === "") {
      showAlert("Please enter both username and password.");
    } else {
      // Perform login logic here (e.g., AJAX request)
      // If login successful, redirect or show success message
      showAlert("Login successful!");
    }
  });
  
  function showAlert(message) {
    var alertBox = document.getElementById("custom-alert");
    var messageSpan = document.getElementById("custom-alert-message");
    messageSpan.innerHTML = message;
    alertBox.style.display = "block";
  }
  
  function closeAlert() {
    var alertBox = document.getElementById("custom-alert");
    alertBox.style.display = "none";
  }
  
  