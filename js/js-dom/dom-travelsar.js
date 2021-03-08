// travelsar
const isiForm = document.querySelector("table.formNama tbody");

const tambah = document.querySelector("button.tambahData");

var hapus = document.querySelectorAll(".hapus");

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

    tr.appendChild(td);

    isiForm.appendChild(tr);
    
    apaweh();
});

hapus.forEach(function(wi){
    wi.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    });
});

// for (let i = 0; i < hapus.length; i++) {
//     hapus[i].addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//     });    
// };