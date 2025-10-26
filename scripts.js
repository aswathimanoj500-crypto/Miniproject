document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  // Simple validation
  if (!document.getElementById('name').value.trim()) {
    document.getElementById('nameError').textContent = 'Name is required';
    valid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let emailField = document.getElementById('email');
  if (!emailPattern.test(emailField.value.trim())) {
    document.getElementById('emailError').textContent = 'Valid email required';
    valid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  if (!document.getElementById('phone').value.trim()) {
    document.getElementById('phoneError').textContent = 'Phone is required';
    valid = false;
  } else {
    document.getElementById('phoneError').textContent = '';
  }

  if (!document.getElementById('message').value.trim()) {
    document.getElementById('messageError').textContent = 'Message is required';
    valid = false;
  } else {
    document.getElementById('messageError').textContent = '';
  }

  // Submit form if valid
  if (valid) {
    alert('Thank you for contacting us!');
    // Here you would normally submit the form data to the server
    document.getElementById('contactForm').reset();
  }
});
