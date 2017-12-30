
function Ne(Oz, gz) {
  gz = $(Oz).style.display == "none";
  $(Oz).style.display = gz != false ? "" : "none";
  $(Oz).visible = gz != false ? false : true;
};

function gS(Oz) {
  $(Oz).style.display = "none";
  $(Oz).visible = false;
};

function wQ(Oz, gz) {
  $(Oz).style.visibility = gz != false ? "visible" : "hidden";
  $(Oz).visible = gz != false ? false : true;
};

function Kx(Oz) {
  $(Oz).style.visibility = "hidden";
  $(Oz).visible = false;
};

function N9(wd) {
  var wA = document.createElement('style');
  wA.setAttribute("type", "text/css");
  if (wd.id) wA.setAttribute("id", wd.id);
  if (wA.styleSheet) {
    wA.styleSheet.cssText = wd.css;
  } else {
    var Ok = document.createTextNode(wd.css);
    wA.appendChild(Ok);
  }
  var Oq = document.getElementsByTagName('head')[0];
  Oq.appendChild(wA);
};

function Ko(a, b) {
  return a - b;
}
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

function Np(Oz) {
  return unescape(Oz.replace(/\\/g, '%'));
};

function NJ(Oz) {
  return unescape(Oz.replace(/\\([0-7][0-9A-F])/g, '%$1'));
};

function Nl(gz, QY, Nq) {
  if (gz) {
    if ($('loading')) {
      wQ("loading");
    } else {
      var h6 = document.createElement("div");
      h6.id = "loading";
      h6.innerHTML = '<div id="loading" style="visibility:visible;z-index:1000;color:#ffffff;background-color:#ff0000;top:0;float:right;text-align:center;vertical-align:middle;">' + (Nq || 'Loading...') + '</div>';
      document.body.appendChild(h6);
    }
    setTimeout(eval(QY), 100);
  } else {
    Kx("loading");
  }
};
var Kn = new Object();
Kn.c = Kn.start = new Date();
Kn.d = function() {
  var KI = (new Date()).getTime() - this.c;
  return KI;
};
Kn.u = function() {
  this.c = (new Date()).getTime();
};

function OV() {
  return Math.random();
};

function Q0(hi, Or, OJ, QM, QK) {
  OJ = OJ || '';
  QM = QM || 0;
  QK = QK ? (QK - 1) : 0;
  var h0 = hi.scrollTop;
  var QI = hi.scrollLeft;
  var Nd = hi.textLength;
  var NS = hi.selectionStart - QK;
  var KQ = (hi.selectionEnd || hi.selectionStart) - QK;
  var s1 = (hi.value).substring(0, NS - QM);
  var s2 = (hi.value).substring(NS, KQ);
  var s3 = (hi.value).substring(KQ, Nd);
  hi.value = s1 + Or + (OJ ? s2 : '') + OJ + s3;
  hi.selectionStart = NS + (Or.length - QM) + QK;
  hi.selectionEnd = hi.selectionStart;
  hi.scrollTop = h0;
  hi.scrollLeft = QI;
  return false;
};

function QC(hi, Or, OJ, QM, QK) {
  OJ = OJ || '';
  QM = QM || 0;
  QK = QK ? (QK - 1) : 0;
  hi.focus();
  var wN = "​‌​";
  var g0 = document.selection.createRange();
  g0.moveStart("character", -QK);
  var s2 = g0.text;
  document.selection.createRange().text = g0.text + wN;
  var NS = hi.value.indexOf(wN) - QK;
  var s1 = hi.value.substring(0, NS - QM - s2.length);
  var s3 = hi.value.substring(NS + wN.length, hi.value.length);
  hi.value = s1 + Or + s2 + OJ + s3;
  g0 = hi.createTextRange();
  g0.collapse(true);
  var wk = s1.split("\r\n").length - 1;
  g0.moveStart("character", NS + (Or.length - QM) - wk);
  g0.select();
  return false;
};

function KR(hi, Or, OJ, QM, QK) {
  w1 ? QC(hi, Or, OJ, QM, QK) : Q0(hi, Or, OJ, QM, QK);
};

function OX(Oz) {
  OT = $(Oz);
  var Kl = OT.offsetLeft;
  var w7 = OT.offsetTop;
  while (OT = OT.offsetParent) {
    Kl += OT.offsetLeft;
  }
  OT = $(Oz);
  while (OT = OT.offsetParent) {
    w7 += OT.offsetTop;
  }
  return [Kl, w7];
}
var gR = false;
var N5, Nr;
var g4;

function Qw(evt) {
  if (gR) {
    g4.style.left = QW ? tx + evt.clientX - N5 : tx + event.clientX - N5;
    g4.style.top = QW ? ty + evt.clientY - Nr : ty + event.clientY - Nr;
    return false;
  }
};

function gP(evt) {
  var gs = QW ? evt.target : event.srcElement;
  var N7 = w1 ? "BODY" : "HTML";
  while (gs.tagName != N7 && !/dragme/.test(gs.className)) {
    gs = QW ? gs.parentNode : gs.parentElement;
  }
  if (/dragme/.test(gs.className)) {
    gR = true;
    g4 = gs;
    tx = parseInt(g4.style.left + 0);
    ty = parseInt(g4.style.top + 0);
    N5 = QW ? evt.clientX : event.clientX;
    Nr = QW ? evt.clientY : event.clientY;
    document.onmousemove = Qw;
    return false;
  }
};
document.onmousedown = gP;
document.onmouseup = new Function("gR=false");
gJ.lib = true;