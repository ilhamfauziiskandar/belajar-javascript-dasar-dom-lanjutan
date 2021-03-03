//cara membuat fungsi
// keyword function, intepreter javascript bahwa kita akan memulai fungsi
function namafungsi(a, b)
//bungkus function dengan kurung kurawal buka,
//untuk menandakan awal dan akhir sebuah fungsi
{
    //return untuk mengembalikan sebuah nilai lalu diikitu apa yg ingin
    //dikembalikan
    return a;
};

namafungsi(a,b);

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
