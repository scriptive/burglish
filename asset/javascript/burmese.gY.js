String.prototype.gY = function() {
  var re;
  var Oc = String(this);
  for (var Oy = 0; Oy < Qc.en.length; Oy++) {
    var re = eval("/" + Qc.en[Oy] + "/gi");
    if (re.test(Oc)) {
      Oc = Oc.replace(re, Qc.bu[Oy]);
    }
  }
  return Oc.gP();
};