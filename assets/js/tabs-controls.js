$(document).ready(function() {
          
    //alert('here');
    
  $('.controls-formule li a').click(function(){
     console.log("$(this).attr('id')", this.id)
     //$('.panel').hide();
     $('.controls-formule li a.active').removeClass('active');
     $(this).addClass('active');
     
     var panel = $(this).attr('href');
     const id = panel.split("-")[1]
     $(`.zon${id}-register`).fadeOut(0);
     $(`.zona-register-${id}`).fadeOut(0);

     $(panel).fadeIn(0);
     
      $(`.zona-register-${id}`).show(1000);

     return false;  // prevents link action
    
  });  // end click 

     $('.controls-formule li:first-child a').click();
     
}); // end ready