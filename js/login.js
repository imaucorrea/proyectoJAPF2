// esto fue creado para que desde github se abra el login

function logIn(){
    let user = document.getElementById("user").value;
    let pin = document.getElementById("pin").value;

    if(user != "" && pin != ""){
        window.sessionStorage.setItem("inside", true);
    }
}