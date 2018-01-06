function Ne(Oz, gz) {
  gz = $(Oz).style.display == "none";
  $(Oz).style.display = gz != false ? "" : "none";
  // $(Oz).visible = gz != false ? false : true;
};

function gS(Oz) {
  $(Oz).style.display = "none";
  // $(Oz).visible = false;
};

function wQ(Oz, gz) {
  // var e = $(Oz);
  // e.currentStyle ? e.currentStyle.display :getComputedStyle(e, null).display;
  // console.log(e.currentStyle);
  // if (gz !=false)
  $(Oz).style.display = (gz != false)?"block":"none";

  // e.visible = gz != false ? false : true;
  // if ($(Oz).style.display)
  // e.style.visibility = gz != false ? "visible" : "hidden";
  // e.visible = gz != false ? false : true;
  // $(Oz).style.visibility = gz != false ? "visible" : "hidden";
  // $(Oz).visible = gz != false ? false : true;
};

function Kx(Oz) {
  $(Oz).style.display = "none";
};

// function N9(wd) {
//   var wA = eCreate('style');
//   wA.setAttribute("type", "text/css");
//   if (wd.id) wA.setAttribute("id", wd.id);
//   if (wA.styleSheet) {
//     wA.styleSheet.cssText = wd.css;
//   } else {
//     wA.appendChild(doc.createTextNode(wd.css));
//   }
//   var Oq = doc.getElementsByTagName('head')[0];
//   Oq.appendChild(wA);
// };

// function Ko(a, b) {
//   return a - b;
// }
String.prototype.OY = function(Oz) {
  var Oc = -1;
  if (arguments.length != 1) return Oc;
  if (typeof(Oz) != "array" && typeof(Oz) != "object") return Oc;
  for (var Oy = 0; Oy < Oz.length; Oy++) {
    if (this == Oz[Oy]) Oc = Oy;
  };
  return Oc;
};
String.prototype.reverse = function() {
  var Oc = "";
  for (var i = 0; i < this.length; i++) {
    Oc = this.charAt(i) + Oc;
  };
  return Oc;
};

function NI(Oz, O6) {
  var Oc = String(Oz);
  while (Oc.length < O6) {
    Oc = "0" + Oc;
  }
  return Oc;
};

function Ql(Oz) {
  return Oz.replace(/([!"#$%&'()*+,-./:;?@[\\\]_`{|}~])/g, '\\$1');
};
String.prototype.Ql = function() {
  return Ql(this);
};
function wi(Oz) {
  return Oz.replace(/^[\s​]+|[\s​]+$/gm, '');
};
function Kp(Oz) {
  return wi(Oz).replace(/^\,+|\,+$/gm, '')
};
String.prototype.wi = function() {
  return wi(this);
};
String.prototype.Kp = function() {
  return Kp(this);
};
String.prototype.K1 = function(O6) {
  return NI(this, O6);
};

function hT(x) {
  return String.fromCharCode(x);
};

function O6(x) {
  return x.length;
};

function Qu(Oz) {
  return escape(Oz).replace(/\%/g, '\\');
};

// function Np(Oz) {
//   return unescape(Oz.replace(/\\/g, '%'));
// };

function NJ(Oz) {
  return unescape(Oz.replace(/\\([0-7][0-9A-F])/g, '%$1'));
};

// =require lib.Nl.js

var Kn = new Object();
Kn.c = Kn.start = new Date();
Kn.d = function() {
  var KI = (new Date()).getTime() - this.c;
  return KI;
};
Kn.u = function() {
  this.c = (new Date()).getTime();
};

// function OV() {
//   return Math.random();
// };
var gR = false;
var N5, Nr, g4, tx, ty;

// =require lib.Q0.js
// =require lib.QC.js
// =require lib.KR.js
// =require lib.OX.js

// =require lib.gP.js
// =require lib.Qw.js
// require lib.Dragme.js

doc.onmousedown = gP;
// doc.onmouseup = gP(false);
doc.onmouseup = function(){gP();};
// doc.onmouseup = new Function("gR=false");
// gJ.lib = true;