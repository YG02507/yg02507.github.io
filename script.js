document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-menu a');

  const tabContents = document.querySelectorAll('.tab-content-container > div');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      // 모든 탭 비활성화

      tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
      
      // 클릭된 탭 활성화

      e.currentTarget.setAttribute('aria-selected', 'true');
      
      // 모든 탭 내용 숨기기
      
      tabContents.forEach(content => content.setAttribute('hidden', ''));
      
      // 클릭된 탭에 해당하는 내용만 보이기

      const targetId = e.currentTarget.getAttribute('href').substring(1);

      const activeContent = document.getElementById(targetId);

      if (activeContent) {
        activeContent.removeAttribute('hidden');
      }
    });
  });
});
