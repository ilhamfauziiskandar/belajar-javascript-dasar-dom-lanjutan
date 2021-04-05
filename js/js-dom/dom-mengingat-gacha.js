const gacha1x = document.querySelector('button.gacha1x');
const gacha10x = document.querySelector('button.gacha10x');
let count = 0;
let kumpulanB5 = [];
let totalB5 = kumpulanB5.length;
gacha1x.addEventListener('click', function(){
    const info = document.querySelector('.info');
    const spanCount = document.querySelector('.count');
    count += 1;
    spanCount.innerHTML = count;
    info.innerHTML = ratesummon();
})

gacha10x.addEventListener('click', function(){
    const info10x = document.querySelector('.info10x');
    const spanCount = document.querySelector('.count');    
    const heros = [];
    
    for (let i = 0; i < 10; i++) {
        const hero = ratesummon();
        heros.push(hero);
        count += 1;
        console.log(count);
    }
    
    spanCount.innerHTML = count;
    info10x.innerHTML = heros
})

function ratesummon(){
    const rate = Math.round(Math.random() * 100 + 1);
    const jumlahB5 = document.querySelector('.b5');
    const heroB5 = document.querySelector('.heroB5');
    if (count >= 30) {
        const hero = b5();
        count = 0;
        kumpulanB5.push(hero);
        heroB5.innerHTML = kumpulanB5;
        jumlahB5.innerHTML = totalB5;
        return hero;
    }

    if (rate < 75) {
        const hero = b3();
        return hero;
    }else if (rate >= 75 && rate <= 95) {
        const hero = b4();
        return hero;
    }else{
        const hero = b5();
        totalB5 += 1;
        kumpulanB5.push(hero);
        heroB5.innerHTML = kumpulanB5;
        jumlahB5.innerHTML = totalB5;
        return hero;
    }
}
function b3(){
    const heroB3 = [
        'Cerberus', 'Pixie','Treant','Devourer','inferno','kinnara'
    ];
    const rate = Math.round(Math.random() * (heroB3.length - 1) + 0);
    
    return heroB3[rate];
}
function b4(){
    const heroB4 = [
        'Grimreaper', 'Siren','Undine','Luna','Ix','Agamemmon','engkong','witch'
    ];
    const rate = Math.round(Math.random() * (heroB4.length  - 1) + 0);

    return heroB4[rate];
}
function b5(){
    const heroB5 = [
        'odin', 'medusa','posseidon','galene','seraphim','phoenix','anubis','gaia'
    ];
    const rate = Math.round(Math.random() * (heroB5.length - 1) + 0);
    
    return heroB5[rate];
}
