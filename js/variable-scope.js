//global scope artinya variable yang bisa dimanapun didalam program kita
var a = 1; 

//funtion scope artinya variable apapun yang kita buat 
//didalam funtion scope hanya berlaku di dalam fungsi ini saja
function tester() {
    var b = 2;
}

tester();

//akan berhasil
//dikarenakan kita menjalan console variable b di dalam function 
function tester1() {
    var c = 2;
    console.log(c);
}

tester1();

//akan berhasil dikarenakan kita menjalankan variable global
//yang artinya kita dapat mengakses variable dimanapun program kita
function tester2() {
    console.log(a);
}

tester2();

//akan terjadi name conflict
//sehingga menimpa variable yang sama maka akan di ambil yang paling bawah
function tester3() { 
    var a = 2;
    console.log(a);
    //kecuali kita menggunakan window
    console.log(window.a);
}
tester3();

//hasilnya adalah 4
//karena pada saat kita menjalankan fungsi, mengirimkan parameter angka 4
//jadi angka 4 akan masuk argumen a
//sehingga variable global a sama sekali tidak di pakai 
//note "argumen akan selalu menjadi local variable"
function tester4(a) {
    console.log(a);
}
tester4(4);
console.log(a);

//hasilnya adalah 1
//karena kita mengirimkan variable global a ke argumen
function tester5(a){
    console.log(a);
}
tester5(a);

//akan terjadi error
//dikarenakan variable b hanya bisa digunakan di dalam function saja
console.log(b);
