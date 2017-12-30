function NL(e) {
  if (OD.QB) return false;
  var wx = e.target ? e.target : e.srcElement;
  var wV = e.keyCode ? e.keyCode : e.charCode;
  if (OD.gz & 4) wV = OD.Qg;
  var KD = hT(wV);
  var Kk = String(OD.gz) + KD;
  if (((OD.gz == 1) || (OD.gz == 2) || OD.hR || !OD.x) && !Oa[hz]["Ow"][Kk]) return;
  var re = /[\w;\.\,`]/;
  if (re.test(KD) && OD[OD.x]["K6"]) {
    if (!OD["ignore"] && (e.charCode != 0 || !Ku(e.charCode))) {
      if (OD[OD.x]["KV"] == "") {
        OD[OD.x]["spos"] = wx.selectionStart;
      }
      OD[OD.x]["KV"] += "" + KD;
      NP(wx);
    }
  } else if (OD[OD.x]["Qo"]) {
    var Oi = null;
    if (w1) {
      if (Oa[hz]["Ow"][Kk]) {
        Oi = Oa[hz]["Ow"][Kk];
        e.keyCode = null;
        return QC(wx, Oi, "");
      } else {
        Oi = ((OD.gz == 3) ? h4(hT(hG(wV))) : hG(wV));
        if (Oa[hz].unicode == 51) {
          var hx = OD[OD.x]["w5"];
          var hS = hT(Oi);
          if (g_(wx, hS, hx)) {
            e.keyCode = null;
            OD[OD.x]["w5"] = hx;
            return;
          }
          OD[OD.x]["w5"] = hT(Oi);
        }
        if (Oi) e.keyCode = Oi;
      }
      return;
    } else if (Qn(String(wV)) || Oa[hz]["Ow"][Kk]) {
      if (Oa[hz]["Ow"][Kk]) {
        Oi = Oa[hz]["Ow"][Kk];
      } else {
        if (hG(wV) == 0) return;
        Oi = ((OD.gz == 3) ? h4(hT(hG(wV))) : hT(hG(wV)));
      }
      var OT = wx.selectionStart;
      if (Oa[hz].unicode == 51) {
        var hx = wx.value.substr(OT - 1, 1);
        if (g_(wx, Oi, hx)) return false;
      }
      return Q0(wx, Oi, "");
    }
  }
};
