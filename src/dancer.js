// Creates and returns a new Dancerer object that can step
var Dancer = function(top, left, timeBetweenSteps, node){
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  //this.$node = node || $('<span class=' + className +'></span>');
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  var context = this;
  setTimeout(function() {
    context.step();
  }, context.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.setCss = function(width, height, img){
  var setStyle = {
    width: this.width,
    height: this.height,
    backgroundImage: this.img
  }
  this.$node.css(setStyle);
}