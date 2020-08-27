
$(document).ready(() => {
    console.log("ready!")

    function renderMovies(movieArray) {
        console.log("I'm here")
        // console.log(movieData);

        var movieHTML = movieArray.map( currentMovie => {
            // console.log(currentMovie.Title);

            $(".movies-container").append( 
                `<div class="movie">
                    <div class="card" style="width: 18rem;">
                            <img src="${currentMovie.Poster}" class="card-img-top" alt="Card image cap">
                            <div class="card-body">
                            <h5 class="card-title">${currentMovie.Title}</h5>
                            <p class="card-text">${currentMovie.Year}</p>
                            <a href="#" class="btn btn-primary">Add!</a>
                            </div>
                        </div>`
            
        )} )

        // console.log(movieHTML.join(''));
        


        // return $('.movies-container').html(movieHTML.join(' '))
        return movieHTML.join('');
        // console.log()

    }

    $('#search-form') 
   
    renderMovies(movieData)
   
});

