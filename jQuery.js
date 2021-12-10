$(document).ready(function(){
    alert("jQuery Cargado 117");

    //Conetenodes carrucel vars

    var carrucel1 = $("#CC_C1_Carrucel_1");
    var carrucel2 = $("#CC_C1_Carrucel_2");
    var carrucel3 = $("#CC_C1_Carrucel_3");

    //Contenedores  2 y 3 hide

    carrucel2.hide();
    carrucel3.hide();

    //Desplazadores laterales vars

    var lateral1 = $("#CC_C1_Carrucel_l1");
    var lateral2 = $("#CC_C1_Carrucel_l2");
    var lateral3 = $("#CC_C1_Carrucel_l3");
    var lateral4 = $("#CC_C1_Carrucel_l4");
    var lateral5 = $("#CC_C1_Carrucel_l5");
    var lateral6 = $("#CC_C1_Carrucel_l6");

    // Funciones boton carrucel 1

    lateral1.click(function(){
        carrucel1.hide();
        carrucel3.fadeToggle('slow');
    });
    lateral2.click(function(){
        carrucel1.hide();
        carrucel2.fadeToggle('slow');
    });

    // Funciones boton carrucel 2

    lateral3.click(function(){
        carrucel2.hide();
        carrucel1.fadeToggle('slow');
    });
    lateral4.click(function(){
        carrucel2.hide();
        carrucel3.fadeToggle('slow');
    });

    // Funciones boton carrucel 3

    lateral5.click(function(){
        carrucel3.hide();
        carrucel2.fadeToggle('slow');
    });
    lateral6.click(function(){
        carrucel3.hide();
        carrucel1.fadeToggle('slow');
    });
});
