// inner HTML
const test = document.getElementById("innerhtml");

test.innerHTML = '<i>Inner HTML</i>';

const test1 = document.getElementById("innerhtml1");

test1.innerHTML = 'Edan';

// element.style.<propertyCSS>

const test2 = document.getElementsByClassName("elementstyle");

test2[0].style.backgroundColor = "salmon";

for (let i = 0; i < test2.length; i++) {
    
    test2[i].style.color = "darkred";
    
}

// element.setAttribute()

const test3 = document.getElementsByTagName("input");

test3[0].setAttribute("placeholder", "isi disini");

// element.getAttribute()

// test3[1].getAttribute("placeholder", "isi disini")

// element.removeAttribute()

test3[2].removeAttribute("disabled");

// classlist()
const test4 = document.querySelectorAll(".classlist li");

for (let i = 0; i < test4.length; i++) {
    test4[i].classList.add("label", "li");
}

test4[0].classList.remove("label");

test4[3].classList.toggle("labl");

// document.createElement()
const pBaru = document.createElement('p');

// document.createTextNode()
const textPBaru = document.createTextNode('paragraf baru');

// appendChild()
pBaru.appendChild(textPBaru);

const sectionA = document.querySelector("#container-1 #section-a .p3");

sectionA.appendChild(pBaru);

// insertBefore()
const liBaru = document.createElement('li');

const textLiBaru = document.createTextNode("P baru");

liBaru.appendChild(textLiBaru);

const ul = document.querySelector('div#container-4 section#section-a ul');

const li1 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li1);

// removeChild()
const sectionB = document.querySelector('div#container-5 section#section-a p.p-2');

const a = sectionB.querySelector('a');

sectionB.removeChild(a);

// replaceChild()
const h1Baru = document.createElement('h1');

const textH1Baru = document.createTextNode("Dirubah");

h1Baru.appendChild(textH1Baru);

const sectionC = document.querySelector('div#container-6 section#section-a');

const pLama = sectionC.querySelectorAll('p');

sectionC.replaceChild(h1Baru, pLama[0]);
