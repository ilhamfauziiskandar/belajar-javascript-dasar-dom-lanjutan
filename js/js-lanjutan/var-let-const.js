// var
// harusnya error karna tidak mungkin memanggil i 
// karna javascript menganut function scope
for (var i = 0; i < 3; i++) {
    console.log(i);
};
// console.log(i);

// var menggunakan function scope
function tes() {
    for (var ii = 0; ii < 3; ii++) {
        console.log(ii);    
    }    
};

tes();
// console.log(ii); akan error tapi memang seharusnya begini

// membuat function tanpa variable tetapi dapat langsung dijalankan
(function() {
   for(var j = 0; j < 3; j++){
       console.log(j);
   };
}());

// console.log(j); akan error karna tidak dapat mengakses dari luar
// karna ini merupakan function scope
// tapi ini cara lama

// cukup menggunakan let
// menjadi block scope
for (let j = 0; j < 3; j++) {
    console.log(j);
};

// console.log(j); akan error

// let
// penggunaan let bila variablenya akan di ubah ubah
let j = 10;
j = 15;
console.log(j);

// bahkan ada yg bilang gunakan let
// hanya ketika membuat for saja
for (let l = 0; l < 2; l++) {
    // jika menggunakan const maka tidak bisa dijalankan
    console.log(l);
}

// const /constant
// pengunaan const bila variablenya tidak akan diubah lagi
const k = 10;
// k = 15; akan error karna konst tidak dapat diubah
console.log(k); 

// kenapa harus const
// untuk meminimalisir perubahan state

// tidak sepenuhnya tidak bisa di ubah
// tapi dengan cara lain
const o = {
    nama: "ilham",
    umur: 23
};
// tidak akan error karna kita hanya merubah isi dari object
o.umur = 21;

console.log(o.umur);

// akan error karna kita mengganti object baru
// o = {
//     jenisKelamin: "pria"
// };