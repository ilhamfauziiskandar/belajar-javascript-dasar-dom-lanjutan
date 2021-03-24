// Rest Parameter
function myFunc(a, b , ...sisa) {
   return `a = ${a}, b = ${b}, sisanya : ${sisa}`; 
}

console.log(myFunc(1,2,3,4,5));

// rest parameter harus di akhir dari formal parameter
function myFunct(...myArgs) {
    return myArgs;
}

console.log(myFunct(1,2,3,4,5));

// menggunakan argument
function myFuncti() {
    // return Array.from(arguments);
    // return [...arguments];
}

console.log(myFuncti(1,2,3,4,5));

// contoh lain
function myFunctio(...angka) {
    return angka.reduce((a, b) => a + b);
} 
console.log(myFunctio(1,2,3,4,5));

// array destructuring
const kelompok = ["gabor","ilham","bolham","fauzi","iskandar"];
const [ketua, wakil , ...anggota] = kelompok;
console.log(anggota);

// object Destructuring
const team = {
    pm: "gabor",
    frontend1: "ilham",
    frontend2: "fauzi",
    backend: "bolham",
    ux: "iskandar"
}

const { pm ,...myteam} = team;
console.log(myteam);

// contoh lain
// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean',1,2,"ilham",false,10,true,"gabor"));