document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme');
      html.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
    });
  }

  const form = document.getElementById('contact-form');
  const message = document.getElementById('form-message');
  if (form && message) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();
      message.classList.remove('hidden');
    });
  }
});
