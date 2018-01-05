function NP(wx) {
  OD.x = wx.id;
  if (!OD[OD.x]) return;
  var KV = OD[OD.x]["KV"];
  if (!KV) {
    if ($("burmese") && !OD[OD.x]["self"]) $("burmese").value = "";
    Kx(OD.x + "suggest");
    return;
  }
  if (/\d/.test(KV) && OD.gz) {
    OD[OD.x]['KV'] = '';
    Kx(OD.x + "suggest");
    return;
  }
  var Kf = gW(wx, KV);
  var KZ = Kf.length;
  Kf = gF(wx, KV, Kf);
  Kf = Nb(wx, KV, Kf);
  Kf = g3(wx, KV, Kf);
  if (!OD[OD.x]["hq"]) {
    OD[OD.x]["hE"] = Kf.length == 0 ? (OD[OD.x]["hE"] + 1) : 0;
    if (OD[OD.x]["hE"] == 0) {
      OD[OD.x]["w6"] = [];
      OD[OD.x]["w6"][0] = Kf[0];
    }
    if (OD[OD.x]["hE"] == 1 && KV.length > OD[OD.x]["hE"]) {
      var Ot = OD[OD.x]["KV"];
      OD[OD.x]["KV"] = OD[OD.x]["w6"][0][0];
      OD[OD.x]["list"] = [OD[OD.x]["w6"][0]];
      OD[OD.x]["Km"] = 1;
      NB(wx);
      OD[OD.x]["KV"] = KV.substring(KV.length - OD[OD.x]["hE"], KV.length);
      OD[OD.x]["hE"] = 0;
    }
  }
  N8(wx, KV, Kf);
  // $("col" + OD.x + "0").style.width = /\d+/.test(KV) ? "auto" : '150';
};