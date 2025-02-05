// script.js
window.addEventListener('load', function () {
    // Simulasikan loading selama 2 detik (opsional)
    setTimeout(function () {
        // Sembunyikan loading screen
        document.getElementById('loading-screen').style.display = 'none';
        // Tampilkan konten utama
        document.getElementById('content').style.display = 'block';
    }, 2000); // Ubah 2000 menjadi 0 jika tidak ingin simulasi loading
});