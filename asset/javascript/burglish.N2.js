
function N2(index) {
  OD[OD.x]["hC"] = index;
  if (index < 0) {
    Kx(OD.x + "drop");
    OD[OD.x]["hC"] = -1;
    return false;
  }
  if (OD[OD.x]["Km"] < 1) return false;
  for (var i = 0; i < OD[OD.x]["Km"]; i++) {
    var itemX = $("wO" + OD.x + i);
    // itemX.className = i == index ? "Nh" : "ga";
    itemX.className = i == index ? "on" : "off";
  }
  for (var i = 0; i < Math.ceil(OD[OD.x]["Km"] / 10); i++) {
    var itemX = $("col" + OD.x + i);
    // $("col" + OD.x + i).className = i == Math.floor(OD[OD.x]["hC"] / 10) ? "gH" : "gV";
    if(itemX)itemX.className = i == Math.floor(OD[OD.x]["hC"] / 10) ? "gH" : "gV";
  }
  wQ(OD.x + "drop");
  return false;
};