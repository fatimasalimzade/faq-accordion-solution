let faqItems = document.querySelectorAll('.box');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    let answer = item.querySelector('.answer');
    let icon = item.querySelector('.icon img');

    let isActive = answer.style.display === 'block';

    document.querySelectorAll('.answer').forEach(answer => {
      answer.style.display = 'none';
    });
    
    document.querySelectorAll('.icon img').forEach(icon => {
      icon.src = 'assets/images/icon-plus.svg';
    });

    if (!isActive) {
      answer.style.display = 'block';
      icon.src = 'assets/images/icon-minus.svg';
    } 
  });
});
