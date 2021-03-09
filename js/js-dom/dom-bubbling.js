// travelsar
const isiForm = document.querySelector("table.formNama tbody");

const tambah = document.querySelector("button.tambahData");

const hapus = document.querySelectorAll(".hapus");

const barTable = document.querySelectorAll(".barTable");

function apaweh() {
    hapus = document.querySelectorAll(".hapus");
    console.log(hapus);
    return hapus;
}

tambah.addEventListener('click', function() {

    const tr = document.createElement("tr");

    tr.classList.add("barTable");

    const td = document.createElement("td");

    const btn = document.createElement("button");

    btn.classList.add("hapus");

    const textBtn = document.createTextNode("Hapus");
    
    btn.appendChild(textBtn);

    td.appendChild(btn);

    const td1 = document.createElement("td");

    const textTd = document.createTextNode("Nama");

    td1.appendChild(textTd);

    tr.appendChild(td1);

    tr.appendChild(td);

    isiForm.appendChild(tr);
    
    apaweh();
});

hapus.forEach(function(wi){
    wi.addEventListener('click', function(e){
        e.target.parentElement.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    });
});

barTable.forEach(function(bt){
    bt.addEventListener('click', function(e){
        alert("ok");
    })
})

// =================================================================

// konsep event bubbling
const container = document.querySelector(".container");

container.addEventListener('click', function(e){
    console.log(e.target);

    if (e.target.className == 'tambahData1') {
        const isiForm1 = document.querySelector("table.formNama1 tbody");

        const tr = document.createElement("tr");

        tr.classList.add("barTable1");
    
        const td = document.createElement("td");
    
        const btn = document.createElement("button");
    
        btn.classList.add("hapus1");
    
        const textBtn = document.createTextNode("Hapus");
        
        btn.appendChild(textBtn);
    
        td.appendChild(btn);
    
        const td1 = document.createElement("td");
    
        const textTd = document.createTextNode("Nama");
    
        td1.appendChild(textTd);
    
        tr.appendChild(td1);
    
        tr.appendChild(td);
    
        isiForm1.appendChild(tr);   
        
    }

    if (e.target.className == 'hapus1') {
        e.target.parentElement.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    }

    if (e.target.className == 'barTable1') {
        alert('OK');
    }



})