// travelsar
const isiForm = document.querySelector("table.formNama tbody");

const tambah = document.querySelector("button.tambahData");

const hapus = document.querySelectorAll(".hapus");

function apaweh() {
    hapus = document.querySelectorAll(".hapus");
    console.log(hapus);
    return hapus;
}

tambah.addEventListener('click', function() {

    const tr = document.createElement("tr");

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
    });
});
