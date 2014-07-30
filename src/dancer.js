var Dancer = function(top, left, timeBetweenSteps, node){
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  var context = this;
  setTimeout(function() {
    context.step(context.cur);
  }, context.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.setCss = function(width, height, img){
  var setStyle = {
    width: this.width,
    height: this.height,
    backgroundImage: this.img,
    background: "cover",
    position: "absolute"
  }
  this.$node.css(setStyle);
}

Dancer.prototype.lineUp = function(position) {
  this.$node.css("left", position);
}
