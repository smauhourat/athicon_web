function filtrarProyectos(filtro) {
    $('.filtro-act').removeClass('filtro-act');
    $('#filtro-'+filtro).addClass('filtro-act');
    $('.proyecto').hide();
    $('.proyecto-'+filtro).show();
}

$(document).ready(function(){

    iniciarSlider();

});

function iniciarSlider() {
    setInterval(function(){
        $('#slide1').fadeToggle(1000);
    },5000);
}