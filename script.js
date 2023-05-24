
function scrolltoLeft() {
  var largeurEcran = window.innerWidth;
  console.log(largeurEcran);
  const container = document.querySelector('.container');
  const scrollAmount = container.scrollLeft - largeurEcran; 
  container.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

function scrollRight() {
  var largeurEcran = window.innerWidth;
  const container = document.querySelector('.container');
  const scrollAmount = container.scrollLeft + largeurEcran; 
  container.scrollTo({
    left: scrollAmount,
    behavior: 'smooth' 
  });
}

function scrollDroite() {
  window.scrollTo({
    top: 0,
    left: document.body.scrollWidth,
    behavior: 'auto'
  });
}
