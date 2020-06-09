/* Swiper */
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* Read more */
function showMore(n,m = 0) {
  var x = document.getElementById("more-text-" + n);
  var y = document.getElementById("more-btn-" + n);
  x.classList.toggle("show-text");
  y.classList.toggle("more-btn");

  if (m > 0) {
    var x2 = document.getElementById("more-text-" + m);
    x2.classList.toggle("show-text");
  }
}

/* Modal */
    var modal = document.getElementById("info");
    var btnOpen = document.getElementById("info-btn");
    var btnClose = document.getElementById("close-btn");
    
    btnOpen.onclick = function () {
        modal.classList.toggle("show-info");
    };

    btnClose.onclick = function () {
        modal.classList.toggle("show-info");
    };