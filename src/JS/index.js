let toggleThemeIcon = document.querySelector('.input-mode');
let theme = localStorage.getItem('theme');
console.log(theme);
if (theme === 'dark') {
  document.documentElement.classList.add('dark');
  toggleThemeIcon.setAttribute('checked', true);
}
toggleThemeIcon.addEventListener('change', function (e) {
  if (theme === 'light') {
    document.documentElement.classList.add('dark');
    theme = 'dark';
    localStorage.setItem('theme', theme);
  } else {
    theme = 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('dark');
  }
});
