$(document).ready(function(){

    $('#cifrado').click(function(){
        var bandera = true;
        var mensaje = document.getElementById('mensaje').value;
        var clave = document.getElementById('clave').value;
        if(mensaje == ""){
            alert("Debe de llenar el campo de mensaje a cifrar");
            bandera = false;
        }
        if(clave == ""){
            alert("Debe de llenar el campo de clave");
            bandera = false;
        }
        if($('input[name=tipo-cifrado]:radio').is(':checked')){
            if(bandera){
                var eleccion = $('input:radio[name=tipo-cifrado]:checked').val();
                if(verificar(clave, eleccion)){
                    var cifrado = CryptoJS.AES.encrypt(mensaje, clave);
                    document.getElementById('mensaje-cifrado').value = cifrado;
                }
            }
        }
        else{
            alert("Debe de seleccionar una opcion de cifrado");
        }
    });
});

function verificar(clave, eleccion){
    var longitud = clave.length;
    if(eleccion == "AES-128" && longitud > 16){
        alert("La clave debe de ser de longitud menor o igual a 16 caracteres");
        return false;
    }
    if(eleccion == "AES-192" && (longitud > 24 || longitud <= 16)){
        alert("La clave debe de ser de longitud menor o igual a 24 caracteres y mayor a 16 caracteres");
        return false;
    }
    if(eleccion == "AES-256" && longitud <= 24){
        alert("La clave debe de ser de longitud mayor a 24 caracteres");
        return false;
    }
    return true;
}