//contoh fungsi declaration
function Pesan(nama) { 
    alert('halo ' + nama);
}

Pesan("ilham");

//contoh fungsi expression
var nama = function (nama){
    alert('halo ' + nama);
}

nama('ilham');


//akan error
//karna fungsi expression harus selalu ditulis dulu definisinya baru di panggil
nama1('ilham');

var nama1 = function(nama1){
    alert('halo ' + nama1)
}