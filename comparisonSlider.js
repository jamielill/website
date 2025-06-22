const container = document.querySelector('.comparison-box');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})