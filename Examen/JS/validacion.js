function valinicial(elemento){
    var numero = parseInt(elemento.value,10);
    if(isNaN(numero)){
        alert('Ingrese solo números.');
        elemento.focus();
        elemento.select();
        return;
    }
    if(numero<100000 || numero>1000000){
        alert('Ingresar valor entre 100 mil y 1 millon');
        elemento.focus();
        return false;
    }
    return true;
}

function valenganche(elemento){
    
    var numero = parseInt(elemento.value,10);
    if(isNaN(numero)){
        alert('Ingrese solo números.');
        elemento.focus();
        elemento.select();
        return;
    }

    if(numero<(document.getElementById("valaut").value)*0.1){
        alert('Enganche Minimo del 10% del valor inicial');
        elemento.focus();
        return false;
    }
    return true;
}

document.getElementById("add").onclick = function () {
    
    var valini = document.getElementById("valaut").value;
    var enganche = document.getElementById("eng").value;
    var periodo = document.querySelector("input[name=meses]:checked").value;

    if(valini == ""){
        alert("Ingresar valor inicial");
        return;
    }

    if(enganche == ""){
        alert("Ingresar Enganche");
        return;
    }

    var td_valini_node = document.createElement("td");
    var valini_text_node = document.createTextNode(valini);
    td_valini_node.appendChild(valini_text_node);

    var td_enganche_node = document.createElement("td");
    var enganche_text_node = document.createTextNode(enganche);
    td_enganche_node.appendChild(enganche_text_node);

    var td_finan_node = document.createElement("td");
    var finan_text_node = document.createTextNode(valini - enganche);
    td_finan_node.appendChild(finan_text_node);

    var td_periodo_node = document.createElement("td");
    var periodo_text_node = document.createTextNode(periodo);
    td_periodo_node.appendChild(periodo_text_node);

    var td_int_node = document.createElement("td");
    var int_text_node = document.createTextNode('3.94%');
    td_int_node.appendChild(int_text_node);

    var cuot = (valini-enganche)*(1+(0.0394*periodo));
    var fvalfut = cuot.toFixed(2);
    var td_valfut_node = document.createElement("td");
    var valfut_text_node = document.createTextNode('$'+fvalfut);
    td_valfut_node.appendChild(valfut_text_node);

    var fcuot = cuot/periodo;
    fcuot = fcuot.toFixed(2);

    var td_cuota_node = document.createElement("td");

    var cuota_text_node = document.createTextNode('$'+fcuot);

    td_cuota_node.appendChild(cuota_text_node);

    var ele_a = document.createElement("a");

    ele_a.setAttribute("href","javascript:void(0);");

    ele_a.setAttribute("onclick","del_tr(this);");

    var del_node = document.createTextNode("Eliminar");

    ele_a.appendChild(del_node);

    var td_del_node = document.createElement("td");

    td_del_node.appendChild(ele_a);

    var tr_node = document.createElement("tr");

    tr_node.appendChild(td_valini_node);
    tr_node.appendChild(td_enganche_node);
    tr_node.appendChild(td_finan_node);
    tr_node.appendChild(td_periodo_node);
    tr_node.appendChild(td_int_node);
    tr_node.appendChild(td_valfut_node);
    tr_node.appendChild(td_cuota_node);
    tr_node.appendChild(td_del_node);

    var table_node = document.getElementsByTagName("table")[0];
    table_node.appendChild(tr_node);
}
del_tr = function (obj) {
    var table_node = obj.parentNode.parentNode.parentNode;
    table_node.removeChild(obj.parentNode.parentNode);
}
