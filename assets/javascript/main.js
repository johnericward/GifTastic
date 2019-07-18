var bobsBurgers = ["Bob Belcher", "Linda Belcher", "Tina Belcher", "Gene Belcher", "Louise Belcher"];
function createButtons() {
    $(".buttonSpot").empty();
    for (var i = 0; i < bobsBurgers.length; i++) {
        var bobsButtons = $("<button class='gifButtons' data-person='" + bobsBurgers[i] + "'>" + bobsBurgers[i] + "</button>")
        bobsButtons.appendTo(".buttonSpot");
        
    }

};


  
$(document).on("click", ".gifButtons", function () {
    
    var person = $(this).attr('data-person');

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $(".gifSpot").prepend(gifDiv);
        }
      });
});


//create click event for submit button
//capture user input
//push to array
//(apaste into google add JS)
//
// $("")
// console.log()
//dont

$(document).on("click", ".searchSpot", function () {


    createButtons();

});
createButtons();