document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-menu a');

  const tabContents = document.querySelectorAll('.tab-content-container > div');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      tabs.forEach(t => t.setAttribute('aria-selected', 'false'));

      e.currentTarget.setAttribute('aria-selected', 'true');
      
      tabContents.forEach(content => content.setAttribute('hidden', ''));

      const targetId = e.currentTarget.getAttribute('href').substring(1);

      const activeContent = document.getElementById(targetId);

      if (activeContent) {
        activeContent.removeAttribute('hidden');
      }
    });
  });
});
