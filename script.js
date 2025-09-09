document.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if(window.scrollY > 50){
    header.style.padding = '0.5rem';
    header.style.background = 'rgba(0,0,0,0.9)';
  } else {
    header.style.padding = '1rem';
    header.style.background = 'rgba(0,0,0,0.8)';
  }
});