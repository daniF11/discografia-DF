let album = document.querySelectorAll('.img-album');

let album1 = document.getElementById('album1');
let album2 = document.getElementById('album2');
let album3 = document.getElementById('album3');
let album4 = document.getElementById('album4');
let album5 = document.getElementById('album5');
let album6 = document.getElementById('album6');
let album7 = document.getElementById('album7');
let album8 = document.getElementById('album8');
let album9 = document.getElementById('album9');

album1.addEventListener('click', ()=>{
	function abrirNuevoTab(url) {
        // Abrir nuevo tab
        let win = window.open(url, '_blank');
        // Cambiar el foco al nuevo tab (punto opcional)
        win.focus();
    }
    abrirNuevoTab('C:/Users/DANI/Desktop/PTZ/Git/albums/votd.html')
});

album2.addEventListener('click', ()=>{
	function abrirNuevoTab(url) {
        // Abrir nuevo tab
        let win = window.open(url, '_blank');
        // Cambiar el foco al nuevo tab (punto opcional)
        win.focus();
    }
    abrirNuevoTab('C:/Users/DANI/Desktop/PTZ/Git/albums/sf.html')
});

album3.addEventListener('click', ()=>{
	function abrirNuevoTab(url) {
        // Abrir nuevo tab
        let win = window.open(url, '_blank');
        // Cambiar el foco al nuevo tab (punto opcional)
        win.focus();
    }
    abrirNuevoTab('C:/Users/DANI/Desktop/PTZ/Git/albums/ir.html')
});



