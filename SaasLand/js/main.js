$(document).ready(function(){
   
    /*------------------------------------------------------------------------------------
    ** Dropdown Menu & Dropdown Submenu as device width < 992                             
    -------------------------------------------------------------------------------------*/

    var unSubmenuShow = 1; // Judge dropdown-submenu is show or not show 


    $('#header')
        .on('mousedown', '.nav-link', function(e){
            //var deviceWidth = window.innerWidth;
            //console.log(deviceWidth);

            if(window.innerWidth < 992){
                $(this).siblings('.dropdown-menu').toggleClass('show-menu');
            }

        })
        .on('blur', '.nav-link', function(e){
                
                if(unSubmenuShow){
                    $(this).siblings('.dropdown-menu').removeClass('show-menu');
                }

        })
        .on('mousedown', '.pages-item li', function(e){
            unSubmenuShow = 0;

            if(window.innerWidth < 992){
                $(this).children('.dropdown-submenu').toggleClass('show-menu');
            }
        })
        .on('blur', '.pages-item li', function(e){
            unSubmenuShow=1;

            $(this).children('.dropdown-submenu').removeClass('show-menu');

            $(this).closest('.dropdown-menu').removeClass('show-menu');
            
       });


    /*------------------------------------------------------------------------------------
    ** Scroll                           
    -------------------------------------------------------------------------------------*/

    /* Navigatiob Bar */
    $(document).scroll(function(e){
        var value = $(this).scrollTop();

        if(value){
            $('.navbar').addClass('navbar-scrolled');
        }else{
            $('.navbar').removeClass('navbar-scrolled');
        }
    });



    /*------------------------------------------------------------------------------------
    ** Hamburger Menu                           
    -------------------------------------------------------------------------------------*/
    $('#menu-toggle')
        .click(function(e){
            $(this).toggleClass('open');
        });


    /*------------------------------------------------------------------------------------
    ** Button                           
    -------------------------------------------------------------------------------------*/
    $('#content').on('click', '.button', function(e){
        $(this).toggleClass('active');
    });
    
});

