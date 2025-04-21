// Mendapatkan semua tombol dan menambahkan event listener
const movieButtons = document.querySelectorAll('.btn-primary');

movieButtons.forEach(button => {
    button.addEventListener('click', () => {
        const movieId = button.getAttribute('data-id');

        // Mengambil data film dari API
        fetch(https//api.themoviedb.org/3/movie/${movieId}?api_key=your_api_key);
            .then(response => response.json())
            .then(movieDetails => {
                // Memperbarui modal dengan detail film
                document.getElementById('movieModal-title').textContent = movieDetails.title;
                document.getElementById('movieModal-poster').src = https//image.tmdb.org/t/p/w500${movieDetails.poster_path};
                document.getElementById('movieModal-overview').textContent = movieDetails.overview;
                document.getElementById('movieModal-release-date').textContent = movieDetails.release_date;
                document.getElementById('movieModal-vote-average').textContent = movieDetails.vote_average;
                document.getElementById('movieModal-vote-count').textContent = movieDetails.vote_count;
            })
       
        
    });
});
