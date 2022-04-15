$(document).ready(
    // Stick Navigation| //
    function(){
    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    })

    // Scroll Page Jquery //
    
    $("a").click(function () {
        let target = $(this).attr("href");
        $("html,body")
          .stop()
          .animate(
            {
              scrollTop: $(target).offset().top,
            },
            800
          );
        event.preventDefault();
      });
    }
)