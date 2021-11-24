document.querySelector('#calcular').addEventListener('click', () => {
    var monto = document.getElementById('Monto').value;

    if (isNaN(monto)){
        alert("Introduce un numero, por favor");
        document.getElementById('Monto').value = "";
    }

    else{
        var siniva = parseFloat(monto)
        var iva = parseFloat(monto) * 0.08;
        var coniva = parseFloat(monto) + parseFloat(iva);
        document.getElementById("siniva").value = siniva;
        document.getElementById("Iva").value = iva;
        document.getElementById("coniva").value = coniva;
    }


})
