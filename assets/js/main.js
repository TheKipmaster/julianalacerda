var flkty = new Flickity( '.gallery', {
  autoPlay: true,
  wrapAround: true,
  imagesLoaded: true
});

window.addEventListener('load', (event) => {
  flkty.resize();
});