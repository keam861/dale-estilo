// Una manera corta de escribir 'document.ready'
$(function(){
  // Aqui va tu código.
  $( '#style_editor' ).submit(function( event ) { 
    event.preventDefault();
    var selector = $("input[name=selector]").val();
    var property = $("input[name=property]").val();
    var value = $("input[name=value]").val();
    
    $(selector).css(property, value);

  });
});