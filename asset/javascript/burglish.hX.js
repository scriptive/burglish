function hX(wx) {
  var KF = $(OD.x);
  var h9 = 0;
  if (!OD[OD.x]["KV"]) {
    return;
  }
  var wG = OD[OD.x]["list"][OD[OD.x]["hC"]] != null ? OD[OD.x]["list"][OD[OD.x]["hC"]] : OD[OD.x]["list"][0];
  var KU = wG[1].replace(/\-/g, '');
  var hU = OD[OD.x]["Ke"];
  if (OD[OD.x]["lower"] && hU.length > 0) {
    var Nj = hU.charAt(hU.length - 1);
    var wJ = 1;
    if (wC(Nj) != 82) {
      wJ = 0;
      Nj = '';
    }
    var KJ = hU.charAt(hU.length - 1 - wJ);
    var NF = hU.substr(0, hU.length - 1 - wJ);
  }
  if (hz == "Zawgyi") {
    if (OD[OD.x]["lower"] && hU.length > 0) {
      if (KW(KU.charAt(0)) != 3) {
        var re = eval("/" + hU + OD[OD.x]["KV"] + "/gi");
        h9 = 1 + wJ;
        var KN = 0;
        for (var Oy = 0; Oy < KU.length; Oy++) {
          switch (wC(KU.charAt(Oy))) {
            case 77:
            case 99:
            case 100:
              NF += KU.charAt(Oy);
              KN++;
              h9--;
              break;
          }
        }
        KU = KU.substr(KN, KU.length - KN);
        var hM = KU.charAt(0);
        if (wC(KJ) == 4) {
          if (wC(hM) >= 99 && wC(hM) <= 106) {
            KU = hM + KU.charAt(1) + 'ၤ' + KU.substr(2, KU.length - 1);
          } else {
            KU = hM + 'ၤ' + KU.substr(1, KU.length - 1);
          }
        } else if (wC(KJ) == 14 && wC(hM) == 12) {
          KU = '႑' + KU.substr(1, KU.length - 1);
        } else if (wC(KJ) == 10 && wC(hM) == 43) {
          KU = '႗' + KU.substr(1, KU.length - 1);
        } else if (wC(KJ) == 12 && wC(hM) == 12) {
          KU = 'ၮ' + KU.substr(1, KU.length - 1);
        } else if (wC(KJ) == 13 && wC(hM) == 12) {
          KU = 'ၯ' + KU.substr(1, KU.length - 1);
        } else if (wC(hM) == 29) {
          KU = 'ႆ' + KU.substr(1, KU.length - 1);
        } else if (wC(hM) == 117) {

        } else if (wC(hM) == 31) {

        } else {
          if (KJ) NF += KJ;
          h9--;
        }
        var Kj = NF + KU;
        for (var l = 0; l < wp.length; l++) {
          if (wp[l].length >= 4) {
            Kj = Kj.replace(wp[l][2], wp[l][3]);
          }
          var Og = eval("/" + wp[l][0] + "/");
          if (Og.test(Kj)) {
            Kj = Kj.replace(Og, wp[l][1]);
          }
        }
      }
    }
  } else if (Oa[hz].unicode == 51) {
    if (OD[OD.x]["lower"] && NF.length > 1) {
      Kj = '္' + KU;
    }
  }
  if (!wG) {
    OD[OD.x]["KV"] = "";
    return;
  }
  if (typeof(wG) != "string") wG = KU;
  wG = OD[OD.x]["lower"] ? Kj : wG;
  wG = wG.replace(/\-/g, '');
  KR(KF, wG, '', OD[OD.x]["KV"].length + (OD[OD.x]["lower"] ? h9 + NF.length : 0), OD[OD.x]["hE"]);
  QO(OD[OD.x]["KV"], wG);
};