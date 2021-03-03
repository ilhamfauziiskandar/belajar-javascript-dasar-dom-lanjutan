// -------- function -------
function volume2kubus(a, b) {
    
    return a * a * a + b * b * b;
}

var q = confirm("Apakah anda ingin mencoba rumus Volume 2 kubus ?");

if (q) {
    var a = parseInt(prompt("masukan nilai sisi kubus peratama"));
    
    var b = parseInt(prompt("masukan nilai sisi kubus kedua"));
    
    console.log(volume2kubus(a, b));
    
    alert('nilai volume dari kedua kubus adalah ' + volume2kubus(a, b));
}
