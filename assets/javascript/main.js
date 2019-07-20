var bobsBurgers = ["Bob Belcher", "Linda Belcher", "Tina Belcher", "Gene Belcher", "Louise Belcher"];
function createButtons() {
    $(".buttonSpot").empty();
    for (var i = 0; i < bobsBurgers.length; i++) {
      var bobsButtons = $("<button class='gifButtons' personButton='" + bobsBurgers[i] + "' >" + bobsBurgers[i] + "</button>")
    

        bobsButtons.appendTo(".buttonSpot");
        
    }

};


  
$(document).on("click", ".gifButtons", function () {
    
    var person = $(this).attr('personButton');

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
          personImage.attr("src", results[i].images.fixed_height_still.url);

          var test = results[i].images.fixed_height.url;
          console.log(test);
          console.log(results[i].images);

          personImage.attr("data-state", "still");
          personImage.attr("data-still", );
          //personImage.attr("data-animate", );

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



// $(document).on("click", ".searchBar", function () {
    
//   bobsBurgers.push(searchEntry);

// });




// function searchEntry(){

//   var items = [];
//   bobsBurgers = document.getElementById('box').value;
//   items.push(bobsBurgers);  
//   console.log(items);
 
// }
 
// below adds a search to the buttons array

$("#addSearch").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var searchTemporary = $("#searchInput").val().trim();

  // Adding searchTemporary from the textbox to our array
  bobsBurgers.push(searchTemporary);

});

//below pauses and starts the gifs

$(".gifButtons").on("click", function() {
 
  var state = $(this).attr("data-state");
  

 
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else if (state === animate) {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }

 
});
