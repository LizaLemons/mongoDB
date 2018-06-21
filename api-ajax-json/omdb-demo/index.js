
window.onload = function() {
  console.log("Page loaded.");

  /* add click fxn to 'search' button */
  document.getElementById('submit-btn').addEventListener('click', function(ev){

    /* prevent the default of the submit button (refreshing the page) */
    ev.preventDefault();

    let apiKey = "7a43a864";
    let apiInputBox = document.getElementById('api-input');
    let userChosenMovie = apiInputBox.value;
    let query = `http://omdbapi.com/?apikey=${apiKey}&tomatoes=true&t=${userChosenMovie}`;

    $.ajax({
      url: query
    }).done(function(response) {
      console.log(response);
      let infoContainer = document.getElementById('info-container').style.display = "block";

      /* get the elements */
      let titleEl = document.getElementById('title');
      let yearEl = document.getElementById('year');
      let posterEl = document.getElementById('poster');
      let plotEl = document.getElementById('plot');
      let actorsEl = document.getElementById('actors');

      /* append the responses */
      titleEl.innerHTML = response.Title;
      yearEl.innerHTML = response.Year;
      plotEl.innerHTML = response.Plot;
      actorsEl.innerHTML = response.Actors;
      posterEl.innerHTML = '<img class="picture" src="' + response.Poster + '"/>';

    }).fail(function(response) {
      console.log("uh oh, fail.");
      console.log(response);
    }); /* end AJAX call */

  }) /* end click fxn */

} /* end window onload */
