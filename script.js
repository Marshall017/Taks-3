// 3. Events Handler (onClick di HTML)
function tombol() {
  // 1. Membuat Teks ()
  const judul = document.getElementById('judul'); 
  judul.innerHTML = 'Paragraf 1';
}

const judul=document.getElementById('paragraf1');
const teks = document.createTextNode('Pemrograman WEB');
judul.appendChild(teks)


// 2.Menambahkan Element HTML
const elementBaru = document.createElement('div');
elementBaru.innerText = "Pemrograman web salah satu matakuliah di prodi teknik informatika";
elementBaru.className = "description";
var content = document.querySelector('.content');
content.appendChild(elementBaru);