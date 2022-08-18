$(document).ready(function () {
  "use strict";
  $(document).ready(function () {
    $(".product-slider").slick({
      // arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  // magic popup

  $(function () {
    $("#exzoom").exzoom({
      // thumbnail nav options
      navWidth: 60,
      navHeight: 60,
      navItemNum: 5,
      navItemMargin: 7,
      navBorder: 1,

      // autoplay
      autoPlay: true,

      // autoplay interval in milliseconds
      autoPlayTimeout: 7000,
    });
  });

  // Product filter page js
  // =====================================

  // Price Filter

  // var lowerSlider = document.querySelector("#lower");
  // var upperSlider = document.querySelector("#upper");

  // document.querySelector("#two").value = upperSlider.value;
  // document.querySelector("#one").value = lowerSlider.value;

  // var lowerVal = parseInt(lowerSlider.value);
  // var upperVal = parseInt(upperSlider.value);

  // upperSlider.oninput = function () {
  //   lowerVal = parseInt(lowerSlider.value);
  //   upperVal = parseInt(upperSlider.value);

  //   if (upperVal < lowerVal + 4) {
  //     lowerSlider.value = upperVal - 4;
  //     if (lowerVal == lowerSlider.min) {
  //       upperSlider.value = 4;
  //     }
  //   }
  //   document.querySelector("#two").value = this.value;
  // };

  // lowerSlider.oninput = function () {
  //   lowerVal = parseInt(lowerSlider.value);
  //   upperVal = parseInt(upperSlider.value);
  //   if (lowerVal > upperVal - 4) {
  //     upperSlider.value = lowerVal + 4;
  //     if (upperVal == upperSlider.max) {
  //       lowerSlider.value = parseInt(upperSlider.max) - 4;
  //     }
  //   }
  //   document.querySelector("#one").value = this.value;
  // };

  const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
  let priceGap = 1000;
  
  priceInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);
          
          if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
              if(e.target.className === "input-min"){
                  rangeInput[0].value = minPrice;
                  range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
              }else{
                  rangeInput[1].value = maxPrice;
                  range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
              }
          }
      });
  });
  
  rangeInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);
  
          if((maxVal - minVal) < priceGap){
              if(e.target.className === "range-min"){
                  rangeInput[0].value = maxVal - priceGap
              }else{
                  rangeInput[1].value = minVal + priceGap;
              }
          }else{
              priceInput[0].value = minVal;
              priceInput[1].value = maxVal;
              range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
              range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
          }
      });
  });



















  // product rating section


  // sidebar section
  $(".fiter-tittle").click(function () {
    $("ul.dropdown").toggle(500);
  });
  $(".fiter-Vehical").click(function () {
    $("ul.dropdown1").toggle(500);
  });
  $(".fiter-price").click(function () {
    $(".price").toggle(500);
  });
  $(".fiter-brand").click(function () {
    $(".brand").toggle(500);
  });
  $(".fiter-rating").click(function () {
    $(".product-rating").toggle(500);
  });


  // collam show and hidden



  
  $("#three-col").click(function(){
    $("#full-collams").css("display", "none");
    $("#three-collams").css("display", "block");
  });
  $("#full-width").click(function(){
    $("#full-collams").css("display", "block");
    $("#three-collams").css("display", "none");
  });
  $("#full-width").click(function(){
    $("#full-collams").css("display", "block");
    $("#three-collams").css("display", "none");
  });


// Quantity 



});
