var linkCatalog = document.querySelectorAll(".buy-now");
var popupCatalog = document.querySelector(".notification");
var close = popupCatalog.querySelector(".close-cart");

linkCatalog.forEach(function (item) {
    item.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupCatalog.classList.remove("visually-hidden");
    });
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCatalog.classList.add("visually-hidden");

});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupCatalog.classList.add("visually-hidden")) {
            popupCatalog.classList.remove("visually-hidden");
        }
    }
});
