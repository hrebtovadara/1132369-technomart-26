var link = document.querySelector(".write-us");
var writeUsPopup = document.querySelector(".contacts-form");
var close = writeUsPopup.querySelector(".close-writeus");

var nameField = writeUsPopup.querySelector("[id=contacts-name]");
var emailField = writeUsPopup.querySelector("[id=contacts-email]");
var textField = writeUsPopup.querySelector("[id=contacts-text]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("nameField");
} catch (err) {
    isStorageSupport = false;
}


var form = document.querySelector("form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("visually-hidden");
    writeUsPopup.classList.remove("animation");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("animation");

    // if (storage) {
    //     nameField.value = storage;
    //     emailField.focus();
    //         if (storage) {
    //             emailField.value = storage;
    //             textField.focus();}
    //             else {
    //                 emailField.focus();
    //               }
    //   } else {
    nameField.focus();
    //   }

});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("visually-hidden");
    writeUsPopup.classList.remove("animation");
    writeUsPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!nameField.value || !emailField.value || !textField.value) {
        evt.preventDefault();
        writeUsPopup.classList.remove("modal-error");
        writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
        writeUsPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("nameField", nameField.value);
        }
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (writeUsPopup.classList.add("visually-hidden")) {
            writeUsPopup.classList.remove("visually-hidden");
            writeUsPopup.classList.remove("animation");
            writeUsPopup.classList.remove("modal-error");
        }
    }
});


var buttonDelivery = document.querySelector(".button-delivery");
var buttonGuarantee = document.querySelector(".button-guarantee");
var buttonCredit = document.querySelector(".button-credit");

var servisesDelivery = document.querySelector(".servises-delivery");
var servisesGuarantee = document.querySelector(".servises-guarantee");
var servisesCredit = document.querySelector(".servises-credit");


buttonDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();

    servisesDelivery.classList.remove("visually-hidden");
    servisesGuarantee.classList.add("visually-hidden");
    servisesCredit.classList.add("visually-hidden");
});

buttonGuarantee.addEventListener("click", function (evt) {
    evt.preventDefault();
    servisesDelivery.classList.add("visually-hidden");
    servisesGuarantee.classList.remove("visually-hidden");
    servisesCredit.classList.add("visually-hidden");
});

buttonCredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    servisesDelivery.classList.add("visually-hidden");
    servisesGuarantee.classList.add("visually-hidden");
    servisesCredit.classList.remove("visually-hidden");
});

var iconLeft = document.querySelector(".icon-left");
var iconRigth = document.querySelector(".icon-right");
var radioOne = document.querySelector("[id=perforator-power]");
var radioTwo = document.querySelector("[id=drill-power]");
var sliderOne = document.querySelector(".catalog-drill");
var sliderTwo = document.querySelector(".catalog-perforator");

iconRigth.addEventListener("click", changeSlide);
iconLeft.addEventListener("click", changeSlide);
radioOne.addEventListener("click", showFirstSlide);
radioTwo.addEventListener("click", showSecondSlide);


function changeSlide(evt) {
    evt.preventDefault();
    if (sliderOne.classList.contains("visually-hidden")) {
        showFirstSlide();
    } else {
        showSecondSlide();
    }
}

function showFirstSlide() {
    sliderOne.classList.remove("visually-hidden");
    sliderOne.classList.add("slider-catalog");

    sliderTwo.classList.add("visually-hidden");
    sliderTwo.classList.remove("slider-catalog");

    radioTwo.checked = false;
    radioOne.checked = true;
}

function showSecondSlide() {
    sliderOne.classList.add("visually-hidden");
    sliderOne.classList.remove("slider-catalog");

    sliderTwo.classList.remove("visually-hidden");
    sliderTwo.classList.add("slider-catalog");

    radioTwo.checked = true;
    radioOne.checked = false;
}




var mapLink = document.querySelector(".map-image");

var mapPopup = document.querySelector(".main-map");
var mapClose = mapPopup.querySelector(".close-map");


mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("visually-hidden");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("visually-hidden");

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!mapPopup.classList.contains("visually-hidden")) {
      mapPopup.classList.add("visually-hidden");
    }
  }
});

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