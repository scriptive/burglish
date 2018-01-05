function Ns(e) {
  var wx = e.target ? e.target : e.srcElement;
  OD.x = wx.id;
  OD["ignore"] = false;
  var wV = e.keyCode ? e.keyCode : e.charCode;
  OD.ctrl = e.ctrlKey || e.ctrl;
  OD.alt = e.altKey || e.altLeft;
  OD.shift = e.shiftKey || e.shift || e.shiftLeft;
  OD.gz = (OD.alt ? 1 : 0) | (OD.ctrl ? 2 : 0) | (OD.shift ? 4 : 0);
  OD.hR = (wV >= 112 && wV <= 123) || wV < 20 || (wV >= 37 && wV <= 40) || (wV >= 33 && wV <= 36) || wV == 45 || wV == 46;
  OD.QB = 0;
  OD.Qg = wV;
  if (wV == 13) {
    var Oc = OD[OD.x]["Km"] == 0;
    if (!Oc) {
      NB(wx);
      if (QT) OD.QB = 1;
      return false;
    }
    return Oc;
  } else if (wV == 113) {
    var Kg = $("chk" + wx.id + "K6");
    classToggle(Kg,null,!classContain(Kg));
    // classToggle(Kg);
    // console.log(Kg);
    // Kg.checked = !Kg.checked;
    gD(Kg, wx.id, "K6");
    return false;
  } else if (wV == 38 && OD[OD.x]["Km"] > 0) {
    OD[OD.x]["hC"] = OD[OD.x]["hC"] - 1;
    N2(OD[OD.x]["hC"]);
    if (QT) OD.QB = 1;
    return !OD[OD.x]["K6"];
  } else if (wV == 40) {
    if (!OD[OD.x]["KV"]) return;
    if (OD[OD.x]["Km"] == 0) {
      NP(wx);
    } else if (OD[OD.x]["hC"] < OD[OD.x]["Km"] - 1) {
      OD[OD.x]["hC"] = OD[OD.x]["hC"] + 1;
      N2(OD[OD.x]["hC"]);
    }
    if (QT) OD.QB = 1;
    return !OD[OD.x]["K6"];
  } else if (wV == 32) {

    if (OD[OD.x]["K6"]) {
      if (!OD[OD.x]["KV"]) return;
      if (OD[OD.x]["Km"] > 1) {
        OD[OD.x]["hC"] += 1;
        if (OD[OD.x]["hC"] >= OD[OD.x]["Km"]) OD[OD.x]["hC"] = 0;
        N2(OD[OD.x]["hC"]);
        // console.log(wV,'32-1');
      } else {
        hX(wx);
        // console.log(wV,'32-2');
      }
      if (QT) OD.QB = 1;
      return false;
    }
  } else if (wV == 9) {
    hX(wx);
    if (QT) wx.blur();
    return false;
  } else if (wV == 37 && OD[OD.x]["Km"] > 10 && OD[OD.x]["hC"] > -1) {
    OD[OD.x]["hC"] = (OD[OD.x]["hC"] > 10 ? OD[OD.x]["hC"] - 10 : 0);
    N2(OD[OD.x]["hC"]);
    if (QT) OD.QB = 1;
    return false;
  } else if (wV == 39 && OD[OD.x]["Km"] > 0 && OD[OD.x]["hC"] > -1) {
    OD[OD.x]["hC"] = (OD[OD.x]["hC"] + 10 < OD[OD.x]["Km"] ? OD[OD.x]["hC"] + 10 : OD[OD.x]["Km"] - 1);
    N2(OD[OD.x]["hC"]);
    if (QT) OD.QB = 1;
    return false;
  } else if (wV == 8) {
    if (OD[OD.x]["KV"].length > 0) {
      OD[OD.x]["KV"] = OD[OD.x]["KV"].substr(0, OD[OD.x]["KV"].length - 1);
      if (OD[OD.x]["K6"]) NP(wx);
    }
    if (OD[OD.x]["Qo"]) OD[OD.x]["w5"] = "";
  } else if (wV == 46) {} else if (wV == 35 || wV == 36) {} else if (wV >= 48 && wV <= 57) {
    if (/[^\d]+/.test(OD[OD.x]["KV"])) {
      OD["ignore"] = true;
      OD[OD.x]["hC"] = (OD[OD.x]["hC"] >= 10 ? OD[OD.x]["hC"] - OD[OD.x]["hC"] % 10 : 0) + wV - 48;
      N2(OD[OD.x]["hC"]);
      hX(wx);
      if (QT) OD.QB = 1;
      return false;
    }
  } else if (wV == 27) {
    OD[OD.x]["KV"] = "";
    OD[OD.x]["Km"] = 0;
    OD[OD.x]["hC"] = -1;
    Kx(OD.x + "suggest");
    return false;
  } else if (wV == 118) {
    return false;
  } else if (wV == 119 || (OD.gz == 1 && wV == 78)) {
    var Kg = $("chk" + wx.id + "Qo");
    classToggle(Kg,null,!classContain(Kg));
    gD(Kg, wx.id, "Qo");
    return false;
  }
  if (w1 && (OD.gz & 3 == 3)) NL(e);
};