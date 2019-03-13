$(".trueInput").keydown(function(e){
  if(e.keyCode === 13) {

    fetch('https://pokeapi.co/api/v2/pokemon/' + (($(".trueInput").val()).toLowerCase()) + "/")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        displayOnScreen(myJson)
      })
      fetch('https://pokeapi.co/api/v2/pokemon-species/' + (($(".trueInput").val()).toLowerCase()) + "/")
        .then(function(response) {
          return response.json();
        })
        .then(function(my2Json) {
          displayPrevious(my2Json)
        })
}
});

  function displayOnScreen(myJson) {
    $(".heightText").text(JSON.stringify(myJson.id));
    let moves = myJson.moves
    let result = moves.map(a => a.move.name)
    let resultArrayOf4 = result.slice(0, 4)

    $(".descriptionText").text(resultArrayOf4)

    let pictures = myJson.sprites.front_default
    $(".pokeImage").attr("src", pictures)
  }


  let previous
  function displayPrevious(my2Json) {
    if(my2Json.evolves_from_species !== null) {
      $(".typeText").text(my2Json.evolves_from_species.name)
      previous = my2Json.evolves_from_species.name
        fetch('https://pokeapi.co/api/v2/pokemon/' + previous + "/")
          .then(function(response) {
            return response.json();
          })
          .then(function(my3Json) {
            let picturesPrevious = my3Json.sprites.front_default

            $(".previousPic").attr("src", picturesPrevious)
          })
    } else {
      $(".typeText").text("It's a baby, it's the 1st")
    }
  }


//https://codepen.io/rocherf/pen/ZvxdxR
