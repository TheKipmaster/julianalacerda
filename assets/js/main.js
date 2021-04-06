var flkty = new Flickity('.gallery', {
  autoPlay: true,
  wrapAround: true,
  imagesLoaded: true
});

window.addEventListener('load', (event) => {
  flkty.resize();
});

// document.getElementsByClassName('sidebarIconToggle')[0].addEventListener('click', (event) => {
//   if (event.target.style.position === "absolute") {
//     event.target.style.position = "fixed";
//     console.log(event.target);
//   } else {
//     event.target.style.position = "absolute";
//   }
// });