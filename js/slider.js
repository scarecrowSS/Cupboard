// var selector = '.slick-slide:not(.slick-cloned)';

// // Init fancybox, skip cloned elements
// $().fancybox({
//   selector : selector,
//   backFocus : false,
//   animationEffect : "fade"
// });

// // Custom click event on cloned elements, 
// $(document).on('click', '.slick-cloned', function(e) {
//   $(selector)
//     .eq( ( $(this).attr("data-slick-index") || 0) % $(selector).length )
//     .trigger("click.fb-start", { $trigger: $(this) });

//   return false;
// });
$('[data-fancybox]:not(.slick-cloned)').fancybox();

$('.sliders').slick({
    dots: true,
    lazyLoad: 'ondemand'
});