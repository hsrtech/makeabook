document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('menu-trigger').addEventListener('click', function() {
    var el = document.getElementById('book-wrapper');
    el.classList.toggle('sidebar-visible');
  });
});
