//this
//maka isinya adalah object global
console.log(this);

//window sama dengan this
console.log(window === this);

var a = 10;

//setiap kita membuat variable di scope global 
//properti atau method dari object window
//karna object window sama dengn object this
console.log(this.a);
console.log(window.a);

//cara 1 - function declaration
function halo(){
    console.log(this);
    console.log('halo');
}
this.halo();
//this mengembalikan obj global

//cara 2 - object literal
var obj = {a : 2, nama : 'ilhamfauziiskandar'};
obj.halo = function(){
    console.log(this);
    console.log('halo');
}
obj.halo();
//this mengembalikan obj yang bersangkutan

//cara 3 - constructor
function Halo(){
    console.log(this);
    console.log('halo');
}
new Halo();
//this mengembalikan obj yg baru dibuat
