var penumpang = ["gabor", undefined, "ilham"];
var batas= 15;

console.log(penumpang);

function tambahPenumpang(namaPenumpang){
    
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

            else if (i == penumpang.length - 1 && i < batas){
                
                penumpang.push(namaPenumpang);

                return penumpang;
           
            }else if (i == batas -1){
 
                console.log("pinuh lahh");
 
                return penumpang;
            }
        }
    }
    
}

function hapusPenumpang(namaPenumpang) {
    
    return penumpang;
}