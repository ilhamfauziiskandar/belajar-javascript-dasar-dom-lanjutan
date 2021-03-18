// HTML fragments
const mhs = {
    nama: 'Ilham Fauzi Iskandar',
    umur: 23,
    nrp: '160613031',
    email: 'ilhamfauzyskandar@gmail.com'
};

const el = `<h4>${mhs.nama}</h4><span class="nrp">${mhs.umur}</span>`;

const cetak = document.querySelector('div.cetak');

cetak.innerHTML = el;

// looping
const siswa = [
// array of object
    {
        nama: 'ilham fauzi iskandar',
        email: 'ilham@gmail.com'
    },
    {
        nama: 'Gabor',
        email: 'gabor@gmail.com'
    }
];

const al = `${siswa.map(s =>`<ul><li>${s.nama}</li><li>${s.email}</li></ul>`).join('')}`;

const cetak1 = document.querySelector('div.cetak1');

cetak1.innerHTML = al;

// conditional
// ternary
const lagu = [
    {
        judul: 'Medicine',
        penyanyi: 'BMTH',
        featuring: 'Gabor'
    },
    {
        judul: 'In The dark',
        penyanyi: 'BMTH'
    }
];

const le = `${lagu.map(l =>`<ul><li>${l.judul}</li><li>${l.penyanyi} ${l.featuring ?`(feat.${l.featuring})` : ''}</li></ul>`)}`;

const cetak2 = document.querySelector('div.cetak2');

cetak2.innerHTML = le;

// nested
// HTML fragments bersarang
const kartuMhs = {
    nama: 'ilham fauzi iskandar',
    semester: '2',
    mataKuliah: [
        'SI',
        'Seminar Program',
        'SO',
        'Struktur Data'
    ]
};

const kl = `<h4>${kartuMhs.nama}</h4><span>Semester : ${kartuMhs.semester}</span>
<h4>Mata Kuliah :</h4><ul>${kartuMhs.mataKuliah.map(mk => `<li>${mk}</li>`).join('')}</ul>`;

const cetak3 = document.querySelector('div.cetak3');

cetak3.innerHTML = kl;

// tagged template literals

const penduduk = {
    nama: 'ilham fauzi iskandar',
    umur: 23
};

function tester(str, ...isi) {
    // ...isi mengembalikan array yang isinya 
    // semua expression yng ada di template literals
    let result = '';

    str.forEach((str, i) => {
        result += `${str}${isi[i] || ''}`;
    });
    return result;
};

const test =  tester`halo nama saya ${penduduk.nama}, saya ${penduduk.umur} tahun`;
console.log(test);


// menggunakan reduce pada tagged template literals
const penduduk1 = {
    nama: 'Gabor',
    umur: 23
};

function tested(str, ...isi) {
    return str.reduce((result, str, i) => `${result}${str}${isi[i] || ''}`, '');
};

const test1 =  tested`halo nama saya ${penduduk1.nama}, saya ${penduduk1.umur} tahun`;
console.log(test1);

// highlight

const penduduk2 = {
    nama: 'Gabor',
    umur: 23
};

function testedd(str, ...isi) {
    return str.reduce((result, str, i) => `${result}${str}<span class="highlight">${isi[i] || ''}</span>`, '');
};

const test2 =  testedd`halo nama saya ${penduduk2.nama}, saya ${penduduk2.umur} tahun`;

const hightlight = document.querySelector("div.high");

hightlight.innerHTML = test2;