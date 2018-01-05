function hV(O4) {
  if (!OD.x) return;
  OD[OD.x].gM= hz = O4;
  var OT = $(OD.x);
  OT.focus();
  // var i = Oa[O4]["css"].length - 1;
  // while (i >= 0) {
  //   OT.style.fontFamily = Oa[O4]["css"][i] + "," + OT.style.fontFamily.replace(Oa[O4]["css"][i] + ",", "");
  //   i--;
  // }
  // OT.style.fontSize = Oa[O4].QG + "pt";
  // $(OD.x + "span").style.fontFamily = $(OD.x + "suggest").style.fontFamily = String(Oa[O4]["css"]);
  // $(OD.x + "span").style.fontSize = $(OD.x + "suggest").style.fontSize = Oa[O4].QG + "pt";
  // if ($("help" + OD.x)) {
  //   $("help" + OD.x).style.fontFamily = String(Oa[O4]["css"]);
  //   $("help" + OD.x).style.fontSize = Oa[O4].QG + "pt";
  // }

  if (!K3[hz]) {
    K3[hz] = K3["Myanmar3"].join('\f').Ng("Myanmar3", hz, {
      "Qv": true
    }).split("\f");
  }
  // if (!K3[hz]) K3[hz] = K3["Myanmar3"];
  if (classContain("chk" + OD.x + 'NW'))NM(OD.x, 'NW');

  return false;
};