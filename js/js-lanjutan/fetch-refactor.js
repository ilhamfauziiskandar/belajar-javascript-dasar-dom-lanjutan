// fetch refactor

const searchButton = document.querySelector('button.search-button');
searchButton.addEventListener('click', async function(){
    const inputKeyword = document.querySelector('input.search-input');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
});

// event binding
document.addEventListener('click', async function(e){
    if (e.target.classList.contains('modal-detail-button')) {
        const imdb = e.target.dataset.idmovie;
        const movieDetail = await getMovieDetail(imdb);
        updateMovieDetail(movieDetail);
    }
});

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=988a26c1&s=' + keyword)
    .then(response => response.json())
    .then(response => response.Search);
}


function getMovieDetail(keyword){
    return fetch('http://www.omdbapi.com/?apikey=988a26c1&i=' + keyword)
    .then(response => response.json())
    .then(response => response);
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showMovies(m));
    const hasilSearch = document.querySelector('div.hasil-cari');
    hasilSearch.innerHTML = cards;
}

function updateMovieDetail(keyword){
    const modalBody = document.querySelector('.modal-body');
    const detailMovie = showmd(keyword);
    modalBody.innerHTML = detailMovie;
}

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
}

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