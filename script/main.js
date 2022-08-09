jQuery(document).ready(function ($) {
 
  var App = App || {};

  //---MAIN----
  $(function () {
      App.Site.gettoggle();
      App.Site.scrolltoTop();
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
                    $(".main-page .left-content .md-popup-1").addClass('hover');
                },
                mouseleave: function () {
                    $(".main-page .left-content .md-popup-1").removeClass('hover');
                }
            });
        }
        var scrolltoTop = function(){
            // $(window).scroll(function(){
            //     if ($(window).scrollTop() >= 40) {
            //         $('.header').addClass('scroll-top');
            //     }
            //     else {
            //         $('.header').removeClass('scroll-top');
            //     }                 
            // });
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
            $(".ctn-button").fancybox({
                'transitionIn'  :   'elastic',
                'transitionOut' :   'elastic',
                'speedIn'       :   2000, 
                'speedOut'      :   200, 
                'scrolling'     : 'no',
                'titleShow'     : false,
                'onClosed'      : function() {
                    $("#login_error").hide();
                }
            });
            
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
            $(".the-le").fancybox();
            // $("#modal-wrong").fancybox().trigger('click');
            // $("#modal-correct").fancybox().trigger('click');
            // $("#modal-sucess").fancybox().trigger('click');
            // $("#modal-scanqr").fancybox({
            //    clickSlide: false,
            //    clickOutside: false,
            //    'afterClose':function () {
            //          window.location.reload();
            //        },
            // }).trigger('click');

        }

        return{
            gettoggle:gettoggle,
            scrolltoTop:scrolltoTop,
            getheight:getheight,
            fancybox:fancybox,
            getrandom:getrandom,
            getplugin:getplugin,
        };

    }(); 

  //--End All site


    
   
});    


