String.prototype.QZ = function(Ob) {
  Ob = Ob ? Ob : "Zawgyi";
  if (!Oa[Ob]["order"]) {
    return this;
  }
  var re;
  var Oc = this;
  if (Oa[Ob]["order"]["KT"]) {
    var Ot = Oa[Ob]["order"]["KT"];
    for (var i = 0; i < Ot.length - 2; i++) {
      var re = eval("/([" + Ot.slice(i + 1).join("") + "]+)(" + Ot[i] + ")/g");
      if (re.test(Oc)) Oc = Oc.replace(re, "$2$1");
    }
  }
  return Oc;
};