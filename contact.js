document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close');
  
    closeBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });
  
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      popup.style.display = 'block';
      form.reset();
      setTimeout(function () {
        popup.style.display = 'none';
      }, 3000); // Close popup after 3 seconds
    });
  });
  
  