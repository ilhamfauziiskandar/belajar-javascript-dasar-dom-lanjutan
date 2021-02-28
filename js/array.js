//----- key & value pair -----

//cara membuat array ada 2 cara
var hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];

//or

var hari = [];

hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

//maka yg keluar adalah sabtu
console.log(hari[5]);

//array itu bertipe object
console.log(typeof(hari));

//array memiliki method lenght
console.log(hari.length);

//element pada array boleh beda tipe
var arrayku = ['ilham', 6281908674297, true];

console.log(arrayku);

//contoh lain array bisa menggunakan function
var jeniskelamin = function() {
    alert('Jenis Kelamin Anda');
};

var arrayku1 = ['ilham', 6281908674297, true, jeniskelamin];

console.log(arrayku1);

//array didalam array (multidimensi)
var arrayku2 = ['ilham', 6281908674297, true, jeniskelamin, [1,2,3,4,5]];

console.log(arrayku2[4][2]);