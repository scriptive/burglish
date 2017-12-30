var gc = navigator.userAgent;
var QW = /Gecko/.test(gc);
var QT = /Opera/.test(gc);
var w1 = /MSIE/.test(gc);

function $(Oz) {
  return document.getElementById(Oz);
};

function Ku(Oz) {
  try {
    var Ot = eval(Oz);
    if (typeof(eval(Oz)) != "undefined") return true;
  } catch (e) {}
  return false;
}
var gJ = {
  basic: true
};
var gl = {
  i: 0,
  OT: {}
};

function hH(OT, O7, wm, wf, O1) {
  gJ.OT = gl.OT = OT = OT.split(/[\s\,]+/);
  var wm = wm || (wm == '' ? '' : '');
  var wf = wf || (wf == '' ? '' : '.js');
  gl.O7 = O7;
  for (var i = 0; i < OT.length; i++) {
    if (!gJ[OT[i]]) {
      var x = document.createElement(O1 || 'script');
      x.src = wm + OT[i] + (/\W/.test(OT[i]) ? '' : wf);
      x.xid = OT[i];
      x.id = "$" + OT[i] + "$";
      x.onload = function() {
        gJ[this.xid] = true;
      };
      document.getElementsByTagName("head")[0].appendChild(x);
    }
  }
  if (O7) gl.timeout = setTimeout(N6, 50);
};

function N6() {
  var gz = true;
  for (var i = 0; i < gl.OT.length; i++) {
    if (!gJ[gl.OT[i]]) gz = false;
  }
  gl.i++;
  clearTimeout(gl.timeout);
  if (gz) {
    gl.O7();
  } else {
    gl.timeout = setTimeout(N6, 100);
  };
}