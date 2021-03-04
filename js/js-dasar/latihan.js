var penumpang = ["gabor", undefined, "ilham"];

console.log(penumpang);

function tambahPenumpang(namaPenumpang, penumpang){

    if (penumpang.length == 0) {
      
        penumpang.push(namaPenumpang);
    
        return penumpang;    
    }
    else{
        for (i = 0; i < penumpang.length; i++) {

            if (penumpang[i] == undefined) {
            
                penumpang[i] = namaPenumpang;
            
                return penumpang;
            
            }
            
            else if(penumpang[i] == namaPenumpang){
            
                console.log("penumpang sudah ada di angkot");
            
                return penumpang;
            
            }

            else if (i == penumpang.length - 1){
                
                penumpang.push(namaPenumpang);
                
                return penumpang;
           
            }
        }
    }
    
}

function hapusPenumpang(namaPenumpang, penumpang) {
    
    return penumpang;
}