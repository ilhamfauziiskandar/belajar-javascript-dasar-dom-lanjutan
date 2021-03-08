// inline HTML attribute
const inputNama = document.querySelector("div.container section.inline input");

function rubahWarna() {
    inputNama.style.backgroundColor = "darkRed";
}

function resetWarna() {
    inputNama.style.backgroundColor = "";
}

// Element Method
const jalmaSedeng = document.querySelector("table.daftarJalmaSedeng");

const ubahTabel = document.querySelector("button.ubahTabel");

const resetTabel = document.querySelector("button.resetTabel");

function tableBerubah() {
    jalmaSedeng.style.backgroundColor = "salmon";
    jalmaSedeng.style.color = "darkbrown";
    jalmaSedeng.style.fontFamily = "arial";
}

function tableReset() {
    jalmaSedeng.style.backgroundColor = "";
    jalmaSedeng.style.color = "";
    jalmaSedeng.style.fontFamily = "";
}

ubahTabel.onclick = tableBerubah;

resetTabel.onclick = tableReset; 

// addEventListener()

const clickMe = document.querySelector("button.clickMe");
// mouseenter
clickMe.addEventListener("mouseenter", function() {
    clickMe.style.backgroundColor = "lightblue";
    clickMe.style.color = "white";    
})
// mouseleave
clickMe.addEventListener("mouseleave", function(){
    clickMe.style.backgroundColor = "";
    clickMe.style.color = "";    
})

clickMe.addEventListener("click", function(){
    alert("Hade nyaa");   
})

// onclick and dblClick

const judul = document.querySelector("h1.judul");

const changeFont = document.querySelector("button.changeFont");

changeFont.addEventListener("click", function(){
    judul.style.fontFamily = "Arial";
})

changeFont.addEventListener("dblclick", function(){
    judul.style.fontFamily = "tahoma";
})
