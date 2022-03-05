function validar(ingresarDatos){

    var checkOK = "1234567890";

    var checkStr = ingresarDatos.precio.value;

    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba solamente numeros");
        ingresarDatos.precio.focus();
        return false;
    }

    var checkStr = ingresarDatos.cuotaIn.value;

    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba solamente numeros");
        ingresarDatos.cuotaIn.focus();
        return false;
    }

}

const form = document.getElementById('ingresarDatos');
if(allValido=true){

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let ingresarDatosData  = new FormData(form);
    let tablaAutoRef = document.getElementById('tablaAuto')
    let newTransactionRowRef = tablaAutoRef.insertRow(-1);

    let cellRef = newTransactionRowRef.insertCell(0);
    cellRef.textContent= ingresarDatos.precio.value;
    
    cellRef = newTransactionRowRef.insertCell(1);
    cellRef.textContent= ingresarDatos.precio.value/ingresarDatos.cuotaIn.value;
    
    cellRef = newTransactionRowRef.insertCell(2);
    cellRef.textContent= ingresarDatos.periodo.value;
    
    cellRef = newTransactionRowRef.insertCell(3);
    cellRef.textContent= ingresarDatos.precio.value*0.0394;

    cellRef = newTransactionRowRef.insertCell(4);
    cellRef.textContent= (ingresarDatos.precio.value)*(1 + 0.0394)*(ingresarDatos.periodo.value);
    
})
}
