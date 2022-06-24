        $(document).ready(function(){
         $(".navbar a").click(function(){
          $(".navbar a").css("background-color","")
          $(this).css("background-color","rgba(95, 158, 160, 0.581)")
         })
         $(".navbar a").hover(function(){
           $(".navbar a").removeClass("hover")
           $(this).addClass("hover")}, 
           function(){
            $(".navbar a").removeClass("hover")
           })
         $(".footer-link ul li").hover(function(){
           $(".footer-link ul li").removeClass("hover")
           $(this).addClass("hover")},
           function(){
            $(".footer-link ul li").removeClass("hover")
           
         })
        })  
