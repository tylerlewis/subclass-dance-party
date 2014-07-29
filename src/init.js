$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    if(dancerMakerFunctionName === "LineThemUp"){
      for(var i = 0; i < window.dancers.length; i++){
        var dino = window.dancers[i];
        dino.movePosition();
      }
    } else {
    // make a dancer with a random position
      var dancer = new dancerMakerFunction(
        Math.floor(Math.random() * 400) + 50,
        Math.floor(Math.random() * 1200) + 1,
        Math.random() * 1000,
        dancerMakerFunctionName
      );
      window.dancers.push(dancer);
      //dancers.push(dancer);
      $('body').append(dancer.$node);
      $(dancer.$node).draggable();
    }
  });
});

/*
     $("body").height() * Math.floor(Math.random() * 2000) + 500,
      $("body").width() * Math.floor(Math.random() * 1500) + 500,
      Math.random() * 1000,
 */
