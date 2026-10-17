// 1. Fungsi Tombol Interaktif
let intervalWarna; // Variabel penampung interval

document.getElementById('btnClick').addEventListener('click', function () {
    const pesan = document.getElementById('pesan');
    pesan.innerText = 'haha gotchu :p';
    pesan.style.fontWeight = 'bold';
    pesan.style.fontSize = '20px';

    // Mencegah interval jalan dobel kalau tombol diklik berkali-kali
    clearInterval(intervalWarna);

    // Otomatis ubah warna tiap 0.5 detik SETELAH diklik
    intervalWarna = setInterval(function () {
        const warnaAcak = '#' + Math.floor(Math.random() * 16777215).toString(16);
        pesan.style.color = warnaAcak;
    }, 500); 
});

// 2. Fungsi Tombol Dark Mode (Berdiri Sendiri)
const btnDarkMode = document.getElementById('btnDarkMode');

btnDarkMode.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        btnDarkMode.innerText = '☀️ Light Mode';
    } else {
        btnDarkMode.innerText = '🌙 Dark Mode';
    }
});