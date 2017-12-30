function Nb(wx, KV, Kf) {
  var ON;
  var OQ;
  var Og;
  var Kc;
  var K5;
  var K0;
  var Kr;
  var help = "" + KV + "";
  OD[OD.x]["lower"] = (KV.charCodeAt(0) > 64 && KV.charCodeAt(0) < 91) ? true : false;
  if (/^[aeiou]/i.test(KV)) {
    KV = KV.replace(/^([aeiou])/, "$1$1");
  }
  var KX = KV.toLowerCase();
  var wH = KX[0];
  var i = 0;
  while (wU[KX.substr(0, ++i)] && i <= KX.length) wH = KX.substr(0, i);
  var KT = KX.slice(i - 1) || "a";
  if (!wB[KT]) return Kf;
  ON = eval("/^" + wH + "/i");
  for (var Oy = 0; Oy < wU[wH].length; Oy++) {
    Kc = wU[wH][Oy];
    if (OD[OD.x]["lower"]) {
      if (wC(OD[OD.x]["plChar"]) != 4) {
        Kc = h4(wU[wH][Oy], OD[OD.x]["gM"]);
      }
    }
    K5 = KV.replace(ON, Kc);
    OQ = eval("/" + "(.*)" + KT + "$/");
    for (var n = 0; n < wB[KT].length; n++) {
      K0 = K5.replace(OQ, wB[KT][n]);
      if (!/\w/.test(K0)) {
        var exist = false;
        for (var p = 0; p < Kf.length; p++) {
          if (Kf[p][1] === K0) {
            exist = true;
            break;
          }
        }
        if (!exist) {
          var gY = false;
          for (var OC = 0; OC < wn.length; OC++) {
            if (eval("/" + wn[OC] + "/").test(K0)) {
              gY = true;
              break;
            }
          }
          if (!gY && OD[OD.x]["hq"]) {
            if (gQ[hz] && K0.length > 1) {
              if (gQ[hz].indexOf("," + K0 + ",") == -1) gY = true;
            }
          }
          if (!gY) {
            Kf[Kf.length] = [help, (OD[OD.x]["lower"] ? "---" : "") + K0];
            OD[OD.x]["list"][Kf.length - 1] = eval(Kf[Kf.length - 1]);
          }
        }
        if (Kf.length > 20) return Kf;
      }
    }
  }
  var Kw = "";
  for (var i = 0; i < Kf.length; i++) {
    Kw += (i > 0 ? "||" : "") + Kf[i][1];
  }
  for (var l = 0; l < wj.length; l++) {
    Og = eval("/" + wj[l][0] + "/g");
    if (Og.test(Kw)) {
      Kw = Kw.replace(Og, wj[l][1]);
    }
  }
  Kw = Kw.split("||");
  for (var i = 0; i < Kf.length; i++) {
    Kf[i][1] = Kw[i];
  }
  return Kf;
};