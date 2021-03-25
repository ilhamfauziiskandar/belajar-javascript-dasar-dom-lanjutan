$('.search-button').on('click', function(){


    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=988a26c1&s=' + $('.search-input').val(),
        success: hasil => {
            const movies = hasil.Search;
            console.log(hasil);
    
            let cards = "";
            movies.forEach(m => {
                cards += showMovies(m);
            });
    
            $('.hasil-cari').html(cards);
    
            $('.modal-detail-button').on('click', function(){
                console.log($(this).data('idmovie'));
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=988a26c1&i=' + $(this).data('idmovie'),
                    success: md => {
                                    const movieDetail = showmd(md);
                                $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                });
    
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
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
            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#detailMovies" data-idmovie="${m.imdbID}">Detail</a>
        </div>
    </div>
</div>`
}