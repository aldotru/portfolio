const $ = require("jquery");
const Marquee3k = require("marquee3000");
const slickCarousel = require("slick-carousel");

// Initializing marquee
Marquee3k.init();

// Slick carousel options
// Projects carousel
$('.projects__carousel').slick({
  autoplay: true,
  autoplaySpeed: 7500,
  arrows: true,
  centerMode: true,
  draggable: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 300,
  variableWidth: true,
  // Moving next/previous buttons outside the slick wrapper
  // @type {object} DOM node
  nextArrow: $('.projects__carousel-arrow--right'),
  prevArrow: $('.projects__carousel-arrow--left')
});
// Testimonials carousel
$('.testimonials__carousel').slick({
  autoplay: true,
  autoplaySpeed: 7500,
  arrows: true,
  centerMode: true,
  draggable: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  // Moving next/previous buttons outside the slick wrapper
  // @type {object} DOM node
  nextArrow: $('.testimonials__arrow--right'),
  prevArrow: $('.testimonials__arrow--left')
});