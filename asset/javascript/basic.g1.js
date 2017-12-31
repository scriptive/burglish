function g1() {
  if ($(eForce()).value != QN) QN = $(eForce()).value;
  if ($(eExcept()).value != g8) g8 = $(eExcept()).value;
  var wq = $(eText(eSrc)).value;
  self.status = gM[eSrc].name + " ->" + gM[eTar].name;
  var Ot = wq;
  if (!Oa[gM[eSrc].name].unicode) {
    Ot = Ot.Q5();
  }
  Ot = Ot.Ng(gM[eSrc].name, gM[eTar].name);
  if (!Oa[gM[eSrc].name].unicode) {
    Ot = Ot.Nf();
  }
  $(eText(eTar)).value = Ot;
  Nl(false);
};