const divBody = document.querySelectorAll("div.box");

const btnAcakAngka = document.getElementById("btnAcakAngka");

const body1 = document.querySelector("body");

const btnAcakRGB = document.getElementById("btnAcakRGB");

const slideMerah = document.querySelector('input[name="sliderMerah"]');

const slideBiru = document.querySelector('input[name="sliderBiru"]');

const slideHijau = document.querySelector('input[name="sliderHijau"]');

const inputanMerah = document.querySelector('input[name="inputanMerah"]');

const inputanBiru = document.querySelector('input[name="inputanBiru"]');

const inputanHijau = document.querySelector('input[name="inputanHijau"]');

btnAcakAngka.addEventListener('click', function() {
    
    const pAcakAngka = document.querySelectorAll("p.acakWarna");

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
        const pAcak = document.querySelector('p.acakWarna');
        
        const spanKehokian = document.querySelector('span.angkaKehokian');

        const angkaAcak = Math.round(Math.random() * 100);

        pAcak.innerHTML = angkaAcak;

        let kehokianAnda = kehokian(angkaAcak);

        spanKehokian.innerHTML = kehokianAnda;
    }

});

btnAcakRGB.addEventListener("click", function(){
    const red = Math.round(Math.random() * 255);

    const green = Math.round(Math.random() * 255);
    
    const blue = Math.round(Math.random() * 255);
    
    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';

    inputanMerah.value = red;

    inputanBiru.value = blue;

    inputanHijau.value = green;

    slideMerah.value = red;

    slideBiru.value = blue;
    
    slideHijau.value = green;
})

slideMerah.addEventListener("change", function(){
    const red = slideMerah.value;

    const blue = slideBiru.value;

    const green = slideHijau.value;

    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';

    inputanMerah.value = red;
})

slideBiru.addEventListener("change", function(){
    const red = slideMerah.value;

    const blue = slideBiru.value;

    const green = slideHijau.value;

    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
    
    inputanBiru.value = blue;

})

slideHijau.addEventListener("change", function(){
    const green = slideHijau.value;

    const red = slideMerah.value;

    const blue = slideBiru.value;

    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';

    inputanHijau.value = green;
})

inputanMerah.addEventListener("change", function(){
    const red = inputanMerah.value;
    
    const blue = inputanBiru.value;
    
    const green = inputanHijau.value;

    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';

    slideMerah.value = red;

})

inputanBiru.addEventListener("change", function(){
    const red = inputanMerah.value;
    
    const blue = inputanBiru.value;
    
    const green = inputanHijau.value;

    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';

    slideBiru.value = blue;

})

inputanHijau.addEventListener("change", function(){
    const red = inputanMerah.value;
    
    const blue = inputanBiru.value;
    
    const green = inputanHijau.value;

    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';

    slideHijau.value = green;

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