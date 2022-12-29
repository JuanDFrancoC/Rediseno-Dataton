const play = document.querySelector(".pley-video");
const cubrePantalla = document.querySelector(".cubrePantalla-video");
const iframeVideoDataton = document.querySelector(".iframeVideoDataton");

play.addEventListener('click', activar);

function activar(){
  play.classList.add('esconder');
  cubrePantalla.classList.add('esconder');
  iframeVideoDataton.classList.add('menosTop');
  iframeVideoDataton.setAttribute("src", "https://www.youtube.com/embed/iLwBpTs72Cw?autoplay=1&mute=1");
  
}


