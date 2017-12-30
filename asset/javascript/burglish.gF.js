function gF(wx, KV, Kf) {
  if (!isNaN(KV) && !/[^\d]+/.test(KV) && !OD["ignore"]) {
    var Oh = KV.gp();
    Kf[Kf.length] = [KV, Oh];
    OD[OD.x]["list"][Kf.length - 1] = eval(Kf[Kf.length - 1]);
    var dig = "";
    var az = true;
    var O0 = KV.reverse();
    var d = 0;
    if (O0.length <= wS[1].length + 1) {
      for (var i = 0; i < O0.length; i++) {
        if (d > 0) az = false;
        d = parseInt(O0.charAt(i));
        if (i == 0 && d > 0) {
          dig = wS[0][d - 1];
        } else if (d > 0) {
          dig = wS[0][d - 1] + wS[1][i - 1][az ? 0 : 1] + dig;
        }
      }
    }
    if (dig != "") {
      Kf[Kf.length] = [KV, dig];
      OD[OD.x]["list"][Kf.length - 1] = eval(Kf[Kf.length - 1]);
    }
  }
  return Kf;
};