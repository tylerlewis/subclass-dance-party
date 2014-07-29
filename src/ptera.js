var Ptera = function(top, left, timeBetweenSteps, className){

  this.top = top;
  this.left = left;
  //this.width = 320;
  //this.height = 400;
  //this.img = "http://media.giphy.com/media/9VMyQXoIAGHyE/giphy.gif";
  this.timeBetweenSteps = 1000;
  this.className = className;
  this.$node = $('<span class=' + className +'></span>')
  //this.$node = $('<span class=' + className +'></span>')

  Dancer.call(this, this.top, this.left, this.timeBetweenSteps, this.className, this.$node);
  //this.$node = ('<span class="trex"></span>');
}

Ptera.prototype = Object.create(Dancer.prototype);
Ptera.prototype.constructor = Ptera;
Ptera.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
  //this.$node.effect( "shake");
}
