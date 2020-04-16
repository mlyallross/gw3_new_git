var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


// Make background jump to lightspeed on hover over planets
document.getElementById("lightspeed1").addEventListener("mouseenter",
  function() {
    document.body.style.background = "url('images/lightspeed.gif') no-repeat";
    document.body.style.backgroundSize = "100% 100vh";
  }, false
);

document.getElementById("lightspeed1").addEventListener("mouseleave",
  function() {
    document.body.style.background = "";
  }, false
);

document.getElementById("lightspeed2").addEventListener("mouseenter",
  function() {
    document.body.style.background = "url('images/lightspeed.gif') no-repeat";
    document.body.style.backgroundSize = "100% 100vh";
  }, false
);

document.getElementById("lightspeed2").addEventListener("mouseleave",
  function() {
    document.body.style.background = "";
  }, false
);


// Make background animate on hover over baby yoda
document.getElementById("y-body").addEventListener("mouseenter",
  function() {
    document.getElementById("baby").style.backgroundImage = "url('images/stars.gif')";
    document.getElementById("baby").style.backgroundPosition = "center";
  }, false
);

document.getElementById("y-body").addEventListener("mouseleave",
  function() {
    document.getElementById("baby").style.background = "";
  }, false
);
