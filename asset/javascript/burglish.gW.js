function gW(wx, KV) {
  var Nu = 0;
  var Kf = [];
  var qtmp = KV.Ql();
  var isBur = OD[OD.x]["isburmese"] ? 1 : 0;
  var re = eval("/^" + qtmp + "/");
  for (var i = 0; i < wI.length; i++) {
    if (Nu > 10) break;
    if (re.test(wI[i][isBur])) {
      OD[OD.x]["list"][Nu] = Kf[Nu] = wI[i].slice();
      Nu++;
    }
  }
  return Kf;
};