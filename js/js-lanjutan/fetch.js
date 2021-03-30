// fetch
const btnSearch = document.querySelector('button.search-button');

btnSearch.addEventListener('click', function(){
    const inputSearch = document.querySelector('input.search-input');
    
    fetch('http://www.omdbapi.com/?apikey=988a26c1&s=' + inputSearch.value)
    .then(response => response.json())
    .then(response => {
        const movies = response.Search;
        let cards = '';
        movies.forEach(m => cards += showMovies(m));
        const hasilSearch = document.querySelector('div.hasil-cari');
        hasilSearch.innerHTML = cards;

        const btnDetailMovie = document.querySelectorAll('.modal-detail-button');
        btnDetailMovie.forEach(btn => {
            btn.addEventListener('click', function(){
                console.log(this);
                const imdb = this.dataset.idmovie;
                console.log(imdb);           
                fetch('http://www.omdbapi.com/?apikey=988a26c1&i=' + imdb)
                .then(response => response.json())
                .then(response => {
                    const modalBody = document.querySelector('.modal-body');
                    const detailMovie = showmd(response)
                    modalBody.innerHTML = detailMovie;
                })
            })
        })
    });
})

function showmd(md) {
    return `<div class="row">
    <div class="col-md 3">
        <img src="${md.Poster}" alt="" class="img-fluids">
    </div>
    <div class="col-md">
        <ul class="list-group">
            <li class="list-group-item"><strong>${md.Title}</strong></li>
            <li class="list-group-item text-muted"><strong>Years : </strong>${md.Year}</li>
            <li class="list-group-item text-muted"><strong>Actors : </strong>${md.Actors}</li>
            <li class="list-group-item text-muted"><strong>Writer : </strong>${md.Writer}</li>
            <li class="list-group-item text-muted"><strong>Plot : </strong>${md.Plot}</li>
        </ul>
    </div>
</div>`;
};

function showMovies(m) {
    return `<div class="col-md-4">
    <div class="card" style="width: 18rem;">
        <img src="${m.Poster}" alt="" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <p class="card-subtitle text-muted">${m.Year}</p><br>
            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#detailMovies" data-idMovie="${m.imdbID}">Detail</a>
        </div>
    </div>
</div>`
}