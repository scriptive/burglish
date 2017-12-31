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
  return (e?e:eSrc)+eTxt;
};
function eOption(e) {
  return (e?e:eSrc)+eOpt;
};
function eSwap(e) {
  return (e?e:eSrc)+eSwp;
};
function eForce(e) {
  return (e?e:eSrc)+eFoc;
};
function eExcept(e) {
  return (e?e:eSrc)+eExc;
};
// =require basic.Ku.js
// =require basic.g9.js
// =require basic.gA.js
// =require basic.N3.js
// =require basic.Qx.js
// =require basic.g1.js
// =require basic.gb.js