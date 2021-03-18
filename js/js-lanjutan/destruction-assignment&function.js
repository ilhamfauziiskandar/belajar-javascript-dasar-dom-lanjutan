// Detruction Variable / Assignment

// Destructuring Array

const sapa = ["Halo", "nama", "saya", "ilham"];
// skipping items
const [salam, , , ngaran] = sapa;

// swap items
let a = 1;
let b = 2;

[a, b] = [b, a];

// return value pada function

function coba(){
    return [1, 2];
}

const [c1, c2] = coba();
console.log(c2);

// Rest Parameter
const [d, ...dIsi] = [1,2,3,4,5]; 
console.log(dIsi);

// Destructuring Object

const mhs = {
    nama: "ilham fauzi iskandar",
    umur: 23
}
// jika object variable harus sesuai dengan nama objectnya
const {nama, umur} = mhs;
console.log(nama);

// Assignment tanpa deklarasi object
({ngaranLengkap, umurAyeuna} = {
    ngaranLengkap: "ilham fauzi iskandar",
    umurAyeuna: 23    
});

console.log(ngaranLengkap);

// jika object variable ingin nama nya tidak harus seusai
// dengan nama objectnya
const mhs1 = {
    nama: "ilham fauzi iskandar",
    umur: 23
}
// tambahkan namaObject: namaBaru
const {nama: n, umur:u} = mhs1;
console.log(n + u);

// memberikan default value
const mhs2 = {
    namaMhs2: "ilham fauzi iskandar",
    umurMhs2: 23
}

const {namaMhs2, umurMhs2, emailMhs2 = 'Email@default.com'} = mhs2;
console.log(namaMhs2 +' '+umurMhs2+' '+emailMhs2);

// mengambil field pada object, 
// setelah dikirim sebagai parameter untuk function
const mhs3 = {
    idMhs3: 160,
    namaMhs3: "ilham fauzi iskandar",
    umurMhs3: 23
}

function getIdMhs3({ idMhs3 }) {  
    return idMhs3;
}

console.log(getIdMhs3(mhs3));   

// Destruction Function

function penjumlahanPerkalian(a, b){
    return [a + b, a - b, a * b, a / b] ;
}

// urutannya harus bener gaboleh ketuker
const [jumlah, kurang, kali, bagi] = penjumlahanPerkalian(2,5);

console.log(jumlah);

//cara agar urutannya tidak berpengaruh
function kalkulasi(a, b){
    return {
        bah: a + b,
        rang: a - b,
        li: a * b,
        gi: a / b
    };
}

const {bah, li, gi, rang} = penjumlahanPerkalian(2,5);

// Detructuting fucntion argument

const mhs4 = {
    namaMhs4: "ilham fauzi iskandar",
    kelasMhs4: "4IF",
    nrpMhs4: 160613031,
    nilaiMhs4: {
        uts: 40,
        uas: 20,
        tugas: 50
    }
}

function cetakMhs4({namaMhs4, kelasMhs4, nrpMhs4, nilaiMhs4:{uts,uas,tugas}}){
    return `Halo ${namaMhs4}, Nrp : ${nrpMhs4}, UTS : ${uts}, UAS : ${uas}, Tugas : ${tugas}`;
}

console.log(cetakMhs4(mhs4));