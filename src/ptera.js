var Ptera = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.width = 150;
  this.height = 200;
  this.img = "url('lib/dinoEgg.png')";
  this.line = $(window).width() * .25;

  this.$node = $('<span class="Ptera"></span>');
  this.timeBetweenSteps = 1000;

  Dancer.call(this, this.top, this.left, this.timeBetweenSteps, this.$node);
  this.setCss(this.width, this.height, this.img);
  this.hatch();
}

Ptera.prototype = Object.create(Dancer.prototype);
Ptera.prototype.constructor = Ptera;
Ptera.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
}
Ptera.prototype.hatch = function(){
  this.width = 400;
  this.height = 248;
  this.$node.one("mouseenter", function(event){
    $(this).effect("explode");
    $(this).css("width", 400);
    $(this).css("height", 248);
    $(this).css("background-image", "url('lib/pterapic.png')");
  });
}
