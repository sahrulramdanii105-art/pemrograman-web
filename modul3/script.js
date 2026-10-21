
const form = document.getElementById("formMahasiswa");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.querySelectorAll(".error").forEach(function(el) {
        el.textContent = "";
    });

    document.querySelectorAll(
        "input:not([type=radio]):not([type=checkbox]), select, textarea"
    ).forEach(function(el) {
        el.classList.remove("invalid");
    });

    document.getElementById("berhasil").textContent = "";

    let valid = true;

    function cekInput(id, errorId, pesan) {
        const input = document.getElementById(id);

        if (input.value.trim() === "") {
            input.classList.add("invalid");
            document.getElementById(errorId).textContent = pesan;
            valid = false;
        }
    }

    cekInput("nama", "errorNama", "Nama lengkap tidak boleh kosong.");
    cekInput("nim", "errorNim", "NIM tidak boleh kosong.");
    cekInput("email", "errorEmail", "Email tidak boleh kosong.");
    cekInput("jurusan", "errorJurusan", "Silakan pilih jurusan.");
    cekInput("alamat", "errorAlamat", "Alamat tidak boleh kosong.");

    const email = document.getElementById("email");

    if (email.value.trim() !== "" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add("invalid");
        document.getElementById("errorEmail").textContent =
            "Format email tidak valid.";
        valid = false;
    }

    if (!document.querySelector('input[name="gender"]:checked')) {
        document.getElementById("errorGender").textContent =
            "Silakan pilih jenis kelamin.";
        valid = false;
    }

    if (!document.querySelector('input[name="hobi"]:checked')) {
        document.getElementById("errorHobi").textContent =
            "Pilih minimal satu hobi.";
        valid = false;
    }

    if (valid) {
        document.getElementById("berhasil").textContent =
            "Data berhasil dikirim. Terima kasih!";

        form.reset();
    }
});
