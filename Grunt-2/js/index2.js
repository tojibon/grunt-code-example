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
        Bootstrap Modal Double Scrollbar Fix
    ---------------------------------------------------------------------------------------
    */
    $('#request-price-more-info').bind('hidden.bs.modal', function () {
      $("html").css("overflow-y", "scroll");
    });
    $('#request-price-more-info').bind('show.bs.modal', function () {
      $("html").css("overflow-y", "hidden");
    });
});