// Q4: Theme switcher using setAttribute() and data-theme
const themeButtons = {
  light: document.getElementById('theme-light'),
  dark: document.getElementById('theme-dark'),
  blue: document.getElementById('theme-blue')
};
const currentThemeLabel = document.getElementById('current-theme');

function applyTheme(t){
  document.body.setAttribute('data-theme', t);
  document.body.setAttribute('data-theme-save', t); // custom attribute to store
  currentThemeLabel.textContent = t;
}

themeButtons.light.addEventListener('click', ()=> applyTheme('light'));
themeButtons.dark.addEventListener('click', ()=> applyTheme('dark'));
themeButtons.blue.addEventListener('click', ()=> applyTheme('blue'));

// restore if present
const saved = document.body.getAttribute('data-theme-save');
if(saved) applyTheme(saved);
