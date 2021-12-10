$(document).ready(function(){
    
    var cont1 = $("#contenido2_info_3_carrucel_1")
    var cont2 = $("#contenido2_info_3_carrucel_2")

    var carrucel1 = $(".contenido2_info_3_carrucel_1_btnCarrucel")
    var carrucel2 = $(".contenido2_info_3_carrucel_2_btnCarrucel")

    // cont2.hide()
    cont1.hide()

    carrucel1.click(function(){
        cont1.hide();
        cont2.fadeIn('slow')
        
    })
    carrucel2.click(function(){
        cont2.hide()
        cont1.fadeIn('slow')
    })
})