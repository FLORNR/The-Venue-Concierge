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
              centerMode: true,
              slidesToShow: 4,
              slidesToScroll:4 ,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
    });
})