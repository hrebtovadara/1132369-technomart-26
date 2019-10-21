var mapLink = document.querySelector(".map-image");

var mapPopup = document.querySelector(".main-map");
// var mapClose = mapPopup.querySelector(".modal-close");


mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("visually-hidden");
});

// mapClose.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   mapPopup.classList.remove("modal-show");
// });

// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     evt.preventDefault();
//     if (mapPopup.classList.contains("modal-show")) {
//       mapPopup.classList.remove("modal-show");
//     }
//   }
// });