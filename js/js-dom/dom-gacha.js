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
        const jumlahSummon = summon.className;
 
        if (jumlahSummon == "gacha1x"){

            totalBuka += 1;

            getCountB5 += 1;

            jumlahBuka.innerHTML = totalBuka;

            const rate = rateGacha();

            if (rate == "rare") {
                const hadiahDapat = heroRare();

                info.innerHTML = hadiahDapat;
            
                console.log(hadiahDapat);
            }

            if (rate == "epic") {
                const hadiahDapat = heroEpic();

                info.innerHTML = hadiahDapat;
            
                console.log(hadiahDapat);
            }

            if (rate == "legendary") {
                const hadiahDapat = heroLegendary(); 

                getCountB5 = 0;
                
                info.innerHTML = hadiahDapat;

                totalB5 += 1;

                b5.innerHTML = totalB5;

                heroB5.push(hadiahDapat);            

                spanHeroB5.innerHTML = heroB5;

                console.log(hadiahDapat);

            }
            
        }

        if (jumlahSummon == "gacha10x"){
            
            hadiahSummon10x = []
  
            for (let i = 0; i < 10; i++) {
                totalBuka += 1;

                getCountB5 += 1;
    
                const rate = rateGacha();
    
                if (rate == "rare") {
                    const hadiahDapat = heroRare();

                    hadiahSummon10x.push(hadiahDapat);
                                    
                    console.log(hadiahDapat);
                }
    
                if (rate == "epic") {
                    const hadiahDapat = heroEpic();
    
                    hadiahSummon10x.push(hadiahDapat);
                
                }
    
                if (rate == "legendary") {
                    const hadiahDapat = heroLegendary(); 
    
                    hadiahSummon10x.push(hadiahDapat);

                    getCountB5 = 0;
        
                    totalB5 += 1;

                    b5.innerHTML = totalB5;

                    heroB5.push(hadiahDapat);            
    
                }
                
                if (getCountB5 >= 30) {
                
                    getCountB5 = 0;
                
                    const hadiahDapat = heroLegendary(); 
        
                    hadiahSummon10x.push(hadiahDapat);
                
                }
            }

            jumlahBuka.innerHTML = totalBuka;

            spanHeroB5.innerHTML = heroB5;

            info10x.innerHTML = hadiahSummon10x;
        }

        if (getCountB5 >= 30) {
            totalBuka += 1;
        
            getCountB5 = 0;
        
            const hadiahDapat = heroLegendary(); 

            heroB5.push(hadiahDapat);            

            spanHeroB5.innerHTML = heroB5;

            info.innerHTML = hadiahDapat;

            console.log(hadiahDapat);

        }
        
    })
    
})

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

function rateGacha() {
    const rate = Math.round(Math.random() * 100 + 0);
    console.log(rate);
    if (rate <= 80) return "rare";
 
    if (rate > 80 && rate <= 95) return "epic";
 
    if (rate > 95 && rate <= 100) return "legendary";
 
}

function heroLegendary() {
    const no = Math.random() * 15;

    if (no <= 7.5) {
        hero = [
            "Medusa", "Galadriel",
            "Ares","Nereid","Pisces","Merlin Muda",
            "Apollo","Vampire","Karzan"
        ];
        
        const hadiah = Math.round(Math.random() * (hero.length - 1) + 0);
        
        return hero[hadiah];
    }

    if (no > 7.5 && no <= 12.5) {
        hero = [
            "Athena", "Odin", "Succubus","Gaiming",
            "Gelene","Posseidon", "Naga Frost", 
            "Seraphim","Balrog","Phoenix",
            "Gaia","Iset",
            "Lucifer","Messa"
        ];    

        const hadiah = Math.round(Math.random() * (hero.length - 1) + 0);
        
        return hero[hadiah];
    }
    
    if (no > 12.5 && no <= 14) {
        hero = [
            "Fenrir","Ratatousk","Synthia","Seshat","Pan","Sphinx",
            "Leviathan","Jormungan","Dion","ilsya","Titan",
            "Prometheus","Valkrie","Heimdall","Archie","Loki","Nezha",
            "Thor","Alleria",
            "Abbadon","Anubis"
        ];    

        const hadiah = Math.round(Math.random() * (hero.length - 1) + 0);

        return hero[hadiah];
    }
 
    if (no > 14 && no <= 15) {   
        hero = [
            "Venus","Oracle","Raphael","Gabriel","Zeus",
            "Hel","Nidhog","Pandora","Darklord","Amon"
        ];    

        const hadiah = Math.round(Math.random() * (hero.length - 1) + 0);


        return hero[hadiah];
    }
    
    
}

function heroEpic() {
    const no = Math.random() * 22.5 + 0 ;

    if (no >= 17) {
        hero = [
            "Bard","Grim","Tyr","Gandalf","Satyr",
            "Arthur","Siren","Tethys","Mage Salju","Undine",
            "Ix","Catherine","Agamemnon","Renault","Harpy"
        ];
        
        const hadiah = Math.round(Math.random() * (hero.length - 1) + 0);

        return hero[hadiah];
    }else{
        hero = [
            "Theia","Luna","Legolas","Eros",
            "Witch Racun","Xerxes","Achilles","Doom"
        ];

        const hadiah = Math.round(Math.random() * (hero.length - 1) + 0);

        return hero[hadiah];
    }
}

function heroRare() {
    hero = [
        "Lycan","Viking","Hellfire","Dwarf Guard","Otto",
        "Hecate","Idron","Sorceress","Madea","Destroyer",
        "Golem","Griffin","Ranger","Kinnara","Treant",
        "Sur","Azazel"
    ];

    const hadiah = Math.round(Math.random() * (hero.length - 1) + 0);

    return hero[hadiah];
}
