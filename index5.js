//jQuery.fn.toggleText = function(a,b) {
  //  return   this.html(this.html().replace(new RegExp("("+a+"|"+b+")"),function(x){return(x==a)?b:a;}));
    //
//}
/*
    $(document).ready(function(){
    
    $('.tgl').before('<img id="imgtg" src="setinhad.ico" />');
    
    $('.tgl').css('display', 'none')
    
    $('img', '#box-toggle').click(function() {
        
    $(this).next().slideToggle('fast')
    .siblings('.tgl:visible').slideToggle('fast');
   
    });

    })*/
    $(document).ready(function() {
      $("#setinhad").click(function(){
         $('#setinhad').hide('100');
         $('.l2').show('100');
      });
      $("#setinhau").click(function(){
          $('.l2').hide('fast');
          $("#setinhad").show('fast');
      });
  });