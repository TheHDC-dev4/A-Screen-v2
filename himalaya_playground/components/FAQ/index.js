function slideContent(e){
$( "#" + e ).next('div').slideDown('slow');
    $( "#" + e ).attr('class','expand-one-active')
  $( '.content-one' ).not( $( "#" + e ).next('div') ).slideUp('slow').prev('h2').attr('class','expand-one');
  
/heamnth script/ 
}
