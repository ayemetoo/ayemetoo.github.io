window.onscroll = function() {scrollFunction()};

//scroll for navbar
function scrollFunction() {
  console.log(document.body.scrollTop + ', ' + document.documentElement.scrollTop);
  if ((document.body.scrollTop > 500) || (document.documentElement.scrollTop > 500)) {
    document.getElementById("navbar").style.opacity = "1";
  } else if ((document.body.scrollTop > 400) || (document.documentElement.scrollTop > 400)) {
    document.getElementById("navbar").style.opacity = "0.9";
  } else if ((document.body.scrollTop > 300) || (document.documentElement.scrollTop > 300)) {
    document.getElementById("navbar").style.opacity = "0.8";
  } else if ((document.body.scrollTop > 200) || (document.documentElement.scrollTop > 200)) {
    document.getElementById("navbar").style.opacity = "0.7";
  } else if ((document.body.scrollTop > 100) || (document.documentElement.scrollTop > 100)) {
    document.getElementById("navbar").style.opacity = "0.6";
  }  else {
    document.getElementById("navbar").style.opacity = "0.5";
  }
}

//smooth scrolling between sections --> from W3C
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
