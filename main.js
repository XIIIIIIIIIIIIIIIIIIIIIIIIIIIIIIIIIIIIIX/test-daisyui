document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) {
    html.setAttribute('data-theme', saved);
  }

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
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
