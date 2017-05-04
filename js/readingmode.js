(function($) {
  $('a.reader').show().click( function() {
    
    $('header, aside, footer, img').slideToggle(1000);
    $('body').toggleClass('readerMode');
    $(this).text($(this).text() == 'Reading Mode' ? 'Exit' : 'Reading Mode');
    
    if ( $('body').hasClass('readerMode') ) {
      $('section').delay(200).animate( {
        'max-width': '850px',
        'background-color': 'rgba(252,252,252,1)'
      }, 1000 )
    }
    else {
       $('section').delay(500).animate( {
        'max-width': '1024px',
        'background-color': 'rgba(255,255,255,0.9)'
      }, 1000 )  
    }
  });
})(jQuery);