function gL() {
  var OT = $(OD.x);
  var OO = OT.value;
  OO = OO.gL(hz);
  for (var l = 0; l < wp.length; l++) {
    if (wp[l].length >= 4) {
      OO = OO.replace(wp[l][2], wp[l][3]);
    }
    var Og = eval("/" + wp[l][0] + "/g");
    if (Og.test(OO)) {
      OO = OO.replace(Og, wp[l][1]);
    }
  }
  for (var l = 0; l < wj.length; l++) {
    var Og = eval("/" + wj[l][0] + "/g");
    if (Og.test(OO)) {
      OO = OO.replace(Og, wj[l][1]);
    }
  }
  OT.value = OO;
  return false;
};