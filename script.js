    const btn = document.getElementById('themeBtn');
    const body = document.body;
    btn.addEventListener('click', () => {
      body.classList.toggle('dark');
      btn.textContent = body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
    });