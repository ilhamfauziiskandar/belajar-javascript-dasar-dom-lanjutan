// membuat prototype
function Mahasiswa(nama, stamina) {
    this.nama = nama;
    this.stamina = stamina;

}

Mahasiswa.prototype.eat = function(food) {
    switch (food) {
        case "cilok":
            this.stamina += 5;            
            break;
        case "daging":
            this.stamina += 10;            
            break;
        default:
            break;
    }

    console.log(`anda telah memakan ${food} , stamina bertambah 5`);
}

Mahasiswa.prototype.dungeon = function(raid) {
    if (this.stamina >= raid * 10) {
        this.stamina -= raid * 10;
        console.log(`anda telah memasuki dungeon ${raid} kali, stamina berkurang 5`);        
    }else{
        console.log(`stamina anda tidak mencukupi untuk melakukan dungeon`);
    }
}

Mahasiswa.prototype.rest = function(){
    this.stamina += 10;
    console.log(`setelah beristirahat anda mendapatkan stamina sebanyak 10`);
}

let ilham = new Mahasiswa("ilham fauzi iskandar", 0);

// versi class
// class Mahasiswa {
//     constructor(nama, stamina){
//         this.nama = nama;
//         this.stamina = stamina;
//     }
    
//     eat(food) {
//         switch (food) {
//             case "cilok":
//                 this.stamina += 5;            
//                 console.log(`anda telah memakan ${food} , stamina bertambah 5`);
//                 break;
//             case "daging":
//                 this.stamina += 10;            
//                 console.log(`anda telah memakan ${food} , stamina bertambah 5`);
//                 break;
//             default:
//                 console.log(`makanan tidak diketahui`);
//                 break;
//         }
    
//     }
    
//     dungeon(raid) {
//         if (this.stamina >= raid * 10) {
//             this.stamina -= raid * 10;
//             console.log(`anda telah memasuki dungeon ${raid} kali, stamina berkurang 5`);        
//         }else{
//             console.log(`stamina anda tidak mencukupi untuk melakukan dungeon`);
//         }
//     }
    
//     rest(){
//         this.stamina += 10;
//         console.log(`setelah beristirahat anda mendapatkan stamina sebanyak 10`);
//     }
    
// }

// let gabor = new Mahasiswa("gabor", 0);