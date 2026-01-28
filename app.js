const form = document.querySelector('.signup');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! We will notify you soon.');
  form.reset();
});