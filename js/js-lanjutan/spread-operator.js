// Spread Operator
// memecah iterables menjadi single element
const mahasiswa = ['ilham', 'fauzi', 'iskandar'];

console.log(mahasiswa);
console.log(...mahasiswa);

// menggabungkan 2 array
const mhs = ["ilham","fauzi", "iskandar"];
const orang = ["gabor"];

const mhsOrang = [...mhs, 'panggilan' ,...orang]
console.log(mhsOrang);

// meng-copy array
const nama = ["ilham", "fauzi", "iskandar"];

const nama1 = [...nama];
nama1[0] = 'gabor';
// tidak berubah referencenya
console.log(nama);
// berubah copy-an nya
console.log(nama1);

// mengambil isi dari li
const linama = document.querySelectorAll("ul li ul li");
const namaLi = [...linama].map(m => m.textContent);
console.log(namaLi);

// 
const pNama = document.querySelector("p.namas");
const huruf = [...pNama.textContent].map(h => `<span>${h}</span>`).join('');
pNama.innerHTML = huruf;
console.log(huruf)