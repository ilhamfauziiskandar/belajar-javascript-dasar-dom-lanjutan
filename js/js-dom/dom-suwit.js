const suwitAlert = document.querySelector("button.suwitAlert");

suwitAlert.addEventListener("click", function mulaiSuwitAlert(){
    let pilihan = pilihPilihan();

    if (pilihan == undefined) {
        pilihan = pilihPilihan();
    }

    const comp = pilihanComputer();
    
    const hasil = hasilSuwit(pilihan, comp);

    alert(`anda memilih ${pilihan}, computer memilih ${comp}, hasil ${hasil}`);

    let cobaLagi = confirm("coba lagi");

    if (cobaLagi == true) {
        mulaiSuwitAlert();
    }    
})

function pilihPilihan() {
    let pilihanAnda = prompt("Gunting, Kertas, atau Batu");
    
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
    }else{
        alert("anda telah berhenti bermain");
    }
}

function pilihanComputer(){
    let comp = Math.random();
    
    if (comp < 0.34) {
        comp = "gunting";
    }else if (comp >= 0.34 && comp < 0.67){
        comp = "kertas"
    }else{
        comp = "batu"
    }
    return comp;
}

function hasilSuwit(pilihan, comp){
    let hasil;
    
    if (pilihan == comp) {
        hasil = "seri";
    }else if(pilihan == "batu"){
        hasil = ( comp == "gunting") ? "menang" : "kalah";
    }else if(pilihan == "gunting"){
        hasil = ( comp == "kertas") ? "menang" : "kalah";
    }else if(pilihan == "kertas"){
        hasil = ( comp == "batu") ? "menang" : "kalah";
    }
    return hasil;
}
