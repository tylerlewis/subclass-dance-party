$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    if(dancerMakerFunctionName === "LineThemUp"){
      for(var i = 0; i < window.dancers.length; i++){
        var dino = window.dancers[i];
        dino.lineUp(dino.line);
      }
    } else if(dancerMakerFunctionName === "MakeItRain"){
      var bens = [];
      for(var i = 0; i < 100; i++) {
        $ben = $('<span class="ben"></span>');
        $ben.css("background-image", "url('lib/ben.png')");
        $ben.css("left", $(window).width() * Math.random());
        $ben.css("top", $(window).height() * Math.random());
        $ben.css("zIndex", 3);
        bens.push($ben);
      }
      jQuery.each(bens, function(i) {
        $("body").append(bens[i]);
        bens[i].animate({top: "+=1200px"}, 3000);
      });
    } else if(dancerMakerFunctionName === "TwerkEm") {
      var tric = [];
      for(var i = 0; i < window.dancers.length; i++){
        if(window.dancers[i] instanceof ToBeTwerked){
          if(!tric.pair) {
            tric.push(window.dancers[i]);
          }
        }
      }
      for(var j = 0; j < tric.length; j++){
        var currentMatch;
        var min = 10000;
        var currentTric = tric[j];
        var x1 = currentTric.left;
        var y1 = currentTric.top;
        for(var k = 0; k < window.dancers.length; k++) {
          var dino = window.dancers[k];
          if(dino instanceof Trex) {
            var x2 = dino.left;
            var y2 = dino.top;
            var pyth = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            if(pyth < min) {
              min = pyth;
              currentMatch = dino;
              currentTric.pair = true;
            }
          }
        }
        var styleSettings = {
          top: currentMatch.top - 200,
          left: currentMatch.left + 60,
          zIndex: 1
        };
        currentTric.$node.css(styleSettings);
      }
    } else {
      var h = $(window).height() - 450;
      var w = $(window).width() - 450;
      var dancer = new dancerMakerFunction(
        Math.floor(Math.random() * h) + 50,
        Math.floor(Math.random() * w) + 1,
        Math.random() * 1000,
        dancerMakerFunctionName
      );
      window.dancers.push(dancer);
      $('body').append(dancer.$node);
      $(dancer.$node).draggable();
    }
  });
});
