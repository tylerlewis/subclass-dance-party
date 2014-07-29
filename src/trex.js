var Trex = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  this.width = 320;
  this.height = 400;
  this.img = "url('lib/giphy.gif')";
  this.$node =  $('<span class="Trex"></span>');

  
  this.timeBetweenSteps = timeBetweenSteps;
  
  Dancer.call(this, this.top, this.left, this.timeBetweenSteps, this.$node);
  this.setCss(this.width, this.height, this.img);
}

Trex.prototype = Object.create(Dancer.prototype);
Trex.prototype.constructor = Trex;

Trex.prototype.lineUp = function(){
  var setStyle = {
    left: 350
  }
  this.$node.css(setStyle);
}