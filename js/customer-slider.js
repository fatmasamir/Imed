// Get titles from the DOM
var titleMain = $("#animatedHeading");
var titleSubs = titleMain.find("slick-active");

if (titleMain.length) {
  titleMain.slick({
    autoplay: false,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    centerPadding: "10px",
    vertical: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
  });

  // On init
  $(".slick-dupe").each(function (index, el) {
    $("#animatedHeading").slick("slickAdd", "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick("slickPlay");
}
