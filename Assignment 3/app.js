(async function () {
    const response = await fetch("./data.json")
    const movies = await response.json()

    console.log(movies)

    function search() {
        // const query = inputElem.value;

        const query = "family"
        const results = movies.filter(function (movie) {
            return (movie.title.toLowerCase().includes(query) || movie.genres.join(" ").toLowerCase().includes(query))

        })
        // displaySearchResult(results)
        console.log(results)
    }
    search()
})();


const selectElem = document.getElementById("genre")
const selectElement = document.getElementById("genre-select");
const listElem = document.getElementById("movie-result");

let fetchedData;

async function logJSONData() {

    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            // Get all the genres from the data
            let genres = data.flatMap(movie => movie.genres);
            // console.log(data)
            fetchedData = data
            // Get the unique genres
            let uniqueGenres = [...new Set(genres)];

            // Render the genres as options in the select element
            let select = document.getElementById('genre-select');
            uniqueGenres.forEach(genre => {
                let option = document.createElement('option');
                option.text = genre;
                select.add(option);
            });
        });
}

logJSONData()

selectElement.addEventListener("change", genreSearch);

function genreSearch() {
    const selectedOption = this.options[this.selectedIndex];
    let query = selectedOption.value;
    console.log(selectedOption.value);
    const results = fetchedData.filter(function (movie) {
        return (movie.genresgenres.join(" ").toLowerCase().includes(query))

    })
    // displaySearchResult(results)
    console.log(results)
}