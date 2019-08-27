jQuery( function( $ ) {

  $( 'li.mega-menu-item' ).on( 'open_panel', function() {

    $( '<div></div>' ).addClass( 'site_overly' ).appendTo( 'body' );

  } );

  $( 'li.mega-menu-item' ).on( 'close_panel', function() {

    $( '.site_overly' ).remove();

  } );

} );
