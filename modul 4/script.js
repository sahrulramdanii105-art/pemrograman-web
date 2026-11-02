
/* Alert selamat datang */
window.onload = function() {
    alert("Selamat datang di Blog Teknologi!");
};

/* Validasi form kontak */
document.getElementById("formKontak")
.addEventListener("submit", function(event) {

    // Mencegah halaman refresh
    event.preventDefault();

    // Mengambil nilai input
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    // Memeriksa form
    if (nama === "" || email === "" || pesan === "") {
        alert("Semua kolom harus diisi!");
    } else {
        alert("Pesan berhasil dikirim!");

        // Mengosongkan form
        document.getElementById("formKontak").reset();
    }
});
