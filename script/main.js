jQuery(document).ready(function ($) {
 
  var App = App || {};

  //---MAIN----
  $(function () {
      App.Site.gettoggle();
      App.Site.active_opacity();
      App.Site.getheight();
      App.Site.fancybox();
      App.Site.getrandom();
      App.Site.getplugin();
  });

  //--All site
    App.Site = function(){

        var gettoggle = function(){
            $('.header .header-mobile .toggle-menu').click(function(){
                $('.main-header').addClass('active-1');
                $('.toggle-close').addClass('active-2');
                $('.bg-op').addClass('active-3');
            });
            $('.header .toggle-close').click(function(){
                $('.main-header').removeClass('active-1');
                $(this).removeClass('active-2');
                $('.bg-op').removeClass('active-3');
            });
            $(".main-page .left-content .md-popup-0").on({
                mouseenter: function () {
                    $(".main-page .left-content .md-popup-1 .img-click").addClass('hover');
                },
                mouseleave: function () {
                    $(".main-page .left-content .md-popup-1 .img-click").removeClass('hover');
                }

            });
             $(".main-page .left-content .md-popup-1").click(function(){
                $(".md-answer .md-img-popup-1").addClass('md-mobile');
             });
             $(".main-page .left-content .md-popup-2").click(function(){
                $(".md-answer .md-img-popup-2").addClass('md-mobile');
             });
             $(".main-page .left-content .md-popup-3").click(function(){
                $(".md-answer .md-img-popup-3").addClass('md-mobile');
             });
             $(".main-page .left-content .md-popup-4").click(function(){
                $(".md-answer .md-img-popup-4").addClass('md-mobile');
             });
             $(".main-page .left-content .md-popup-5").click(function(){
                $(".md-answer .md-img-popup-5").addClass('md-mobile');
             });
             $(".main-page .left-content .md-popup-6").click(function(){
                $(".md-answer .md-img-popup-6").addClass('md-mobile');
             });
             $(".main-page .left-content .md-popup-7").click(function(){
                $(".md-answer .md-img-popup-7").addClass('md-mobile');
             });
             $(".main-page .left-content .md-popup-8").click(function(){
                $(".md-answer .md-img-popup-8").addClass('md-mobile');
             });
             $(".main-page .left-content .md-popup-9").click(function(){
                $(".md-answer .md-img-popup-9").addClass('md-mobile');
             });
             $(".main-page .left-content .md-popup-10").click(function(){
                $(".md-answer .md-img-popup-10").addClass('md-mobile');
             });
             $(".main-page .left-content .md-popup-11").click(function(){
                $(".md-answer .md-img-popup-11").addClass('md-mobile');
             });
             $(".main-page .left-content .md-popup-12").click(function(){
                $(".md-answer .md-img-popup-12").addClass('md-mobile');
             });
             $(".main-page .left-content .md-popup-13").click(function(){
                $(".md-answer .md-img-popup-13").addClass('md-mobile');
             });

             
        }
        var active_opacity = function(){
            $('.md-answer .md-content input').click(function(){
                $('.md-answer .bg-op-5').addClass('active-opacity');
                $('.md-answer .md-img-popup-0').addClass('active-opacity');
             });
            $('.md-wrong .md-content a').click(function(){
                 $('.md-answer .bg-op-5').removeClass('active-opacity');
                $('.md-answer .md-img-popup-0').removeClass('active-opacity');
            });
        }
        var getheight = function(){
            var  h3height = $('.main-page .right-content').outerHeight();         
            $('.main-page .left-content').css("height",h3height); 
            var onresize = function() {
               var  h3height = $('.main-page .right-content').outerHeight();         
               $('.main-page .left-content').css("height",h3height); 
            };
            window.addEventListener("resize", onresize);
        }
        var fancybox = function(){
            $(".ctn-button").fancybox({});
            
             $(".ctn-close").fancybox();

        }
        var getrandom = function(){        
            let ran = Math.floor(Math.random() * 3) + 1;
            if (ran==1){
                $('#answer-1').css('display','block');
            }
            if (ran==2){
                $('#answer-2').css('display','block');
            }
            if (ran==3){
                $('#answer-3').css('display','block');
            }
        }
        var getplugin = function(){
              $('.ui.dropdown')
              .dropdown()
            ;
             new WOW().init();
            $('.ui.checkbox').checkbox();
        

        }

        return{
            gettoggle:gettoggle,
            active_opacity:active_opacity,
            getheight:getheight,
            fancybox:fancybox,
            getrandom:getrandom,
            getplugin:getplugin,
        };

    }(); 

  //--End All site


    
   
});    



