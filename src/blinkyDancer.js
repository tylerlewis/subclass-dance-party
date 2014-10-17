var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.width = 400;
  this.height = 215;
  this.img = "url('lib/bigdino.png')";
  this.$node =  $('<span class="BlinkyDancer"></span>');
  this.line = $(window).width() * .45;

  this.timeBetweenSteps = 1000;

  Dancer.call(this, this.top, this.left, this.timeBetweenSteps, this.$node);
  this.setCss(this.width, this.height, this.img);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);

  this.$node.toggle();
};
