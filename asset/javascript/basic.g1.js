function g1() {
  if ($(app.id.force).value != QN) QN = $(app.id.force).value;
  if ($(app.id.exception).value != g8) g8 = $(app.id.exception).value;
  var wq = $(eText(app.id.source)).value;
  self.status = gM[app.id.source].name + " ->" + gM[app.id.target].name;
  var Ot = wq;
  if (!Oa[gM[app.id.source].name].unicode) {
    Ot = Ot.Q5();
  }
  Ot = Ot.Ng(gM[app.id.source].name, gM[app.id.target].name);
  if (!Oa[gM[app.id.source].name].unicode) {
    Ot = Ot.Nf();
  }
  $(eText(app.id.target)).value = Ot;
  Nl(false);
};