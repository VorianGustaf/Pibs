function tampilconten(bagian){
    const conten = document.getElementById('section'); 
    let tampil ='';
    switch (bagian){
        case 'biodata':
            tampil =`<h2>Biodata</h2> <br>
            <p>Nim:2021081014</p> 
            <br>
            <p>Nama:Vorian gustaf</p>
            <br>
            <p>Agama:Kristen</p>
            <br>
            <P>Tanggal Lahir:30 April</P>
            <br>
            <p>Tempat Lahir:Jakarta</p>` 
            break;
            case 'pendidikan':
            tampil =`<h2>pendidikan</h2>
            <br>
            <p>lulusan SD Katolik Ricci 2  2012  </p>
            <br>
            <p>lulusan SMP Katolik Ricci 2 2017 </p>
            <br>
            <p>lulusan SMA Katolik Ricci 2 2019 </p>
            <br>
            <p>Universitas Pembagunan Jaya 2021 - sekarang</p>` 
            break;
            case 'Keahlian':
            tampil =`<h2>Kehalian</h2>
            <br>
            <p>Bisa Mengunakan Adobe Primer Pro (video editing)</p>
            <br>
            <p> HTML,CSS,JavaScrip</p>
            <p></p>` 
            break;
            case 'publikasi':
            tampil =`<h2>Publikasi</h2>
            <br>
            <p>GitHUB</p>
            <p></p>
            <p></p>` 
            break;
    }
    conten.innerHTML = tampil;
    };