// Code inspired by https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/

const isPressed = window.localStorage.getItem('dyslexic') === 'true';

if(isPressed) {
  document.querySelector('.content').classList.add('dyslexia-mode');
  document.getElementById('dyslexia-toggle').classList.add('dyslexia-mode-nav');
  document.getElementById('header').classList.add('dyslexia-mode-nav-2');
}

var toggle = document.getElementById('dyslexia-toggle');
if(isPressed) {
  toggle.setAttribute('aria-pressed', 'true');
}

toggle.addEventListener('click', (event) => {
  let pressed = event.target.getAttribute('aria-pressed') === 'true';
  event.target.setAttribute('aria-pressed', String(!pressed));

  document.querySelector('.content').classList.toggle('dyslexia-mode');
  document.getElementById('dyslexia-toggle').classList.toggle('dyslexia-mode-nav');
  document.getElementById('header').classList.toggle('dyslexia-mode-nav-2');

  window.localStorage.setItem('dyslexic', String(!pressed));
});
