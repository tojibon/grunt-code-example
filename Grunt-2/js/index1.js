/*
---------------------------------------------------------------------------------------
	custom.js
    Theme related all JS custom functions                           
    @Since Version 1.0
---------------------------------------------------------------------------------------
*/
jQuery(document).ready(function($) {
    
    /*
    ---------------------------------------------------------------------------------------
        Widget ul li nasted padding fix.
    ---------------------------------------------------------------------------------------
    */
    jQuery('.widget > ol li, .widget > ul li, .widget > dl dd').each(function(){
        if ( jQuery(this).find('ul,ol,dl').length > 0 ) {
            jQuery(this).css({'padding-bottom' : 0});
        }
    });  
});