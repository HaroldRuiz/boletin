function sumar() {
    var num1 = Number(document.getElementById('esp1').value);
    var num2 = Number(document.getElementById('esp2').value);
    var total = num1+num2;
    document.getElementById('total').value = total;
    //alert(total)
}
function resta() {
    var num1 = Number(document.getElementById('esp1').value);
    var num2 = Number(document.getElementById('esp2').value);
    var total = num1-num2;
    document.getElementById('total').value = total;
    //alert(total)
}

function multiplicacion() {
    var num1 = Number(document.getElementById('esp1').value);
    var num2 = Number(document.getElementById('esp2').value);
    var total = num1*num2;
    document.getElementById('total').value = total;
    //alert(total)
}

function division() {
    var num1 = Number(document.getElementById('esp1').value);
    var num2 = Number(document.getElementById('esp2').value);
    var total = num1/num2;
    document.getElementById('total').value = total;
    //alert(total)
}