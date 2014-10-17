var ToBeTwerked = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.width = 184;
  this.height = 200;
  this.img = 'url("lib/tricera.png")';
  this.line = $(window).width() * .75;
  this.pair = false;
  this.$node = $('<span class="ToBeTwerked"></span>');
  Dancer.call(this, this.top, this.left, timeBetweenSteps, this.$node);
  this.setCss(this.width, this.height, this.img)
}

ToBeTwerked.prototype = Object.create(Dancer.prototype);
ToBeTwerked.prototype.constructor = ToBeTwerked;
ToBeTwerked.prototype.step = function() {
  if(this.cur === this.top + 25) {
    this.cur = this.top - 25;
  } else {
    this.cur = this.top + 25;
  }
  Dancer.prototype.step.call(this);

  this.$node.animate({"top": this.cur + "px"}, 200);
}
