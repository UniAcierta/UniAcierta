$(document).ready(function(){
    
    var cont1 = $("#contenido2_info_3_carrucel_1")
    var cont2 = $("#contenido2_info_3_carrucel_2")

    var carrucel1 = $(".contenido2_info_3_carrucel_1_btnCarrucel")
    var carrucel2 = $(".contenido2_info_3_carrucel_2_btnCarrucel")

    var privacidad = $("#pie_central_info_privacidad")
    var terminos = $("#pie_central_info_terminos")

    var privacidad_M = $("pie_central_info_privacidad_M")
    var terminos_M = $("#pie_central_info_terminos_M")

    var privacidad_div = $("#privacidad")
    var terminos_div = $("#terminos")
    
    // cont2.hide()
    cont1.hide()

    carrucel1.click(function(){
        cont1.hide()
        cont2.fadeIn('slow')
        
    })
    carrucel2.click(function(){
        cont2.hide()
        cont1.fadeIn('slow')
    })



    privacidad.click(function(){
        privacidad_div.fadeIn('slow')
    })

    privacidad_div.click(function(){
        privacidad_div.hide()
    })

    terminos.click(function(){
        terminos_div.fadeIn('slow')
    })
    terminos_div.click(function(){
        terminos_div.hide()
    })


    privacidad_M.click(function(){
        privacidad_div.fadeIn('slow')
    })
    terminos_M.click(function(){
        terminos_div.fadeIn('slow')
    })

})