	//smoothly moving:
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1700, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  	//smoothly moving end

  	//change theme:
function toggletheme (){
	alert("theme changed");
	
	if ( document.querySelector("body").classList.contains('Ldesign') ){
		document.querySelector("body").classList.add('Bdesign');
		document.querySelector("body").classList.remove('Ldesign');
		document.getElementById("togglebutton").innerHTML= "Light Theme"
	}
	else if(document.querySelector("body").classList.contains('Bdesign')){
		document.querySelector("body").classList.add('Ldesign');
		document.querySelector("body").classList.remove('Bdesign');
		document.getElementById("togglebutton").innerHTML= "Dark Theme"
	}
}