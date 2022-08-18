document.addEventListener("DOMContentLoaded", function(){

    // busca si alguien ya realizó el login
    let inside = window.sessionStorage.getItem("inside");
    if(inside == null){
        // si es null nos direcciona a la pagina para entrar
        window.location = "login.html";
    }
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});