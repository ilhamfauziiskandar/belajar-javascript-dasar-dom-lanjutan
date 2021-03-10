//membuat object

//membuat object literal
var mhs = {
    nama : "ilham fauzi iskandar",
    nrp : "160613031",
    email : "ilhamfauzyiskandar@gmail.com",
    matkul : ["SO", "Semprog", "SI"]
}

//function declaration
function buatobjectmhs(nama, nrp, email, matkul) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp =  nrp;
    mhs.email = email;
    mhs.matkul = matkul;
    return mhs;
}

//cara memanggil function declaration
var mhs1 = buatobjectmhs("gabor", "160613031", "gabor@gmail.com", ["SO", "SEMPROG", "SI"]);

//Constructor
function Mahasiswa(nama, nrp, email, matkul) {
    //Hampir sama dengan declaration
    //Constructor meggunakan this sebagai objectnya
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.matkul = matkul;
    return;
    // return this;
}

//cara memanggil constructor
//constructor harus menggunakan new
var mhs2 = new Mahasiswa("Bolham", "160613031", "bolham@gmail.com", ["SO", "SEMPROG", "SI"]);

//===========LATIHAN MEMBUAT KUIS ==================
//  MENGGUNAKAN CONSTRUCTOR
var kuis = document.querySelector("div.kuis button.btn-kuis");

kuis.addEventListener("click", function(){

    const nama = prompt("masukan nama anda");
    
    const skor = new PertanyaanKuis(nama,0);
    
    alert(skor["nama"] + " Nilai Anda " + skor["skor"]);
});

function PertanyaanKuis(nama,skor) {

    this.nama = nama;
    
    this.skor = skor;
    
    this.skorPertama = function() {
        const pertanyaanPertama = prompt("Nama President Pertama");

        if (pertanyaanPertama == "soekarno") {

            this.skor += 10;

            return this.skor;
        }
    };

    this.skorKedua = function() {
        const pertanyaanPertama = prompt("Nama President Kedua");

        if (pertanyaanPertama == "soeharto") {

            this.skor += 10;

            return this.skor;
        }
    };

    this.skorPertama();
    
    this.skorKedua();

};
