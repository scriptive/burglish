function gb() {
  // var Ot = ["QE", "NQ", "g8"];
  var Ot = ["QE", "g8"];
  for (var j = 0; j < Ot.length; j++) {
    var wM = eval(Ot[j]).split(",");
    for (var i = 0; i < wM.length; i++) {
      if (!/[^a-z]/.test(wM[i])) {
        QX[wM[i].toLowerCase()] = 1;
      }
    }
  }
  var wM = QN.split(",");
  for (var i = 0; i < wM.length; i++) {
    h7[wM[i]] = 1;
  }
}