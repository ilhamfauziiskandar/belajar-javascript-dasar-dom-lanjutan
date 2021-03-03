function rekursif(n) {
    //base case adalah kondisi akhir dari rekursif yg menghasilkan nilai
    //supaya rekursifnya berhenti
    if (n === 0) {
        return;
    }

    console.log(n);
    rekursif(n-1);
}

rekursif(10);

//pengunaan rekursif pada kasus faktorial
function faktorial(n) {
    if (n === 0) return 1; 
        
    return n * faktorial(n-1);
}

//maka hasilnya 120
faktorial(5)