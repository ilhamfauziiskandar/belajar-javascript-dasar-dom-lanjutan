const exercise = document.querySelector("div.exercise button.btn-exercise");

exercise.addEventListener("click", function(){
    const siswa = parseInt(prompt("Total Mahasiswa"));
    
    if (siswa) {
        new TotalSiswa(siswa);
    
    }else{
        alert("maaf inputan harus angka");
    }
});

function TotalSiswa(siswa) {  
    this.siswa = siswa;
    this.Nilaiakhir = 
    [
        
    ];
    

    // for (let i = 0; i < this.siswa; i++) {
    //     for (let a = 0; a < 2; a++) {
    //         this.Nilaiakhir[i][a] = prompt("masukan nama siswa");
    //         this.Nilaiakhir[i][a] = parseInt(prompt("masukan nilai siswa"));
    //     }
    // }

    console.log(this.Nilaiakhir);
};

const mhs = { 
    nama: ["ilham","fauzi", "iskandar"],
    kelas: ["3SI", "3IF", "3KA"],
};

console.log(mhs["nama"][0], mhs["kelas"][0]);

