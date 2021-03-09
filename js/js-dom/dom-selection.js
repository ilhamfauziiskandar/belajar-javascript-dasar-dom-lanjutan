// DOM selection
// document.getElementById() -> elemet
const judul = document.getElementById('judul');

judul.style.color = 'red';

judul.style.backgroundColor = "gray";

judul.innerHTML = "Get Element By ID";

// document.getElementsByTagName() -> HTML Collection
const p = document.getElementsByTagName('p');

p[4].style.color = "lightblue";

for (let i = 1; i < 4; i++) {
    p[i].style.color = "darkred";
}

const p1 = document.getElementsByTagName('p')[1];

p1.style.color = "orange";

// document.getElementByClassName() -> HTML Collection

const a = document.getElementsByClassName('a');

for (let i = 0; i < a.length; i++) {
    a[i].style.color = "black";
    a[i].style.fontWeight = "bold";
}

const a3 = document.getElementsByClassName('a')[2];

a3.style.color = "orange";
a3.style.fontWeight = "none";

// document.querySelector() -> element
const p5 = document.querySelector('.a p');

p5.style.fontSize = "40px";

const li2 = document.querySelector('.a ul li:nth-child(2)');

li2.style.color = "green";

// document.querySelectorAll() -> nodelist

const qs = document.querySelectorAll('.b li');

qs[0].style.color = "lightgreen";

for (let i = 1; i < qs.length; i++) {
    qs[i].style.color = "brown";
}

// ===============LATIHAN=================

const formPengisian = document.getElementById("form-pengisian");

const input = document.getElementsByTagName("input");

const latihan = document.getElementsByClassName("latihan");

const td = document.querySelector("div#tabel-anggota table tbody tr td:nth-child(2)");

const tr = document.querySelectorAll("div#tabel-anggota table tbody tr");

formPengisian.style.display = "";

for (let i = 0; i < input.length; i++) {
    
    input[i].style.backgroundColor = "salmon";
    input[i].style.color = "brown";
    input[i].style.fontFamily = "arial";
    
}

for (let i = 0; i < latihan.length; i++) {
    
    latihan[0].style.backgroundColor= "orange";
    
}

td.style.backgroundColor = "salmon";

for (let i = 0; i < tr.length; i++) {
    tr[i].style.backgroundColor = "brown";
    tr[i].style.color = "lightpink";
}