function showContent(topic) {
    let content = '';

    switch (topic) {
        case 'pendahuluan':
            content = `
                <h2>Pendahuluan</h2>
                <p>Kesetaraan gender dalam Islam adalah prinsip yang menekankan bahwa laki-laki dan perempuan memiliki hak dan kewajiban yang sama di hadapan Allah. Dalam Islam, perempuan dihormati dan diberikan hak-hak yang setara dengan laki-laki.</p>
            `;
            break;
        case 'hak-perempuan':
            content = `
                <h2>Hak Perempuan dalam Islam</h2>
                <p>Islam memberikan hak-hak yang sama kepada perempuan, termasuk hak untuk pendidikan, hak untuk bekerja, dan hak untuk memiliki harta.</p>
            `;
            break;
        case 'peran-perempuan':
            content = `
                <h2>Peran Perempuan dalam Keluarga</h2>
                <p>Perempuan memiliki peran penting dalam keluarga dan masyarakat, sebagai pendidik generasi penerus dan pengelola rumah tangga.</p>
            `;
            break;
        case 'kesetaraan-ibadah':
            content = `
                <h2>Kesetaraan dalam Ibadah</h2>
                <p>Dalam ibadah, laki-laki dan perempuan memiliki kedudukan yang sama di hadapan Allah. Keduanya memiliki kewajiban untuk melaksanakan ibadah dengan cara yang sama.</p>
            `;
            break;
        default:
            content = '<h2>404 Not Found</h2><p>Konten tidak ditemukan.</p>';
    }

    // Mengganti konten utama dengan konten yang dipilih
    document.querySelector('main').innerHTML = content + '<button onclick="goBack()">Kembali</button>';
}

function goBack() {
    // Mengembalikan ke tampilan utama
    location.reload();
}