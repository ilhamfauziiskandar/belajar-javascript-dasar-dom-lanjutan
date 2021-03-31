// synch
const coba = cobaJanji();
coba.then(() => console.log(coba)).catch(() => console.log(coba));

// asynch await
function cobaJanji() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        }else{
            reject('kelamaan');
        }
    });
}

async function cobaAsynch(){
    // untuk menangkap datanya
    // gunakan try n catch
    // untuk asynch await 
    try{
        const coba = await cobaJanji();
        console.log(coba);
    }catch(err){
        console.error(err);
    }
}

cobaAsynch();