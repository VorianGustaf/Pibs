function tampilconten(bagian){
const conten = document.getElementById('content');
let tampil ='';
switch (bagian){
    case 'biodata':
        tampil ='<h2>Biodata</h2> <p>Nama= Vorian gustaf</p> '
        break;
}
conten.innerHTML = tampil;
};