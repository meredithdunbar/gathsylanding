   $(function(){
    "use strict";
      $('#logo2').css({
        'margin-top' : ($(window).height()/2) - ($("#logo2").height() / 2),
        
      });
      
      $(window).resize(function(){
        "use strict";
        $('#logo2').css({
          'margin-top' : ($(window).height()/2) - ($("#logo2").height() / 2),
          
        });
      });
    });