// for of
// Array
const mhs = ["ilham", "fauzi","iskandar"];

for( const m of mhs){
    console.log(m);
}

for (const [i, m] of mhs.entries()){
    console.log(`${m} adalah mahasiswa ke - ${i + 1}`);
}

// String
const nama = "Ilham";

for (const n of nama){
    console.log(n);
}

// Nodelist
const liNama = document.querySelectorAll("li.nama");

for (li of liNama){
    console.log(li.innerHTML);
}

// Arguments
function jumlahAngka() {
    let jumlah = 0;
    
    for(a of arguments){
        jumlah += a;
    }
    
    return jumlah;
}

console.log(jumlahAngka(1,2,3,4,5));

// For In
// Property dari object

const mahasiswa = {
    nama: "ilham",
    umur: 33,
    email: "ilhamfauziiskandar@gmail.com"
}

for (m in mahasiswa) {
    // console.log(m);
    // untuk mengambil valuenya saja
    console.log(mahasiswa[m]);
}