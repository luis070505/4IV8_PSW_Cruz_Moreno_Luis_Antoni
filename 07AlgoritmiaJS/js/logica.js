

//PROBLEMA 3

function problema3(){

    //definir un alfabeto
    var alfabeto = ['A','B','C','D','E',
    'F','G','H','I','J','K','L','M',
    'N','Ñ','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z']

    //vamos a obtener la entrada de los datos
    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //tengo que eliminar los espacios

    p3_palabras = p3_palabras.map(function(palabra){
        //crear una expresion que recupere palabras
        return palabra.replace(/\s/g, '').toUpperCase()
    });

    //tengo que calcular cuantos caracteres hay
    var p3_res = '';
    
    p3_palabras.forEach(function (palabra, i){
        //separar las palebras actuales de array que 
        //contiene cada letra de dicha palabra
        var letras_unicas = []
        var palabra_array = palabra.split('');

        //iteracion
        alfabeto.forEach(function (letra, i){
            //iter0o la palabara
            palabra_array.forEach(function(letras_unicas, k){

                //comprobar que la letra esta dentro del alfabeto 
                if(letras_palabras == letra){
                    //si la letra no la hemos contado 
                    //la agregamos a un array
                    //las letras unnicas
                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabra: ' + palabra + '=' + letras_unicas.length + '\n'
    });
    document.querySelector('#p3-output').textContent = p3_res;


}