const gacha = document.querySelectorAll("div.area-komputer p.gacha button");

const reset = document.querySelector("button.reset");

const info = document.querySelector("div.info");

const jumlahBuka = document.querySelector("span.count");

const legendary = document.querySelector("span.legendary");

const spanHeroB5 = document.querySelector("span.heroB5");

const b5 = document.querySelector("span.b5");    

const info10x = document.querySelector("div.info10x");
  
let totalLegendary = 0;

let totalBuka = 0;

let totalB5 = 0;

let getCountB5 = 0;

let heroB5 = [];

gacha.forEach(function(summon){
    summon.addEventListener("click", function() {
        const jumlahBuka = document.querySelector("span.count");
 
        const jumlahSummon = summon.className;
 
        if (jumlahSummon == "gacha1x"){

            totalBuka += 1;

            getCountB5 += 1;

            jumlahBuka.innerHTML = totalBuka;

            const no = Math.random() * 100;

            const rate = rateGacha(no);

            const hadiah = hadiahGacha(rate);
            
            info.innerHTML = hadiah;
            console.log(no);
        }

        if (jumlahSummon == "gacha10x"){
            
            hadiahSummon10x = []
  
            for (let i = 0; i < 10; i++) {
                totalBuka += 1;
 
                getCountB5 += 1; 
                
                if (getCountB5 >= 30) {
                    const no = Math.random() * 2 + 98;
        
                    const rate = rateGacha(no);
            
                    const hadiah = hadiahGacha(rate);        
        
                    hadiahSummon10x.push(hadiah);
                    console.log(no);
        
                    getCountB5 = 0;

                }else{
                    const no = Math.random() * 100;

                    const rate = rateGacha(no);
        
                    const hadiah = hadiahGacha(rate);        
                    console.log(no);
                    hadiahSummon10x.push(hadiah);
    
                }
            }
            
            jumlahBuka.innerHTML = totalBuka;

            info10x.innerHTML = hadiahSummon10x;
        }

        if (getCountB5 >= 30) {
            totalBuka += 1;
        
            getCountB5 = 0;
        
            const no = Math.random() * 2 + 98;
            console.log(no);
            const rate = rateGacha(no);
    
            const hadiah = hadiahGacha(rate);        

            info.innerHTML = hadiah;

        }
        
    })
    
})

function rateGacha(rate) {
    
    if (rate < 70) return "rare";
 
    if (rate >= 70 && rate < 98) return "epic";
 
    if (rate >= 98 && rate < 99.68) return "legendary";
 
    if (rate >= 99.68) return "ancient";
}

function hadiahGacha(rate){
    
    if (rate == "rare") {
        const hadiah = ["invoker", "chimera"];

        const noHadiah = Math.round(Math.random() * (hadiah.length - 1) + 0);
        
        return hadiah[noHadiah];
    }else if (rate == "epic") {
        const hadiah = ["grim", "cathaline", "Engkong", "bard", "inferno", "siren", "undine", "agemamon", "satyr", "lucifer", "luna"];

        const noHadiah = Math.round(Math.random() * (hadiah.length - 1) + 0);
        
        return hadiah[noHadiah];
    }else if (rate == "legendary"){
        const hadiah = ["posseidon", "galene", "ares", "odin","succubus", "athena", "medusa", "vampire", "karzan", "apollo","phoenix","gaia","iset","aleria","anubis","messa"];
        
        const noHadiah = Math.round(Math.random() * (hadiah.length - 1) + 0);
        
        totalB5 += 1;
        
        b5.innerHTML = totalB5;
        
        heroB5.push(hadiah[noHadiah]);

        spanHeroB5.innerHTML = heroB5;

        return hadiah[noHadiah];
    }else if (rate == "ancient"){
        const hadiah = [
            "ilsya","titan","dion","leviathan","jormungan",
            "sphinx","sythia","pan","ratatousk","seshat","fenrir",
            "nezha","heimdall","valk","prometheus","balrog","archie",
            "venus","thor","hera","zeus","oracle","raphael","gabriel",
            "hel","darklord","nidhog","abbadon","Uriel","support dark"
        ];
        
        const noHadiah = Math.round(Math.random() * (hadiah.length - 1) + 0);
        
        totalLegendary += 1;

        totalB5 += 1;
        
        legendary.innerHTML = totalLegendary;   
     
        heroB5.push(hadiah[noHadiah]);
     
        b5.innerHTML = totalB5;

        spanHeroB5.innerHTML = heroB5;

        return hadiah[noHadiah];
    }
}

reset.addEventListener("click", function() {
  
  totalBuka = 0;
  
  totalLegendary = 0;

  getCountB5 = 0;

  totalB5 = 0;
  
  heroB5 = [];
  
  jumlahBuka.innerHTML = 0;

  info.innerHTML = "";
  
  legendary.innerHTML = totalLegendary;

  spanHeroB5.innerHTML = "";
  
  b5.innerHTML = 0;

  info10x.innerHTML = "";
})