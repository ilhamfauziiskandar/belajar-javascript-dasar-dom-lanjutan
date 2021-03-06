function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, Bayar){
        if (this.penumpang.length === 0) {
            alert("angkot kosong");
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += Bayar;
                
                return this.penumpang;
            }
            
        }
    }
}

var angkot1 = new Angkot('Ilham Fauzi Iskandar', ['Cicaheum', 'Cibiru'], [], 0);

var angkot2 = new Angkot('Gabor', ['Antapani', 'Ciroyom'], [], 0);
