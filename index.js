console.log(movieData);


$(document).ready( ()=> {
    console.log("ready!")
    function renderMovie(movieArray) {
        console.log("I'm here")
        // console.log(movieArray)

        movieHTML = movieArray.map( movie => {
            return `<p>${movie.Title}</p>` 
        })

        $('.results').html(movie.HTML)
        console.log()
    }
   
    renderMovies(movieData)
   
});