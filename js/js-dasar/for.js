// Cara penulisan
// for ( var nilaiAwal = 1; nilaiAwal < 10/nilai akhir ; nilaiAwal++ ){

//     console.log("Hello World");

// }

for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++){
    console.log('Hello World' + nilaiAwal + 'x');
}

var jmlAngkot = 10,
    angkotBeroperasi = 6,
    noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik !');

    noAngkot++;
}

for( noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan buruk !');
}
