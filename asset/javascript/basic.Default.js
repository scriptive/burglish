var gc = navigator.userAgent;
var QW = /Gecko/.test(gc);
var QT = /Opera/.test(gc);
var w1 = /MSIE/.test(gc);

var QR = {};
var QX = {};
var h7 = {};

var gJ= {
  basic: true
};
var gl= {
  i: 0,
  OT: {}
};

function $(e) {
  return doc.getElementById(e);
};
function eCreate(e) {
  return doc.createElement(e);
};
function eEmpty(e) {
  while (e.hasChildNodes()) e.removeChild(e.firstChild);
  return e;
};
function eText(e) {
  if (e){
    return e+app.id.text
  }
  return app.id.text;
// app.id.target+app.id.text
};
// =require basic.Ku.js
// =require basic.g9.js
// =require basic.gA.js
// =require basic.N3.js
// =require basic.Qx.js
// =require basic.g1.js
// =require basic.gb.js
