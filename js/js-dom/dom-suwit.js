const suwitAlert = document.querySelector("button.suwitAlert");

const pilihanSuwitJawa = document.querySelectorAll("ul li img");

suwitAlert.addEventListener("click", function mulaiSuwitAlert(){
    let pilihan = pilihPilihan();

    if (pilihan == undefined) {
        pilihan = pilihPilihan();
    }else if(pilihan == false){
        return;
    }

    const comp = getpilihanComputer();
    
    const hasil = hasilSuwit(pilihan, comp);

    alert(`anda memilih ${pilihan}, computer memilih ${comp}, hasil ${hasil}`);

    let cobaLagi = confirm("coba lagi");

    if (cobaLagi == true) {
        mulaiSuwitAlert();
    }    
})

pilihanSuwitJawa.forEach(function(pilihan){
    pilihan.addEventListener("click", function(){
        const pilihanPlayer = pilihan.className;
        
        const pilihanComputer = getpilihanComputerJawa();

        const hasil = hasilSuwitJawa(pilihanPlayer,pilihanComputer);

        const info = document.querySelector("div.info");

        info.innerHTML = "";    

        putarSuwitJawa();
        
        setTimeout(function() {
            const imgComputer = document.querySelector("img.img-komputer");
        
            imgComputer.setAttribute('src', '../img/img/'+ pilihanComputer + '.png');
            
            info.innerHTML = hasil;    
        }, 2000);

        
    })
})

function pilihPilihan() {
    let pilihanAnda = prompt("Gunting, Kertas, atau Batu");
    console.log(pilihanAnda)
    const pilihan =
    {
        gunting: "gunting",
        kertas: "kertas",
        batu: "batu"
    };

    if (pilihanAnda) {
        if (pilihanAnda == pilihan["gunting"]) {
            return pilihanAnda;
        }else if(pilihanAnda == pilihan["batu"]){
            return pilihanAnda;
        }else if(pilihanAnda == pilihan["kertas"]){
            return pilihanAnda;
        }else{
            alert("anda memilih pilhan yang salah");
        }
    }else if (pilihanAnda == "") {
        pilihanAnda = undefined;
        alert("anda memilih pilhan yang salah");
        return pilihanAnda;
    }else{
        pilihanAnda = false;
        alert("anda telah berhenti bermain");
        return pilihanAnda;
    }
}

function getpilihanComputerJawa(){
    let comp = Math.random();
    
    if (comp < 0.34) return "orang";
    if (comp >= 0.34 && comp < 0.67) return "gajah";
    return "semut";
}

function getpilihanComputer(){
    let comp = Math.random();
    
    if (comp < 0.34) return "gunting";
    if (comp >= 0.34 && comp < 0.67) return "kertas";
    return "batu";
}

function hasilSuwit(pilihan, comp){
    
    if (pilihan == comp) return "seri";
    if (pilihan == "batu") return ( comp == "gunting") ? "menang" : "kalah";
    if (pilihan == "gunting") return ( comp == "kertas") ? "menang" : "kalah";
    if (pilihan == "kertas") return( comp == "batu") ? "menang" : "kalah";
    
}

function hasilSuwitJawa(pilihan, comp){
    
    if (pilihan == comp) return "seri";
    if (pilihan == "orang") return ( comp == "semut") ? "menang" : "kalah";
    if (pilihan == "gajah") return ( comp == "orang") ? "menang" : "kalah";
    if (pilihan == "semut") return( comp == "gajah") ? "menang" : "kalah";
    
}

function putarSuwitJawa(){
    const imgComputer = document.querySelector("img.img-komputer");
    const gambar = ['gajah','semut','orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    console.log(waktuMulai);
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 2000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', '../img/img/' + gambar[i++] + '.png');
        if( i == gambar.length) i = 0;
    }, 100)
}