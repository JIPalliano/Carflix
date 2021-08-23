$(document).ready(function() {
    /* carrossel 1 */
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });
    /* carrossel 2 */
    $('#autoWidth-2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth-2').removeClass('cS-hidden');
        } 
    }); 
    /* carrossel 3 */
    $('#autoWidth-3').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth-3').removeClass('cS-hidden');
        } 
    });  
  });