// esto fue creado para que desde github se abra el login, 
// necesité ayuda para que funcionara ya que me redigiría a la pagina enter, pienso eliminarla en el futuro


// al inicio habia colocado los valores de longitud para los campos login y pin
// pero la plantilla que elegi (por bonita) ya tenía esa función en el código como requerido
// decidí eliminarlo porque es redudante tenerlo aquí, además acorta el código


function logIn(){
    let user = document.getElementById("user").value;
    let pin = document.getElementById("pin").value;

    if(user != "" && pin != ""){
        window.sessionStorage.setItem("inside", true);
    }
}