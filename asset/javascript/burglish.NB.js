function NB() {
  var wx = $(OD.x);
  var hC = OD[OD.x]["hC"];
  if (hC == -1 && OD[OD.x]["K6"]) hC = 0;
  if (hC > -1 && hC < OD[OD.x]["Km"]) {
    var KG = OD[OD.x]["list"][hC];
    if (typeof(KG) == "array") KG = KG[0];
    hX(wx);
  }
};