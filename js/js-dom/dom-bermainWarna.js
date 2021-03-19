const divBody = document.querySelectorAll("div.box");

const btnAcakAngka = document.getElementById("btnAcakAngka");

const body1 = document.querySelector("body");

const btnAcakRGB = document.getElementById("btnAcakRGB");

const slideMerah = document.querySelector('input[name="sliderMerah"]');

const slideBiru = document.querySelector('input[name="sliderBiru"]');

const slideHijau = document.querySelector('input[name="sliderHijau"]');

btnAcakAngka.addEventListener('click', function() {
    
    const pAcakAngka = document.querySelectorAll("p.acakWarna");

    const spanAngkaKehokian = document.querySelectorAll("span.angkaKehokian")
    
    if (pAcakAngka.length < 1) {
        const pBaru = document.createElement("p");
    
        pBaru.classList.add("acakWarna");
    
        const angkaAcak = Math.round(Math.random() * 100);
    
        const pTextBaru = document.createTextNode(angkaAcak); 
    
        pBaru.appendChild(pTextBaru);
    
        divBody[0].appendChild(pBaru);

        let kehokianAnda = kehokian(angkaAcak);

        const spanBaru = document.createElement("span");
        
        const textSpan = document.createTextNode(kehokianAnda);
        
        spanBaru.classList.add("angkaKehokian")
        
        spanBaru.appendChild(textSpan);

        divBody[0].appendChild(spanBaru);
    }else{
        const pBaru = document.createElement("p");
    
        pBaru.classList.add("acakWarna");
    
        const angkaAcak = Math.round(Math.random() * 100);
    
        const pTextBaru = document.createTextNode(angkaAcak); 
    
        pBaru.appendChild(pTextBaru);
    
        divBody[0].replaceChild(pBaru, pAcakAngka[0]);

        let kehokianAnda = kehokian(angkaAcak);
        
        const spanBaru = document.createElement("span");
        
        const textSpan = document.createTextNode(kehokianAnda);

        spanBaru.classList.add("angkaKehokian")
        
        spanBaru.appendChild(textSpan);

        divBody[0].replaceChild(spanBaru, spanAngkaKehokian[0]);
    }

});

btnAcakRGB.addEventListener("click", function(){
    const red = Math.round(Math.random() * 255);

    const green = Math.round(Math.random() * 255);
    
    const blue = Math.round(Math.random() * 255);
    
    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
})

slideMerah.addEventListener("change", function(){
    const red = slideMerah.value;

    const blue = slideBiru.value;

    const green = slideHijau.value;

    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';

    const pWarnaMerah = document.querySelector("p.merah");
    
    pWarnaMerah.innerHTML = red;
})

slideBiru.addEventListener("change", function(){
    const red = slideMerah.value;

    const blue = slideBiru.value;

    const green = slideHijau.value;

    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
    
    const pWarnaBiru = document.querySelector("p.biru");
    
    pWarnaBiru.innerHTML = blue;
})

slideHijau.addEventListener("change", function(){
    const green = slideHijau.value;

    const red = slideMerah.value;

    const blue = slideBiru.value;

    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';

    const pWarnaHijau = document.querySelector("p.hijau");
    
    pWarnaHijau.innerHTML = green;
})

function kehokian(angkaHoki) {
  
    if (angkaHoki <=30) {
    
        angkaHoki = "kurang hoki";
    
    }else if(angkaHoki >= 30 && angkaHoki <= 74){
    
        angkaHoki = "b aja";
    
    }else if(angkaHoki >= 75){
    
        angkaHoki = "hoki ajg"; 
    
    }

    return angkaHoki;
}