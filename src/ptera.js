var Ptera = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  this.width = 300;
  this.height = 186;
  this.img = "url('lib/pterapic.png')";

  this.$node = $('<span class="Ptera"></span>');
  this.timeBetweenSteps = 1000;

  this.setCss(this.width, this.height, this.img);
  Dancer.call(this, this.top, this.left, this.timeBetweenSteps, this.$node);
  this.setCss(this.width, this.height, this.img);
}

Ptera.prototype = Object.create(Dancer.prototype);
Ptera.prototype.constructor = Ptera;
Ptera.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
  //this.$node.effect( "shake");
}
/*
Ptera.prototype.setCss = function(width, height){
  var setStyle = {
    width: this.width,
    height: this.height,
    backgroundImage: this.img
  }
  this.$node.css(setStyle);
}*/
Ptera.prototype.lineUp = function(){
  var setStyle = {
    left: 150
  }
  this.$node.css(setStyle);
}