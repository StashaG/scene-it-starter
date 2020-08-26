
$(document).ready(() => {
    console.log("ready!")

    function renderMovie(movieData) {
        console.log("I'm here")
        // console.log(movieData)

        var movieHTML = movieData.map( movie => {

            return `<p>${movie.Title}</p>` 
        });

        $('.results').html(movie.HTML)
        console.log()
    }
   
    renderMovie(movieData)
   
});

