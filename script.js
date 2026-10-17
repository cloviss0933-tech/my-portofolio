// 1. Fungsi Tombol Interaktif (Click Me!)
document.getElementById('btnClick').addEventListener('click', function () {
    const pesan = document.getElementById('pesan');
    pesan.innerText = 'Teks ini warnanya berubah secara acak!';
    
    const warnaAcak = '#' + Math.floor(Math.random() * 16777215).toString(16);
    pesan.style.color = warnaAcak;
    pesan.style.fontWeight = 'bold';
    pesan.style.fontSize = '20px';
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

// --- FUNGSI FORM KONTAK ---
function kirimPesan(event) {
    event.preventDefault(); // Mencegah halaman mereload otomatis

    // Mengambil nilai input dari form
    const nama = document.getElementById('nama').value;
    const notif = document.getElementById('notifPesan');

    // Menampilkan pesan sukses interaktif
    notif.style.color = '#28a745';
    notif.innerText = `Terima kasih, ${nama}! Pesanmu berhasil dikirim.`;

    // Mengosongkan kembali form setelah dikirim
    document.getElementById('formKontak').reset();
}