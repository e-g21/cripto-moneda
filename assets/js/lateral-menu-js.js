
  $("#check").on( 'change', function() {
    if( $(this).is(':checked') ) {
        // si el menu de opciones cierra
        // $("#main-content").width(96+ "%"); 
         document.getElementById("main-content").classList.remove("x-1");
         document.getElementById("main-content").classList.add("x-2");
        $(".logo-1").css("display", "none");
        $(".accordion-button").css("margin-top", "7px");
        $(".accordion-button").css("top", "50px");
        $(".accordion-button").css("transition", "0.1s");
        $(".i-menu").css("opacity", "1");
        $(".i-menu").css("font-size", "20px");
        $(".i-menu").css("margin-top", "12px");
        $(".paises").css("margin-left", "10px");
        $("#isologo").addClass("mostrar-iso");
        $("#isologo").css("opacity", "1");
        $("#isologo").css("transition", "0.4s");
        $("#isologo").css("margin-bottom", "");

    } else {
        // Si el menù de opciones abre
        /* $("#main-content").width(73+ "%");  */  
        document.getElementById("main-content").classList.add("x-1");
        document.getElementById("main-content").classList.remove("x-2");
        $(".logo-1").css("display", "flex");
        $(".accordion-button").css("margin-top", "0px");
        $(".accordion-button").css("top", "0px");      
        $("#main-contant").css("padding-top", "0px");
        $(".i-menu").css("opacity", "0");
        $("#isologo").remove("mostrar-iso");
        $("#isologo").css("opacity", "0");
    }
});