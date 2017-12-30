function hF(Oz, gM) {
  var Oc = "";
  gM = gM ? gM : hz;
  var hN = Oa[gM].OE;
  for (var i = 0; i < Oz.length; i++) {
    for (var j = 0; j < hN.length; j++) {
      if (hT(hN[j]) == Oz.charAt(i)) {
        if (j > 32 && j < 32 + 33) {
          Oc += hT(hN[j - 33]);
        } else {
          Oc += Oz.charAt(i);
        }
        break;
      }
    }
  }
  return Oc;
};