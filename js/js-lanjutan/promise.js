// menggunakan vanilla javascript
// let datajson = new XMLHttpRequest();

// datajson.onreadystatechange = function(){
//     if (datajson.status === 200) {
//         if (datajson.readyState === 4) {
//             console.log(JSON.parse(datajson.response));
//         }
//     } else {
//         console.log(datajson.responseText);
//     }
// }

// datajson.open('get', 'http://www.omdbapi.com/?apikey=988a26c1&s=Dilan');
// datajson.send();

// menggunakan fetch
fetch('http://www.omdbapi.com/?apikey=988a26c1&s=Dilan')
    .then(response => response.json())
    .then(response => console.log(response));

// Promise
// Object yang mepresentasikan keberhasilan 
// sebuah event asynchronous di masa yg akan datang
// janji (terpenuhi / tidak)
// states (fulfilled / pending / rejected)
// callback (resolve / finally / reject)
// aksi (then / catch) then bila terpenuhi / catch bila tidak

// contoh 1
let janji = true;
const contoh1 = new Promise((resolve, reject) => {
    if (janji) {
        resolve('janji ditepati');
    }else{
        reject('janji tidak ditepati');
    }
})

contoh1.then(response => console.log('OK! ' + response)).catch(response => console.log('NOT OK! ' + response));

// contoh 2
const contoh2 = new Promise((resolve, reject) => {
    if (janji) {
        setTimeout(() => {
            resolve('janji ditepati')}, 2000
        )
    }else{
        setTimeout(() => {
            reject('janji tidak ditepati')}, 2000
        )
    }
})

console.log("mulai");
contoh2
    .finally(() => console.log('Selesai Menunggu'))
    .then(response => console.log('OK! ' + response))
    .catch(response => console.log('NOT OK! ' + response));
console.log("selesai");

// Promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve(
            [
                {
                    judul: 'Dilan 1990',
                    year: '2016',
                    pemeran: 'ikbal'
                },
                {
                    judul: 'Milea',
                    year: '2018',
                    pemeran: 'vanessa'
                }
            ]
        )
    }, 3000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                tempat: 'Bandung',
                suhu: '26'
            },
            {
                tempat: 'Jakarta',
                suhu: '36'
            },
            {
                tempat: 'Purwakarta',
                suhu: '30'
            }
        ])
    }, 2000);
});

Promise.all([film,cuaca]).then(response => console.log(response));