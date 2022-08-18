// variable donde se guarda el listado de objetos
let currentProductsArray = [];

function showProductsList(){

    // acá se desarrolla el codigo para mostrar el listado de objetos/arreglos
    let htmlContentToAppend = "";
    // recorre la variable de arriba
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];

       htmlContentToAppend += `
            <div onclick="setCatID(${product.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name}</h4>
                            <small class="text-muted">${product.productCount} artículos</small>
                        </div>
                        <p class="mb-1">${product.description}</p>
                    </div>
                </div>
            </div>
            `
        
        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
    }
}

 document.addEventListener("DOMContentLoaded", function(e){

    // variable local de la categoria seleccionada
    let categoryId = localStorage.getItem("catID");
    
    // para que solo muestre lo que está en 101
    if (categoryId == 101) {

        console.log("llego");
     // traer a JSON a tu pagina
     getJSONData(PRODUCTS_101_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductsArray = resultObj.data.products;
            showProductsList()
        }
    });
}
});