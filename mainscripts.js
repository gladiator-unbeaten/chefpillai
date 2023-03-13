$(document).ready(function() {
  $.each( $( "#links a" ), function( i, link ) {
      $( link ).delay( i * 1 ).fadeIn( 12000 );
  });
});


