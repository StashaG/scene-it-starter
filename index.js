
$(document).ready(() => {
    console.log("ready!")

    function renderMovies(movieArray) {
        console.log("I'm here")
        // console.log(movieData);

        let movieHTML = movieArray.map( currentMovie => {
            // console.log(currentMovie.Title);

            $(".movies-container").append( 
                `<div class="movie">
                    <div class="card" style="width: 18rem;">
                            <img src="${currentMovie.Poster}" class="card-img-top" alt="Card image cap">
                            <div class="card-body">
                            <h5 class="card-title">${currentMovie.Title}</h5>
                            <p class="card-text">${currentMovie.Year}</p>
                            <a href="#" onclick="saveToWatchlist('${currentMovie.imdbID}')" class="btn btn-primary">Add Movie</a>
                            </div>
                        </div>
                    </div>`
            );
        } );

        // console.log(movieHTML.join(''));
        
        return movieHTML.join('');
        // console.log()

    }

    $('#search-form').click(function (e) {
        $(".movies-container").empty();
        e.preventDefault();
        renderMovies(movieData);
    }); 
   
    function saveToWatchlist(imdbID) {
        let movie = movieData.find((currentMovie) => {
            return currentMovie.imdbID === imdbID;
            
        });
        let watchlistJSON = localStorage.getItem('watchlist');
        let watchlist = JSON.parse(watchlistJSON);
        if (watchlist === null) {
            watchlist = [];

        }
        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
        };
    
   
});

