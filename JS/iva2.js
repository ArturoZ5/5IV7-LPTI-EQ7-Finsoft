document.querySelector('#calcular2').addEventListener('click', () => {
    var monto = document.getElementById('Monto2').value;

    if (isNaN(monto)){
        alert("Introduce un numero, por favor");
        document.getElementById('Monto2').value = "";
    }

    else{
        var siniva2 = parseFloat(monto)
        var iva2 = parseFloat(monto) * 0.16;
        var coniva2 = parseFloat(monto) + parseFloat(iva2);
        document.getElementById("siniva2").value = siniva2;
        document.getElementById("Iva2").value = iva2;
        document.getElementById("coniva2").value = coniva2;
    }


})
