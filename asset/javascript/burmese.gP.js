String.prototype.gP = function() {
  var Oc = "";
  var Kt = ["0123456789", "၀၁၂၃၄၅၆၇၈၉"];
  for (var Oy = 0; Oy < this.length; Oy++) {
    Oc += /[0-9]/.test(this.charAt(Oy)) ? Kt[1].charAt(this.charAt(Oy)) : this.charAt(Oy);
  }
  return Oc;
};