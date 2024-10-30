let darkMode = document.querySelector('.input-mode');
let html = document.querySelector('html');
console.log(html);
darkMode.addEventListener('click', function () {
  if (darkMode.getAttribute('data-toggle') === 'false') {
    darkMode.setAttribute('data-toggle', 'true');
    html.setAttribute('class', 'dark');
    console.log(darkMode);
  } else {
    darkMode.setAttribute('data-toggle', 'false');
    html.setAttribute('class', 'light');
    console.log(darkMode);
  }
});
