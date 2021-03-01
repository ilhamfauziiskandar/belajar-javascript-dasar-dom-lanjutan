// (a,b) adalah parameter
function tambah(a,b){

    return a + b;

}

//tambah(1,2) adalah argumen
var coba = tambah(1,2);

function data(){
    return arguments;
}

var coba = data(1,2,3,4,5, false, "goblok");
console.log(coba);
