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

//method array
//Splice "menyambung atau menyisipkan sebuah element pada sebuah array"
//splice(indexawal, maudihapusberapa, elementbaru1, element baru2, ..)
hari.splice(7, 1, 'Harpitnas');
console.log(hari.join());

//method array
//forEach 
hari.forEach(function(e) {
    console.log(e);
})

//method array
//forEach menggunakan index
hari.forEach(function(e, i) {
    console.log('Hari ke-' + (i+1) + 'adalah : ' + e);
})

//method array
//map "sama seperti forEach tetapi map mengembalikan array sedangkan
//forEach tidak"
var hari2 = hari.map(function(e) {
    return "hari " + e;   
});

console.log(hari2.join(","));

//method array
//Sort "mengurutkan isi array"
hari.sort();
console.log(hari.join(","));

//method array
//Sort "mengurutkan isi array"
var hari3 = [1,2,6,9,12,29,30,15,79]
hari3.sort(function(a,b){
    return a-b;
});

console.log(hari3.join(","));

//method array
//Filter "mencari nilai pada array dan mengembalikannya dalam bentuk array"
var hari4 = hari.filter(function(x){
    return x == "Jumat"
});

console.log(hari4);

//method array
//Filter angka "mencari nilai pada array dan mengembalikannya dalam bentuk array"
var hari5 = hari3.filter(function(x){
    return x < 10
});

console.log(hari5);

//method array
//Find "mencari 1 nilai pada array"
var hari5 = hari3.find(function(x){
    return x <= 29
});

console.log(hari5);
