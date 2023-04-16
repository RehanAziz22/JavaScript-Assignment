(async function () {
    const response = await fetch('./data.json')
    const movies = await response.json();

    const genreSelect = document.getElementById('genre-select');
    const yearSelect = document.getElementById('year-select');
    const languageSelect = document.getElementById('language-select');
    const ratingsSelect = document.getElementById('ratings-select');
    const movieResults = document.getElementById('movie-result');

    //=============================================== Get all the genres from the data
    let genres = movies.flatMap(movie => movie.genres);
    // Get the unique genres
    let uniqueGenres = [...new Set(genres)];
    // Render the genres as options in the select element
    uniqueGenres.forEach(genre => {
        const genreSelect = document.getElementById('genre-select');
        let option = document.createElement('option');
        option.text = genre;
        genreSelect.add(option);
    });

    //================================================ Get all the years from the data
    let years = movies.flatMap(movie => movie.release_date.substring(0, 4));
    // Get the unique years
    let uniqueYear = [...new Set(years)];
    // Render the year as options in the select element
    uniqueYear.forEach(year => {
        const yearSelect = document.getElementById('year-select');
        let option = document.createElement('option');
        option.text = year
        yearSelect.add(option);
    });


    //================================================ Get all the languages from the data
    let language = movies.flatMap(movie => movie.original_language);
    // Get the unique languages
    let uniqueLanguage = [...new Set(language)];
    // Render the languages as options in the select element
    uniqueLanguage.forEach(language => {
        const languageSelect = document.getElementById('language-select');
        let option = document.createElement('option');
        option.text = language
        languageSelect.add(option);
    });

    //================================================ Get all the ratings from the data
    let ratings = movies.flatMap(movie => movie.vote_average);
    // Get the unique ratings
    let uniqueRatings = [...new Set(ratings)];
    // Render the ratings as options in the select element
    uniqueRatings.forEach(ratings => {
        const ratingsSelect = document.getElementById('ratings-select');
        let option = document.createElement('option');
        option.text = ratings
        ratingsSelect.add(option);
    });



    function genreSearch() {
        const selectedOption = this.options[this.selectedIndex];
        let query = selectedOption.value.toLowerCase();

        const results = movies.filter(function (movie) {
            return (movie.genres.toString().toLowerCase().includes(query))
        });

        movieResults.innerHTML = " "
        results.forEach(function (e, index) {
            const li = document.createElement("div")
            const moviesList = `
            <div class="container">
                <div class="row">
                    <div class="col col-1 col-lg-1 col-sm-1">
                        ${index + 1}
                    </div>
                <div class="col col-9 col-lg-9 col-sm-9">
                    <div class="movie-details">
                        <img src="https://image.tmdb.org/t/p/w45${e.poster_path}" alt="${e.title}">    
                        <div style="margin-left: 20px;">
                
                            <h6>${e.title}</h6>
                            <div class="movie-subdetails">
                            <p class="certification">${e.certification}</p>
                            <p class="genreslist">${e.genres.toString(" ")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-2 col-lg-2 col-sm-2">
                    ${e.release_date.substring(0, 4)}
                </div>
                </div>
            </div>
            <hr/>`;
            li.innerHTML = moviesList;
            // li.addEventListener("click", function () {
            //   loadRecipeDetails(recipe);
            // });
            
            movieResults.appendChild(li);
        });
        console.log(results)

    }

    function yearSearch() {
        const selectedOption = this.options[this.selectedIndex];
        let query = selectedOption.value;

        const results = movies.filter(function (movie) {
            return (movie.release_date.toString().includes(query))
        });
        movieResults.innerHTML = " "
        results.forEach(function (e, index) {
            const li = document.createElement("div")
            const moviesList = `
            <div class="container">
                <div class="row">
                    <div class="col col-1 col-lg-1 col-sm-1">
                        ${index + 1}
                    </div>
                <div class="col col-9 col-lg-9 col-sm-9">
                    <div class="movie-details">
                        <img src="https://image.tmdb.org/t/p/w45${e.poster_path}" alt="${e.title}">    
                        <div style="margin-left: 20px;">
                
                            <h6>${e.title}</h6>
                            <div class="movie-subdetails">
                            <p class="certification">${e.certification}</p>
                            <p class="genreslist">${e.genres.toString(" ")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-2 col-lg-2 col-sm-2">
                    ${e.release_date.substring(0, 4)}
                </div>
                </div>
            </div>
            <hr/>`;
            li.innerHTML = moviesList;
            // li.addEventListener("click", function () {
            //   loadRecipeDetails(recipe);
            // });
            movieResults.appendChild(li);
        });
        console.log(results)

    }

    function languageSearch() {
        const selectedOption = this.options[this.selectedIndex];
        let query = selectedOption.value;

        const results = movies.filter(function (movie) {
            return (movie.original_language.toString().includes(query))
        });
        movieResults.innerHTML = " "
        results.forEach(function (e, index) {
            const li = document.createElement("div")
            const moviesList = `
            <div class="container">
                <div class="row">
                    <div class="col col-1 col-lg-1 col-sm-1">
                        ${index + 1}
                    </div>
                <div class="col col-9 col-lg-9 col-sm-9">
                    <div class="movie-details">
                        <img src="https://image.tmdb.org/t/p/w45${e.poster_path}" alt="${e.title}">    
                        <div style="margin-left: 20px;">
                
                            <h6>${e.title}</h6>
                            <div class="movie-subdetails">
                            <p class="certification">${e.certification}</p>
                            <p class="genreslist">${e.genres.toString(" ")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-2 col-lg-2 col-sm-2">
                    ${e.release_date.substring(0, 4)}
                </div>
                </div>
            </div>
            <hr/>`;
            li.innerHTML = moviesList;
            // li.addEventListener("click", function () {
            //   loadRecipeDetails(recipe);
            // });
            movieResults.appendChild(li);
        });
        console.log(results)

    }

    function ratingSearch() {
        const selectedOption = this.options[this.selectedIndex];
        let query = selectedOption.value;

        const results = movies.filter(function (movie) {
            return (movie.vote_average.toString().includes(query))
        });
        movieResults.innerHTML = " "
        results.forEach(function (e, index) {
            const li = document.createElement("div")
            const moviesList = `
            <div class="container">
                <div class="row">
                    <div class="col col-1 col-lg-1 col-sm-1">
                        ${index + 1}
                    </div>
                <div class="col col-9 col-lg-9 col-sm-9">
                    <div class="movie-details">
                        <img src="https://image.tmdb.org/t/p/w45${e.poster_path}" alt="${e.title}">    
                        <div style="margin-left: 20px;">
                
                            <h6>${e.title}</h6>
                            <div class="movie-subdetails">
                            <p class="certification">${e.certification}</p>
                            <p class="genreslist">${e.genres.toString(" ")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-2 col-lg-2 col-sm-2">
                    ${e.release_date.substring(0, 4)}
                </div>
                </div>
            </div>
            <hr/>`;
            li.innerHTML = moviesList;
            // li.addEventListener("click", function () {
            //   loadRecipeDetails(recipe);
            // });
            movieResults.appendChild(li);
        });
        console.log(results)

    }
    genreSelect.addEventListener('change', genreSearch)
    yearSelect.addEventListener('change', yearSearch)
    languageSelect.addEventListener('change', languageSearch)
    ratingsSelect.addEventListener('change', ratingSearch)

    // console.log(movies)











})();