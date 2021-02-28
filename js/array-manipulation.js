// // menampilkan isi array
// var hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

// for (i = 0; i < hari.length; i++) {
//     console.log('Hari ke ' + (i+1) + ': ' + hari[i])
// }

//method array
//join "merubah isi array menjadi string dan menampilkan isi array dengan koma"
var hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

console.log(hari.join());

//bila ingin merubah pemisah arraynya menjadi "-"
console.log(hari.join('-'));

//method array
//push "menambahkan element array di akhir index dalam sebuah array"
hari.push('hari mencuci');
//or
hari.push("hari kejepit nasional", "hariwang")
console.log(hari.join());

//method array
//pop "menghilangkan element terakhir pada sebuah array"
hari.pop();
hari.pop();
console.log(hari.join());

//method array
//unshift "menambahkan elemet array di awal index pada sebuah array"
hari.unshift("hariwang");
console.log(hari.join());

//method array
//shift "menghilangkan element pertama pada sebuah array"
hari.shift();
console.log(hari.join());
