var Trex = function(top, left, timeBetweenSteps, className){

  this.top = top;
  this.left = left;
  //this.width = 320;
  //this.height = 400;
  //this.img = "http://media.giphy.com/media/9VMyQXoIAGHyE/giphy.gif";
  this.timeBetweenSteps = timeBetweenSteps;
  this.className = className;

  Dancer.call(this, this.top, this.left, this.timeBetweenSteps, this.className, this.width, this.height, this.img);
  //this.$node = ('<span class="trex"></span>');
}

Trex.prototype = Object.create(Dancer.prototype);
Trex.prototype.constructor = Trex;
