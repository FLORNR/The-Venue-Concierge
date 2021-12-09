$(document).ready(() =>{
    $(".sliderMarcas").slick({
        arrows: false,
        infinite: true,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
    });
})