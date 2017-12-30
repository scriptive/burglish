String.prototype.gL = function(src, gX) {
  if (!gX) gX = {};
  var Oo = Oa[src];
  var QV = this;
  if (/[^၁-၉]၀/.test(QV)) {
    QV = QV.replace(/([^၁-၉])၀/g, "$1ဝ");
  }
  if (!gX["Qv"]) {
    var wT = (Oo.max < 0x109F ? Oo.max : 0x109F);
    for (var i = 0x1022; i <= wT; i++) {
      if (i >= 0x1040 && i <= 0x1049) continue;
      var Oi = hT(i);
      var re = eval("/(" + Oi + ")" + Oi + "+/gm");
      if (re.test(QV)) QV = QV.replace(re, "$1");
    }
  }
  if (Oo["order"]) {
    if (Oo["order"]["NA"]) {
      var Ot = Oo["order"]["NA"]["Ov"];
      for (var i = 0; i < Ot.length; i++) {
        var re = eval("/" + Ot[i][0] + "/g");
        if (re.test(QV)) QV = QV.replace(re, Ot[i][1]);
      }
    }
    if (Oo["order"]["h_"]) {
      var Ot = Oo["order"]["h_"];
      for (var i = 0; i < Ot.length; i++) {
        var re = eval("/" + Ot[i][0] + "/g");
        if (re.test(QV)) QV = QV.replace(re, Ot[i][1]);
      }
    }
    if (Oo["order"]["KT"]) {
      var Ot = Oo["order"]["KT"];
      for (var i = 0; i < Ot.length - 2; i++) {
        var re = eval("/([" + Ot.slice(i + 1).join("") + "]+)(" + Ot[i] + ")/g");
        if (re.test(QV)) QV = QV.replace(re, "$2$1");
      }
    }
    if (Oo["order"]["after"]) {
      var Ot = Oo["order"]["after"];
      for (var i = 0; i < Ot.length; i++) {
        var re = eval("/" + Ot[i][0] + "/g");
        if (re.test(QV)) QV = QV.replace(re, Ot[i][1]);
      }
    }
  }
  return QV;
};