// -------- function -------
function volume2kubus(a, b) {
    var volume1 = a * a * a;
    
    var volume2 = b * b * b;
    
    var volumekubus = volume1 + volume2;
    
    return volumekubus;
}

var q = confirm("Apakah anda ingin mencoba rumus Volume 2 kubus ?");

if (q == true) {
    var a = parseInt(prompt("masukan nilai sisi kubus peratama"));
    
    var b = parseInt(prompt("masukan nilai sisi kubus kedua"));
    
    console.log(volume2kubus(a, b));
    
    alert('nilai volume dari kedua kubus adalah ' + volume2kubus(a, b));
}
