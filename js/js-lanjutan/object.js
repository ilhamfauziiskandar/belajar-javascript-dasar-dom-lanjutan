// object literal

// let mahasiswa = {
//     nama: 'ilham fauzi iskandar',
//     stamina: 0,
//     food: function(makan) {
//         this.food = this.stamina + makan;
//         console.log(`you has ate ${makan} and you gained `+ this.stamina + ` stamina`)
//     }
// }

// function declaration

// function Mahasiswa(nama, stamina) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.stamina = stamina;
    
//     mahasiswa.eat = function(food) {
//         if (food) {
//             this.stamina += 10;        
//             console.log(`you has ate ${food}, you gained 10 stamina. your current stamina is ${this.stamina}`);
//         }
//     }
    
//     mahasiswa.dungeon = function(raid){
//         if (raid) {
//             if (this.stamina > raid * 5) {
//                 this.stamina -= (raid * 5);
//                 console.log(`you have raid ${raid} times, the stamina has been reduce ${raid * 5} stamina`);    
//             }else{
//                 console.log(`your current stamina is ${this.stamina} make sure you have enough stamina for dungeon. or eat something to get more stamina`);
//             }
//         }
//     }

//     mahasiswa.infostamina = function() {
//         console.log(`your current stamina is ${this.stamina}`)
//     }

//     return mahasiswa;

// }

// let isi1 = Mahasiswa("ilham fauzi iskandar", 0);

// constructor function

// function Mahasiswa(nama, stamina) {
//     this.nama = nama;
//     this.stamina = stamina;
    
//     this.eat = function(food) {
//         if (food) {
//             this.stamina += 10;        
//             console.log(`you has ate ${food}, you gained 10 stamina. your current stamina is ${this.stamina}`);
//         }
//     }
    
//     this.dungeon = function(raid){
//         if (raid) {
//             if (this.stamina > raid * 5) {
//                 this.stamina -= (raid * 5);
//                 console.log(`you have raid ${raid} times, the stamina has been reduce ${raid * 5} stamina`);    
//             }else{
//                 console.log(`your current stamina is ${this.stamina} make sure you have enough stamina for dungeon. or eat something to get more stamina`);
//             }
//         }
//     }

//     this.infostamina = function() {
//         console.log(`your current stamina is ${this.stamina}`)
//     }

// }

// let isi1 = new Mahasiswa("ilham fauzi iskandar", 0);


// object.create

// cara 1 tidak menggunakan object.create()
// const methodMahasiswa = {
    
//     eat: function(food) {
//         if (food) {
//             this.stamina += 10;        
//             console.log(`you has ate ${food}, you gained 10 stamina. your current stamina is ${this.stamina}`);
//         }
//     },
    
//     dungeon: function(raid){
//         if (raid) {
//             if (this.stamina >= raid * 5) {
//                 this.stamina -= (raid * 5);
//                 console.log(`you have raid ${raid} times, the stamina has been reduce ${raid * 5} stamina`);    
//             }else{
//                 console.log(`your current stamina is ${this.stamina} make sure you have enough stamina for dungeon. or eat something to get more stamina`);
//             }
//         }
//     },

//     infostamina: function() {
//         console.log(`your current stamina is ${this.stamina}`)
//     },

//     sleep: function(){
//         this.stamina += 25;
//         console.log(`your gained 25 stamina. your current stamina is ${this.stamina}`)

//     }

// }

// function Mahasiswa(nama, stamina){
//     let mahasiswa= {};
    
//     mahasiswa.nama = nama;
//     mahasiswa.stamina = stamina;
//     mahasiswa.eat = methodMahasiswa.eat;
//     mahasiswa.dungeon = methodMahasiswa.dungeon;
//     mahasiswa.sleep = methodMahasiswa.sleep;
//     return mahasiswa;
// }

// let isi1 = new Mahasiswa("ilham fauzi iskandar", 0);

// cara 2 menggunakan object.create()

const methodMahasiswa = {
    
    eat: function(food) {
        if (food) {
            this.stamina += 10;        
            console.log(`you has ate ${food}, you gained 10 stamina. your current stamina is ${this.stamina}`);
        }
    },
    
    dungeon: function(raid){
        if (raid) {
            if (this.stamina >= raid * 5) {
                this.stamina -= (raid * 5);
                console.log(`you have raid ${raid} times, the stamina has been reduce ${raid * 5} stamina`);    
            }else{
                console.log(`your current stamina is ${this.stamina} make sure you have enough stamina for dungeon. or eat something to get more stamina`);
            }
        }
    },

    infostamina: function() {
        console.log(`your current stamina is ${this.stamina}`)
    },

    sleep: function(){
        this.stamina += 25;
        console.log(`your gained 25 stamina. your current stamina is ${this.stamina}`)

    }

}

function Mahasiswa(nama, stamina){
    let mahasiswa= Object.create(methodMahasiswa);
    
    mahasiswa.nama = nama;
    mahasiswa.stamina = stamina;

    return mahasiswa;
}

let isi1 = new Mahasiswa("ilham fauzi iskandar", 0);
