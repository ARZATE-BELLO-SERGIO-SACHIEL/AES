$(document).ready(function(){
    $('#descifrado').click(function(){
        var bandera = true;
        var clave = document.getElementById('clave').value;
        var contenido = document.getElementById('contenido').value;
        
        if(contenido == ""){
            alert("No se ha seleccionado ningun archivo");
            bandera = false;
        }
        if(clave == ""){
            alert("Debe de llenar el campo de clave");
            bandera = false;
        }
        if(bandera){
            var descifrado = CryptoJS.AES.decrypt(contenido, clave);
            document.getElementById('mensaje-descifrado-hex').value = descifrado;
            document.getElementById('mensaje-descifrado').value = descifrado.toString(CryptoJS.enc.Utf8);
        }
        
    });
});