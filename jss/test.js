//Con el document.ready nos aseguramos que primero termine de cargar la página y luego ejecute la función

$(document).ready (function(){

    $("#segundoParrafo").css({"background-color":"red"})

    $(".primero").css({"background-color":"blue"})

    $("#btnHide").click(function(){
        
        $("#segundoParrafo").fadeOut();

    });

    $("#btnShow").click(function(){
        
        $("#segundoParrafo").fadeIn();

    });


  

}); 