 // Dark/Light Mode Toggle
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;
  
  // Check for saved user preference or use system preference
  const savedMode = localStorage.getItem('mode');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedMode === 'light' || (!savedMode && !systemPrefersDark)) {
    body.classList.add('light-mode');
    modeToggle.checked = true;
  }
  
  modeToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('light-mode');
      localStorage.setItem('mode', 'light');
    } else {
      body.classList.remove('light-mode');
      localStorage.setItem('mode', 'dark');
    }
  });
  
  // Game card hover effects
  const gameCards = document.querySelectorAll('.game-card');
  
  gameCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const title = card.querySelector('.card-title');
      title.style.textShadow = `0 0 10px ${getComputedStyle(title).color}`;
    });
    
    card.addEventListener('mouseleave', () => {
      const title = card.querySelector('.card-title');
      title.style.textShadow = 'none';
    });
  });


  // CATEGORIES JAVASCRIPT
      // This assumes you have the same toggle mechanism as your main page
    document.addEventListener('DOMContentLoaded', function() {
      const body = document.body;
      const savedMode = localStorage.getItem('mode');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedMode === 'light' || (!savedMode && !systemPrefersDark)) {
        body.classList.add('light-mode');
      }
    });


    