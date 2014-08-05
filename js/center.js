    $(function(){
      "use strict";
      $('#text').css({
        'margin-top' : ($(window).height()/2) - ($("#text").height() / 0.6),
        
      });
      
      $(window).resize(function(){
        "use strict";
        $('#text').css({
          'margin-top' : ($(window).height()/2) - ($("#text").height() / 0.6),
          
        });
      });
    });