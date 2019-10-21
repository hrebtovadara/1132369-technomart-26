var linkCatalog = document.querySelectorAll(".buy-now");
var popupCatalog = document.querySelector(".notification");
var close = popupCatalog.querySelector(".close-cart");

linkCatalog.forEach("click", function (item, linkCatalog) {
    item.preventDefault();
    popupCatalog.classList.remove("visually-hidden");
    
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCatalog.classList.add("visually-hidden");
    
});