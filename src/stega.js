var Stega = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.width = 392;
  this.height = 292;
  this.img = "url('lib/stega.png')";
  this.$node =  $('<span class="Stega"></span>');
  this.line = $(window).width() * .65;
  this.actWeird();
  this.timeBetweenSteps = timeBetweenSteps;

  Dancer.call(this, this.top, this.left, this.timeBetweenSteps, this.$node);
  this.setCss(this.width, this.height, this.img);
}

Stega.prototype = Object.create(Dancer.prototype);
Stega.prototype.constructor = Stega;

Stega.prototype.makeNewPositions = function(){
  var h = $(window).height() - 450;
  var w = $(window).width() - 450;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh,nw];
}

Stega.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var newq = Stega.prototype.makeNewPositions();
  this.$node.animate({top: newq[0], left: newq[1]});
}

Stega.prototype.actWeird = function() {
  this.$node.hover(function() {
    $(this).css("width", 469);
    $(this).css("height", 330);
    $(this).css("background-image", "url('lib/stego.png')");
  }, function() {
    $(this).css("background-image", "url('lib/stega.png')");
    $(this).css("width", 392);
    $(this).css("height", 292);
  });
}
