function openModal(movieId) {
    let descriptionText = "";

    switch(movieId) {
        case 'movie1':
            descriptionText = `
                <strong>Judul :</strong> Movie 1<br>
                <strong>Tanggal Rilis:</strong> 2024-03-01<br>
                <strong>Vote Rata-rata:</strong> 7.0<br>
                <strong>Vote Count:</strong> 150<br>
            `;
            break;
        case 'movie2':
            descriptionText = `
                <strong>Judul:</strong> Movie 2<br>
                <strong>Tanggal Rilis:</strong> 2024-04-15<br>
                <strong>Vote Rata-rata:</strong> 8.5<br>
                <strong>Vote Count:</strong> 200<br>
            `;
            break;
        case 'movie3':
            descriptionText = `
                <strong>Judul:</strong> Movie 3<br>
                <strong>Tanggal Rilis:</strong> 2024-05-20<br>
                <strong>Vote Rata-rata:</strong> 6.5<br>
                <strong>Vote Count:</strong> 125<br>
            `;
            break;
        case 'movie4':
            descriptionText = `
                <strong>Judul:</strong> Movie 4<br>
                <strong>Tanggal Rilis:</strong> 2024-06-10<br>
                <strong>Vote Rata-rata:</strong> 8.0<br>
                <strong>Vote Count:</strong> 300<br>
            `;
            break;
        case 'movie5':
            descriptionText = `
                <strong>Judul:</strong> Movie 5<br>
                <strong>Tanggal Rilis:</strong> 2024-07-22<br>
                <strong>Vote Rata-rata:</strong> 7.8<br>
                <strong>Vote Count:</strong> 180<br>
            `;
            break;
        case 'movie6':
            descriptionText = `
                <strong>Judul:</strong> Movie 6<br>
                <strong>Tanggal Rilis:</strong> 2024-08-14<br>
                <strong>Vote Rata-rata:</strong> 7.2<br>
                <strong>Vote Count:</strong> 90<br>
            `;
            break;
        default:
            descriptionText = "Deskripsi film tidak tersedia.";
    }

    document.getElementById("modal-description").innerHTML = descriptionText;
    document.getElementById("modal-image").src = `images/${movieId}.jpeg`; // Make sure to set the correct image path
    document.getElementById("modal").style.display = "block"; // Show the modal
}