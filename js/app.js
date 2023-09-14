$(document).ready(function () {
  // Increase
  // Back to top
  var amountScrolled = 200;
  var amountScrolledNav = 25;

  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $("button.back-to-top").addClass("show");
    } else {
      $("button.back-to-top").removeClass("show");
    }
  });

  $("button.back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
  // Smooth Scrolling
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
  $("#loading").fadeOut(1500);
  var btn_top = $("#scroll-top");
  btn_top.addClass("show");

  $("#loading").fadeOut(1500);
  var btn_top = $("#scroll-top");
  btn_top.addClass("show");
  $(".Testimonials_slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".video_wrap .close").on("click", function () {
    let elem = document.querySelector(".video_wrap .overlay");
    elem.style.display = "none";
    // $(this).
  });
  $("#icon_play").on("click", function () {
    let elem = document.querySelector(".video_wrap .overlay");
    elem.style.display = "block";
  });
});
// logic
$("#CHAT_LINK").on("click", function () {
  $(".link_chat span").fadeToggle(200);
});
AOS.init();
function TabsOpen(e, value) {
  var elems = document.querySelectorAll(".tab_title .active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("active");
  });
  e.target.className = "active";
  Array.from(document.querySelectorAll(".tab")).forEach(function (val) {
    val.style.display = "none";
  });
  document.getElementById(value).style.display = "block";
}
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
