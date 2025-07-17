const toggleDark = document.getElementById('toggleDark');
toggleDark.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggleDark.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggleDark.textContent = '🌙';
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    toggleDark.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('dark');
    toggleDark.textContent = '🌙';
  }
});
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Form functionality coming soon.");
  });
}
