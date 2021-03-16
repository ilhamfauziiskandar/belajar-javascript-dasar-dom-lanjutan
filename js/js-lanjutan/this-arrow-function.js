// konsep this arrow function

// Constructor Function

// const Mahasiswa = function(){
//     this.nama = 'ilham fauzi iskandar';
//     this.umur = 23;
//     this.tampil = function() {
//         console.log(`Hallo Saya ${this.nama}, saya berumur ${this.umur}`);
//     }
// }

// const tampilMahasiswa = new Mahasiswa();

// arrow function

const Mahasiswa = function(){
    this.nama = 'ilham fauzi iskandar';
    this.umur = 23;
    this.tampil = () => {
        console.log(`Hallo Saya ${this.nama}, saya berumur ${this.umur}`);
    }
    setInterval(() => {
        console.log(this.umur++);
    },10000);
}

const tampilMahasiswa = new Mahasiswa();

// contoh lain
const box = document.querySelector(".box");

box.addEventListener('click', function(){
    let satu = "size";
    let dua = "caption";

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    };
    
    this.classList.toggle("size");

    setTimeout(() => {
        this.classList.toggle("caption");
    }, 600);
});