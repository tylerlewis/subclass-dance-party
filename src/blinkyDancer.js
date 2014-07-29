var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left; 
  this.width = 400;
  this.height = 215;
  this.img = "url('lib/bigdino.png')";
  this.$node =  $('<span class="BlinkyDancer"></span>');

  this.timeBetweenSteps = 1000;
  
  Dancer.call(this, this.top, this.left, this.timeBetweenSteps, this.$node);
  this.setCss(this.width, this.height, this.img);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  //debugger;
  this.$node.toggle();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

};
/*
BlinkyDancer.prototype.setCss = function(width, height){
  var setStyle = {
    width: this.width,
  height: this.height,
  backgroundImage: this.img
  }
  this.$node.css(setStyle);
}*/
BlinkyDancer.prototype.lineUp = function(){
  var setStyle = {
    left: 650
  }
  this.$node.css(setStyle);
}
// Dacer
// - blinkyDancer: type of dancer that blinks
// - trex: type of dancer that changes color
// -
