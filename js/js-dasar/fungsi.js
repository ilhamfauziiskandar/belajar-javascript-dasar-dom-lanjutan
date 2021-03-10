//cara membuat fungsi
// // keyword function, intepreter javascript bahwa kita akan memulai fungsi
// function namafungsi(a, b)
// //bungkus function dengan kurung kurawal buka,
// //untuk menandakan awal dan akhir sebuah fungsi
// {
//     //return untuk mengembalikan sebuah nilai lalu diikitu apa yg ingin
//     //dikembalikan
//     return a;
// };

// namafungsi(a,b);

// -------- function -------
function volume2kubus(a, b) {
    var volume1 = a * a * a;
    
    var volume2 = b * b * b;
    
    var volumekubus = volume1 + volume2;
    
    return volumekubus;
}

var q = confirm("Apakah anda ingin mencoba rumus Volume 2 kubus ?");

if (q == true) {
    var a = parseInt(prompt("masukan nilai sisi kubus pertama"));
    
    var b = parseInt(prompt("masukan nilai sisi kubus kedua"));
    
    console.log(volume2kubus(a, b));
    
    alert('nilai volume dari kedua kubus adalah ' + volume2kubus(a, b));
}

// PENGGUNAAN RETURN PADA FUNCTION
const case1 = document.querySelector("div.case1 button.case1");

case1.addEventListener("click", function() {
    const angkaPertama = parseInt(prompt("masukan angka"));
    
    const angkaKedua = parseInt(prompt("masukan angka"));
    

    if (angkaPertama && angkaKedua) {
    
        const hasilTambah = function(angkaPertama, angkaKedua) {
            const hasil = angkaPertama + angkaKedua;
    
            return hasil;
        }

        const hasil = hasilTambah(angkaPertama,angkaKedua);
        
        alert(hasil);
    
    }else{
        
        alert("anda tidak mengisi dengan benar");
    
    }
    
});

// =============LATIHAN MEMBUAT KUIS================
// MENGGUNAKAN FUNCTION EXPRESSION DAN DECLARATION
const kuis = document.querySelector("div.kuis section.section-kuis button.btn-kuis");

kuis.addEventListener("click", function(){
    const namaPesertaKuis = prompt("masukan nama anda");

    const skorPeserta = 0;
    
    if (namaPesertaKuis) {
        alert(namaPesertaKuis + " nilai anda " + quiz(skorPeserta));        
    }
});

function quiz(skorPeserta) {
    
    const soalPertama = function(){
        var pertanyaanPertama = prompt("ibu kota Indonesia adalah");
        
        if (pertanyaanPertama) {
            if (pertanyaanPertama == "jakarta") {
                skorPeserta += 10;
                return skorPeserta;
            }else{
                return skorPeserta;
            }

        }else{
            return skorPeserta;
        }


    };
    
    const soalKedua = function(){
        var pertanyaankedua = parseInt(prompt("1 + 1 ="));
        
        if (pertanyaankedua) {
            if (pertanyaankedua == 2) {
                skorPeserta += 10;
                return skorPeserta;

            }else{
                return skorPeserta;
            }    
        }else{
            return skorPeserta;
        }        
        
    };
    
    soalPertama();
    
    soalKedua();

    return skorPeserta;
    
}
