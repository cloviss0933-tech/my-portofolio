// Fungsi untuk mengubah warna teks secara otomatis setiap 1 detik (1000 milidetik)
setInterval(function () {
    const pesan = document.getElementById('pesan');
    
    // Pastikan teks pesannya muncul
    pesan.innerText = 'Teks ini berubah warna otomatis secara berkala!';

    // Mengubah warna teks menjadi acak
    const warnaAcak = '#' + Math.floor(Math.random() * 16777215).toString(16);
    pesan.style.color = warnaAcak;
    pesan.style.fontWeight = 'bold';
    pesan.style.fontSize = '20px';
}, 1000); // Angka 1000 artinya 1 detik. Kamu bisa ganti (misal 500 untuk setengah detik)

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