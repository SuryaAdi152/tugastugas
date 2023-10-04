document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mahasiswa-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nama = document.getElementById('nama').value;
        const nim = document.getElementById('nim').value;
        const password = document.getElementById('password').value;
        const jurusan = document.getElementById('jurusan').value;
        const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
        const alamat = document.getElementById('alamat').value;

        // Tambahkan pesan kesalahan untuk kolom yang wajib diisi
        if (!nama || !nim || !password || !jurusan || !jenisKelamin || !alamat) {
            errorMessage.innerHTML = 'Semua kolom harus diisi.';
        } else {
            errorMessage.innerHTML = '';
            const dataMahasiswa = {
                nama: nama,
                nim: nim,
                password: password,
                jurusan: jurusan,
                jenisKelamin: jenisKelamin.value,
                alamat: alamat
            };
            // Lakukan sesuatu dengan data mahasiswa yang valid, misalnya kirim ke server.
            // Di sini Anda dapat menambahkan kode untuk mengirim data atau menangani lebih lanjut.
            console.log('Data mahasiswa yang valid:', dataMahasiswa);
        }
    });
});
