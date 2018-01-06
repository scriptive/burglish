String.prototype.Ng = function(src, dest, gX) {
  if (!gX) gX = {};
  var Oz = Oa[src];
  var Oo = Oa[dest];
  var NV = {};
  var Nc = {};
  var hY = this;
  var QV = "";
  var gq = 0x3000;
  var wb = 16;
  var K8 = 226;
  if (Oz["order"]) {
    var Ot = Oz["order"]["NA"]["O0"];
    for (var i = 0; i < Ot.length; i++) {
      var re = eval("/" + Ot[i][0] + "/g");
      if (re.test(hY)) hY = hY.replace(re, Ot[i][1]);
    }
  }
  for (var i = 0; i < K8; i++) {
    if (Oz.OE && Oz.OE[i] != 0) {
      NV[Oz.OE[i]] = i + gq;
    }
  }
  if (Oz.O8) for (var i = 0; i < Oz.O8.length; i++) Nc[Oz.O8[i][0]] = (0xff & NV[Oz.O8[i][0]]) + (i << 8);

  for (var i = 0; i < hY.length; i++) {
    var Oi = hY.charCodeAt(i);
    if (Oi >= Oz.min && Oi <= Oz.max) {
      if (Nc[Oi] && !Oo.OE[Nc[Oi] & 0xff] != 0) {
        var hZ = Oz.O8[(Nc[Oi] >> 8) & 0xff][1];
        QV += hZ;
        continue;
      }
      if (NV[Oi]) {
        QV += hT(NV[Oi]);
        continue;
      }
    }
    QV += hT(Oi);
  }
  hY = QV;
  QV = "";
  for (var j = 0; j < hY.length; j++) {
    var Oi = hY.charCodeAt(j);
    if (Oi >= gq && Oi <= gq + K8) {
      if (Oo.OE && Oo.OE[Oi - gq] != 0) {
        var h2 = false;
        if (hY.length > 1) {
          for (var i = 0; i < Oo.O8.length; i++) {
            if (Oo.O8[i][1].length > 1 && hY.slice(j).indexOf(Oo.O8[i][1]) == 0) {
              QV += hT(Oo.O8[i][0]);
              j += Oo.O8[i].length - 1;
              h2 = true;
              break;
            }
          }
        }
        if (!h2) QV += hT(Oo.OE[Oi - gq]);
        continue;
      }
    }
    QV += hT(Oi);
  }
  QV = QV.gL(dest);
  return QV;
};