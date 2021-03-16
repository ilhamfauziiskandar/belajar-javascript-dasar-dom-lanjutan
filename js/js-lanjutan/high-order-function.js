const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const newAngka = []

// for mencari angka lebih dari sama dengan 3
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        newAngka.push(angka[i]);
    }
}

// filter dengan arrowfucn
const filterAngka = angka.filter(a => a >= 3);
console.log(filterAngka);

// map dengan arrowfunc
const mapAngka = angka.map(a => a * 2);
console.log(mapAngka);

// reduce
const reduceAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(reduceAngka);

// method chaining
const hasil = angka.filter(a => a >= 5).map(a => a * 3).reduce((acc, cur) => acc + cur);
console.log(hasil);

// latihan

const ambilSemuaVideo = Array.from(document.querySelectorAll("[data-duration]"));

let videoAneh = ambilSemuaVideo.filter(ambilSemuaVideo => ambilSemuaVideo.textContent.includes("?")).map(item => item.dataset.duration).map(waktu => {
    const parts = waktu.split(":").map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
}).reduce((total, detik) => total + detik);

const jam = Math.floor(videoAneh / 3600);

videoAneh = videoAneh - jam * 3600;

const menit = Math.floor(videoAneh / 60);

const detik = videoAneh - menit * 60;

const totalDurasi = document.querySelector("span.total-durasi");

totalDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlhVideo = document.querySelector("span.jumlah-video");

jmlhVideo.textContent = `${ambilSemuaVideo.length} videos`;
// contoh
console.log("bacot malik");