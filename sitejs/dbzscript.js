$(document).ready(function(){
	
	// Main Menu
  $(".menu-toggle").click(function(){
	$(".mobile-menu").stop(true, true).slideToggle(300);
  });

  $(window).on('resize', function(){
	if($(window).width() > 980){
	  $(".mobile-menu").hide();
	}
  });
  
  
  // Testimonials
  let currentSlide = 0;
  const slides = $(".testimonial-slide");
  const totalSlides = slides.length;

  function showNextSlide() {
    slides.eq(currentSlide).removeClass("active");
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.eq(currentSlide).addClass("active");
  }

  // Auto slide every 6 seconds
  setInterval(showNextSlide, 6000);

  // View More / View Less toggle
  $(".view-more-btn").on("click", function() {
    const text = $(this).siblings(".testimonial-text");
    text.toggleClass("expanded");

    if (text.hasClass("expanded")) {
      $(this).text("View Less");
    } else {
      $(this).text("View More");
    }
  });
});



