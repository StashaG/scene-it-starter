
$(document).ready(() => {
    console.log("ready!")

    function renderMovie(movieArray) {
        console.log("I'm here")
        // console.log(movieData)

        var movieHTML = movieArray.map( currentMovie => {
            console.log(movieHTML);

            return `<p>${currentMovie.Title}</p>` 
        });

        $('.results').html(currentMovie.HTML)
        console.log()
    }
   
    renderMovie(movieData)
   
});

