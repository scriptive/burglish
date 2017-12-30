function g3(wx, KV, Kf) {
  for (var OM = 0; OM < Kf.length; OM++) {
    for (var OC = 0; OC < w9.length; OC++) {
      var OL = eval("/" + w9[OC][0] + "/");
      if (OL.test(Kf[OM][1])) {
        var K0 = Kf[OM][1].replace(OL, w9[OC][1]);
        var exist = false;
        for (var Oe = 0; Oe < Kf.length; Oe++) {
          if (Kf[Oe][1] == K0) {
            exist = true;
            break;
          }
        }
        if (!exist) {
          var gY = false;
          for (var Oe = 0; Oe < wn.length; Oe++) {
            if (eval("/" + wn[Oe] + "/").test(K0)) {
              gY = true;
              break;
            }
          }
          if (!gY) {
            Kf[Kf.length] = [Kf[OM][0], K0];
          }
        }
      }
    }
  }
  var Q3 = [];
  for (var OM = 0; OM < Kf.length; OM++) {
    if (Kf[OM].length >= 3) {
      if (Kf[OM][2] != -1) {
        Q3[Q3.length] = Kf[OM];
      }
    } else {
      Q3[Q3.length] = Kf[OM];
    }
  }
  for (var OM = 0; OM < Kf.length; OM++) {
    if (Kf[OM].length >= 3) {
      if (Kf[OM][2] == -1) {
        Q3[Q3.length] = Kf[OM];
      }
    }
  }
  Kf = Q3;
  if (OD[OD.x]["gM"] != "Zawgyi") {
    var Ot = "";
    for (var OM = 0; OM < Kf.length; OM++) {
      Ot += (OM > 0 ? '\f' : '') + Kf[OM][1];
    }
    Ot = Ot.Ng("Zawgyi", OD[OD.x]["gM"], {
      "Qv": true
    }).split('\f');
    for (var OM = 0; OM < Kf.length; OM++) {
      Kf[OM][1] = Ot[OM];
    }
  }
  OD[OD.x]["list"] = Kf;
  return Kf;
};
