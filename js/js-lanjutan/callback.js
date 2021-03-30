const dataMhs = document.querySelector("table.daftar-mahasiswa tbody.data-mahasiswa");

// Synchronous Callback
const mhs = [
    {
        nama: "ilham",
        kelas: "3IF",
        jenisKelamin: "Pria"
    },
    {
        nama: "fauzi",
        kelas: "3SI",
        jenisKelamin: "Pria"
    },
    {
        nama: "iskandar",
        kelas: "4IF",
        jenisKelamin: "Pria"
    }
];

console.log("mulai");
mhs.forEach(m => {
    for (let i = 0; i < 1000000; i++) {
        let date = new Date();
        
    }
    console.log(m.nama)
});
console.log("selesai");

// Asynchronous Callback

function getDataMhs(url, success, error) {
    let datajson = new XMLHttpRequest();
    
    datajson.onreadystatechange = function(){
        if (datajson.readyState === 4) {
            if (datajson.status === 200) {
                success(datajson.response);
            } else if(datajson.status === 404){
                error();
            }
        }
    }
    
    datajson.open('get', url);
    datajson.send();
}

console.log("mulai");

getDataMhs('../json/mahasiswa.json', success => {
    const mhs = JSON.parse(success);
    console.log(mhs);
    mhs.forEach(m => {
        dataMhs.innerHTML = td(m);
    });
}, () => {});

console.log("selesai");

// JQuery
console.log("mulai");

$.ajax({
    url: '../json/mahasiswa.json',
    success: (a) =>{
        a.forEach(a => console.log(a.email));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})

console.log("selesai");

function td(mhs) {
    return  `
    <tr>
    <td>${mhs.nama}</td>
    <td>${mhs.kelas}</td>
    <td>${mhs.jenisKelamin}</td>
    <td>${mhs.email}</td>
    </tr>
    `;
}