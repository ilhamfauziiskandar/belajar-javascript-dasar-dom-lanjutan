// implisit return
const namaTampil = nama => `halo, ${nama}`;

console.log('ilham fauzi iskandar');

// without parameter
const tampilNama = () => `Hellow`;

console.log(tampilNama());

// contoh lain dalam bentuk array

let mahasiswa = ['ilham fauzi iskandar', 'gabor'];

let jumlahHuruf = mahasiswa.map(function (nama){
    return nama.length;
});

console.log(jumlahHuruf);

// diringkas dengan arrow function menjadi

let hurufJumlah = mahasiswa.map(nama => nama.length);

console.log(hurufJumlah);

// contoh lain dalam bentuk object

let jmlhHuruf = mahasiswa.map(nama => ({ nama, totalHuruf: nama.length }));
console.table(jmlhHuruf);
